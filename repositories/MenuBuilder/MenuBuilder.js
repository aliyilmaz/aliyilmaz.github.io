class MenuBuilder {
  constructor(labels) {
    this.labels = labels;
    this.menuCounter = 0;
    this.menus = [];
    this.storageEnabled = labels.storage ?? true; // storage parameter check
    if (!this.storageEnabled) {
      localStorage.removeItem('menus');
    }
    this.init();

    window.addEventListener('DOMContentLoaded', () => {
      // First, it is checked if there is any external JSON data.
      if (Array.isArray(labels.import) && labels.import.length > 0) {
        this.menus = labels.import;
      } else if (this.storageEnabled) {
        this.menus = JSON.parse(localStorage.getItem('menus')) || [];
      }

      this.menus.forEach(menu => this.renderMenu(menu));
      this.updateJsonPreview(this.menus);
    });
  }

  init() {
    document.querySelector('#MenuBuilder h3').innerText = this.labels.json_output;
    document.querySelector('#MenuBuilder #createMenuButton').innerText = this.labels.createMenu;
    document.querySelector("#MenuBuilder #new-menu-name").placeholder = this.labels.menuName;
    document.querySelector('#MenuBuilder #createMenuButton').addEventListener('click', () => this.createMenu());
  }

  clearStorage() {
    localStorage.removeItem('menus');
  }

  updateJsonPreview(data) {
    const output = document.getElementById('json-output');
    if (output) {
      output.textContent = JSON.stringify(data, null, 2);
    }

    if (this.labels.output) {
      const customOutput = document.querySelector(this.labels.output);
      if (customOutput) {
        customOutput.value = JSON.stringify(data, null, 2);
      }
    }
  }

  saveMenus() {
    const menus = [];
    document.querySelectorAll('.menu-block').forEach(menuBlock => {
      const menuTitle = menuBlock.querySelector('.menu-title').innerText.trim();
      const items = this.getMenuItems(menuBlock.querySelector('ul'));
      menus.push({ title: menuTitle, items });
    });

    if (this.storageEnabled) {
      localStorage.setItem('menus', JSON.stringify(menus));
    }

    this.updateJsonPreview(menus);
  }

  getMenuItems(ul) {
    return Array.from(ul.children).map(li => {
      const name = li.querySelector('.item-name')?.innerText.trim() || '';
      const link = li.querySelector('.item-link')?.innerText.trim() || '';
      const className = li.querySelector('.item-class')?.innerText.trim() || '';
      const openInNewTab = li.querySelector('.open-new-tab')?.checked || false;
      const children = this.getMenuItems(li.querySelector('ul'));
      return { name, link, className, openInNewTab, children };
    });
  }

  renderMenu(menu) {
    const menuId = `menu-${this.menuCounter++}`;
    const itemId = `item-${Date.now()}`;
    const menuBlock = document.createElement("div");
    menuBlock.className = "menu-block";
    
    menuBlock.innerHTML = `<form id="${menuId}-form">
      <div class="menu-card">
        <button type="button" class="delete-menu" title="${this.labels.deleteMenu}">x</button>
        <div class="menu-title" contenteditable="true" title="${this.labels.editMenu}">${menu.title}</div>
        <div class="menu-items">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="${menuId}-${itemId}-name-input">${this.labels.itemName}</label>
                <input type="text" class="form-control" placeholder="${this.labels.itemName}" id="${menuId}-${itemId}-name-input">
              </div>
              <div class="form-group">
                <label for="${menuId}-${itemId}-link-input">${this.labels.itemLink}</label>
                <input type="text" class="form-control" placeholder="${this.labels.itemLink}" id="${menuId}-${itemId}-link-input">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="${menuId}-${itemId}-class-input">${this.labels.itemClass}</label>
                <input type="text" class="form-control" placeholder="${this.labels.itemClass}" id="${menuId}-${itemId}-class-input">
              </div>
              <div class="form-group">
                <label class="form-check-label" for="${menuId}-${itemId}-new-tab-checkbox">${this.labels.openInNewTab}
                  <label class="switch" for="${menuId}-${itemId}-new-tab-checkbox">
                    <input type="checkbox" id="${menuId}-${itemId}-new-tab-checkbox">
                    <span class="slider"></span>
                  </label>
                </label>
              </div>                          
            </div>
          </div>
          <button type="button" class="btn btn-primary mb-2" id="${menuId}-add-item-btn">${this.labels.addItemButton}</button>        
          <hr>
        </div>
        <ul id="${menuId}-list" class="nested-sortable"></ul>
      </div>
    </form>`;

    document.getElementById("menus-container").appendChild(menuBlock);
    
    menuBlock.querySelector('.delete-menu').addEventListener('click', (e) => {
      this.deleteMenu(e.target);
    });
    
    menuBlock.querySelector(`#${menuId}-add-item-btn`).addEventListener('click', () => {
      this.addMenuItem(menuId, itemId);
    });

    const ul = menuBlock.querySelector('ul');
    this.buildItems(menu.items, ul);
    this.initSortable(ul);
    this.setupTitleEdit(menuBlock.querySelector('.menu-title'));
  }

  buildItems(items, ul) {
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="item-content">
          <div class="text-block">
            <div class="item-inputs">
              <div class="item-name" title="${this.labels.editItem}">${item.name}</div>
              <div class="item-link" title="${this.labels.editItem}">${item.link || ''}</div>
              <div class="item-class" title="${this.labels.editItem}">${item.className || ''}</div>
              <label for="${ul.id}_open_new_tab-${index}" class="switch" title="${this.labels.openInNewTab}">
                <input id="${ul.id}_open_new_tab-${index}" type="checkbox" class="open-new-tab" ${item.openInNewTab ? 'checked' : ''}>
                <span class="slider"></span>
              </label>
            </div>
            <button type="button" class="delete-item" title="${this.labels.deleteItem}">×</button>
          </div>
        </div>
        <ul class="nested-sortable"></ul>
      `;
      ul.appendChild(li);
      
      li.querySelector('.delete-item').addEventListener('click', () => {
        li.remove();
        this.saveMenus();
      });

      this.addEditEvents(li.querySelector('.item-name'));
      this.addEditEvents(li.querySelector('.item-link'));
      this.addEditEvents(li.querySelector('.item-class'));
      this.addCheckboxListener(li.querySelector('.open-new-tab'));
      this.initSortable(li.querySelector('ul'));
      
      if (item.children?.length) {
        this.buildItems(item.children, li.querySelector('ul'));
      }
    });
  }

  addCheckboxListener(checkbox) {
    checkbox.addEventListener('change', () => {
      this.saveMenus();
    });
  }

  createMenu() {
    const newMenuName = document.getElementById("new-menu-name").value.trim();
    if (!newMenuName) return;

    const newMenu = {
      title: newMenuName,
      items: []
    };

    this.renderMenu(newMenu);
    this.saveMenus();
    document.getElementById("new-menu-name").value = "";
    this.menuCounter++; 
  }

  deleteMenu(btn) {
    if (confirm(this.labels.confirmDeleteMenu)) {
      const menuBlock = btn.closest(".menu-block");
      if (menuBlock) {
        menuBlock.remove();
        this.saveMenus();
      }
    }
  }

  addMenuItem(menuId, itemId) {
    const nameInput = document.getElementById(`${menuId}-${itemId}-name-input`);
    const linkInput = document.getElementById(`${menuId}-${itemId}-link-input`);
    const classInput = document.getElementById(`${menuId}-${itemId}-class-input`);
    const newTabCheckbox = document.getElementById(`${menuId}-${itemId}-new-tab-checkbox`);
    const list = document.getElementById(`${menuId}-list`);
    const name = nameInput.value.trim();
    const link = linkInput.value.trim();
    const className = classInput.value.trim();
    const openInNewTab = newTabCheckbox.checked;
    if (!name) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="item-content">
        <div class="text-block">
          <div class="item-inputs">
            <div class="item-name" title="${this.labels.editItem}">${name}</div>
            <div class="item-link" title="${this.labels.editItem}">${link || ''}</div>
            <div class="item-class" title="${this.labels.editItem}">${className || ''}</div>
            <label for="${menuId}-${itemId}-new-tab-checkbox-row" class="switch" title="${this.labels.openInNewTab}">
              <input id="${menuId}-${itemId}-new-tab-checkbox-row" type="checkbox" class="open-new-tab" ${openInNewTab ? 'checked' : ''}>
              <span class="slider"></span>
            </label>
          </div>
          <button type="button" class="delete-item" onclick="this.closest('li').remove();">×</button>
        </div>
      </div>
      <ul class="nested-sortable"></ul>
    `;

    list.appendChild(li);
    list.querySelector('.delete-item').addEventListener('click', ()=>{
      this.saveMenus();
    });
    this.addEditEvents(li.querySelector('.item-name'));
    this.addEditEvents(li.querySelector('.item-link'));
    this.addEditEvents(li.querySelector('.item-class'));
    this.addCheckboxListener(li.querySelector('.open-new-tab'));
    this.initSortable(li.querySelector('ul'));
    nameInput.value = "";
    linkInput.value = "";
    classInput.value = "";
    newTabCheckbox.checked = false;
    this.saveMenus();
  }

  addEditEvents(element) {
    element.addEventListener("dblclick", () => {
      element.setAttribute("contenteditable", "true");
      element.focus();
    });

    element.addEventListener("blur", () => {
      element.removeAttribute("contenteditable");
      this.saveMenus();
    });

    element.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        element.blur();
      }
    });
  }

  setupTitleEdit(titleElement) {
    titleElement.addEventListener("blur", this.saveMenus.bind(this));
    titleElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        titleElement.blur();
      }
    });
  }

  initSortable(ul) {
    new Sortable(ul, {
      group: 'nested',
      animation: 200,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      ghostClass: 'sortable-ghost',
      onAdd: (evt) => {
        const nestedLists = evt.item.querySelectorAll('ul.nested-sortable');
        nestedLists.forEach(this.initSortable.bind(this));
        this.saveMenus();
      },
      onEnd: this.saveMenus.bind(this)
    });
  }

}