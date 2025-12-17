# MenuBuilder

MenuBuilder is a lightweight, client-side menu editor that lets you create, edit and nest menu items in the browser. It uses Sortable.js for drag-and-drop nested sorting and exports the created menu structures as JSON. Menus can be saved to localStorage or provided/imported as JSON.

## Features
- Create multiple menus
- Add, edit (double-click) and delete menu items
- Drag-and-drop nested sorting with Sortable.js
- "Open in new tab" option per item
- JSON preview and optional form output
- Optional localStorage persistence
- Simple, low-dependency implementation

## Files
- index.html — demo page and example options
- MenuBuilder.js — main MenuBuilder class
- MenuBuilder.css — UI styles
- Sortable/Sortable.min.js — drag-and-drop library (third-party)

## Installation
1. Copy or clone the project files into your web root directory.  
2. Ensure the Sortable.min.js file is located at `Sortable/Sortable.min.js`.  
3. Include the required files in your HTML:
   - `MenuBuilder.css` link
   - `Sortable/Sortable.min.js` script
   - `MenuBuilder.js` script  
4. Initialize the builder with options (see index.html example).

## Usage
Initialize MenuBuilder with an options object:

```javascript
const options = {
  // import: [ ... ]            // Optional: array of menu objects to load
  storage: true,               // Save menus to localStorage
  output: "#json-output-textarea", // Optional: selector for form output
  createMenu: "Create Menu",
  menuName: "New menu name",
  itemName: "Menu item name",
  itemLink: "Link (https://...)",
  itemClass: "Class Name",
  addItemButton: "Add Item",
  openInNewTab: "Open item in new window?",
  deleteMenu: "Delete Menu",
  deleteItem: "Delete Item",
  json_output: "JSON Data View",
  confirmDeleteMenu: "Are you sure you want to delete this menu?",
  editItem: "Edit with double click",
  editMenu: "Edit with single click"
};

new MenuBuilder(options);
```

Menu data structure (example):
```json
[
  {
    "title": "Main Menu",
    "items": [
      {
        "name": "Home",
        "link": "/",
        "className": "nav-home",
        "openInNewTab": false,
        "children": [ /* nested items */ ]
      }
    ]
  }
]
```

## API / Behavior
- new MenuBuilder(labels) — creates a new instance with the given labels/settings.  
- If `storage: true`, menus are saved to localStorage with the key `menus`.  
- To clear saved menus, remove the `menus` key from localStorage or use `localStorage.removeItem('menus')`.

## Contributing
Contributions and bug reports are welcome. Please open a pull request or issue with clear reproduction steps and, if possible, minimal test cases.

## License
MIT — feel free to use and modify. Please attribute when integrating with other projects.