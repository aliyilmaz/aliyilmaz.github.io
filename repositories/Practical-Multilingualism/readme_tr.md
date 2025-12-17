# Practical-Multilingualism

Vanilla JS ile hazırlanmış, küçük ve anlaşılır bir çoklu dil (i18n) örneğidir. Amaç: statik bir sayfada JSON tabanlı çevirilerle dil değiştirmeyi göstermek ve hızlıca yeni dil eklemeyi sağlamaktır.

#### a

```html
<div style="margin-top:20px;">
  <label for="lang-select" data-i18n="select_language"></label>
  <select id="lang-select"></select>
</div>
```

#### select

```html
<div style="margin-top:20px;">
  <label for="lang-select" data-i18n="select_language"></label>
  <div id="lang-links"></div>
</div>
```

## Özellikler
- JSON tabanlı çeviri dosyası (translations.json)
- Yerel önbellekleme: translations dosyası boyutuna göre localStorage'da saklanır
- Dil seçici (select) ve bağlantı (links) ile dil değiştirme
- Basit API: setLanguage, populateLanguages, refreshTranslations

## Hızlı Başlangıç
1. Ampps veya başka bir sunucuda proje klasörünü açın:
   - Windows örneği: http://localhost/Practical-Multilingualism/
2. index.html'i tarayıcıda açın.
3. translations.json dosyasına bakın ve dilleri düzenleyin veya yeni dil ekleyin.

## Yeni Dil Ekleme
1. translations.json dosyasını açın.
2. Yeni bir anahtar (ör. "es") ekleyin ve gerekli anahtarları sağlayın:
   - page_title, title, greeting, username, save_button, select_language, language_fullname
3. Dosyayı kaydedin.
4. Tarayıcıda çevirilerin güncellenmesi için:
   - Sayfayı yenileyin veya
   - localStorage'daki önbelleği temizleyin: Developer Console'da `localStorage.removeItem('translations'); localStorage.removeItem('translations_size');` sonra sayfayı yenileyin
   - Ya da projedeki `refreshTranslations()` fonksiyonunu çağırın.

Örnek translations.json parçası:
```json
{
  "es": {
    "page_title": "Ejemplo multilingüe",
    "title": "Hola Mundo",
    "greeting": "¡Bienvenido!",
    "username": "Nombre de usuario",
    "save_button": "Guardar",
    "select_language": "Selecciona idioma:",
    "language_fullname": "Español"
  }
}
```

## translations.json formatı
- En üst düzey anahtarlar dil kodlarıdır (ör. "en", "tr", "de").
- Her dil objesi, sayfadaki `data-i18n` ile eşleşen anahtar-değer çiftlerini içerir.
- `language_fullname` görsel liste için kullanılır.

## Önbellekleme ve Güncelleme
- Sayfa, translations.json'u ilk yüklemeye çalışır ve dosya boyutunu okuyup localStorage'a kaydeder.
- Eğer translations.json güncellenirse (boyut değişirse), dosya tekrar yüklenip localStorage güncellenir.
- Yerel önbelleği elle temizlemek için: `localStorage.removeItem('translations'); localStorage.removeItem('translations_size');` komutlarını çalıştırın.

## Geliştirme
- Yeni metinleri index.html içinde uygun `data-i18n` attribute'u ile ekleyin.
- JS fonksiyonları küçük ve tek görevlidir; yeni ihtiyaçlar için:
  - URL parametresiyle dil seçimi (ör. ?lang=de) eklenebilir.
  - Çeviri anahtar eksikliği durumunda fallback davranışı genişletilebilir.

## Katkıda Bulunma
1. Fork -> değişiklik -> pull request.
2. Küçük, açıklayıcı commit mesajları kullanın.
3. translations.json için yeni diller eklerken mevcut yapıyı takip edin.

## Lisans
MIT License — özgürce kullanabilirsiniz. Projeye katkı sağlarken lisans bilgisine uygun davranın.