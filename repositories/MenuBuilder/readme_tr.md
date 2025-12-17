# MenuBuilder

MenuBuilder, tarayıcıda menü öğeleri oluşturmanıza, düzenlemenize ve iç içe yerleştirmenize olanak tanıyan hafif, istemci taraflı bir menü düzenleyicisidir. Sürükle-bırak ile iç içe sıralama için Sortable.js kullanır ve oluşturulan menü yapılarını JSON olarak dışa verir. Menüler localStorage'a kaydedilebilir veya JSON olarak sağlanıp içe aktarılabilir.

## Özellikler
- Birden çok menü oluşturma
- Menü öğelerini ekleme, düzenleme (çift tıklama ile) ve silme
- Sortable.js ile sürükle-bırak iç içe sıralama
- Her öğe için "yeni sekmede aç" seçeneği
- JSON önizlemesi ve isteğe bağlı form çıktısı
- İsteğe bağlı localStorage kalıcılığı
- Basit ve az bağımlılıklı uygulama

## Dosyalar
- index.html — demo sayfası ve seçenek örneği
- MenuBuilder.js — ana MenuBuilder sınıfı
- MenuBuilder.css — kullanıcı arayüzü stilleri
- Sortable/Sortable.min.js — sürükle-bırak kütüphanesi (üçüncü taraf)

## Kurulum
1. Proje dosyalarını web kök dizinine kopyalayın veya klonlayın.  
2. Sortable.min.js dosyasının `Sortable/Sortable.min.js` yolunda olduğundan emin olun.  
3. HTML içinde gerekli dosyaları ekleyin:
   - `MenuBuilder.css` bağlantısı
   - `Sortable/Sortable.min.js` script'i
   - `MenuBuilder.js` script'i  
4. Builder'ı seçeneklerle başlatın (index.html örneğine bakın).

## Kullanım
MenuBuilder'ı bir seçenek nesnesi ile başlatın:

```javascript
const options = {
  // import: [ ... ]            // İsteğe bağlı: yüklemek için menü nesnelerinin dizisi
  storage: true,               // Menüler localStorage'a kaydedilsin mi
  output: "#json-output-textarea", // İsteğe bağlı: form çıktısı için selector
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

Menü veri yapısı (örnek):
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
        "children": [ /* iç içe öğeler */ ]
      }
    ]
  }
]
```

## API / Davranış
- new MenuBuilder(labels) — verilen etiketler/ayarlarla yeni bir örnek oluşturur.  
- `storage: true` ise menüler `menus` anahtarıyla localStorage'a kaydedilir.  
- Kaydedilmiş menüleri temizlemek için localStorage'dan `menus` anahtarını kaldırın veya `localStorage.removeItem('menus')` kullanın.

## Katkıda Bulunma
Katkılar ve hata raporları memnuniyetle kabul edilir. Net yeniden üretme adımları ve mümkünse minimal test vakaları ile pull request veya issue açın.

## Lisans
MIT — kullanıp değiştirebilirsiniz. Diğer projelerle birleştirirken atıf eklemeyi unutmayın.