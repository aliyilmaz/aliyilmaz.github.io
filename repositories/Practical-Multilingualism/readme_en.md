# Practical-Multilingualism

A small and clear multilingual (i18n) example made with plain Vanilla JS. Purpose: to demonstrate switching languages on a static page using JSON-based translations and to make it quick to add a new language.

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

## Features
- JSON-based translations file (translations.json)
- Local caching: the translations file is stored in localStorage based on its size
- Language switcher via select and links
- Simple API: setLanguage, populateLanguages, refreshTranslations

## Quick Start
1. Open the project folder on Ampps or another server:
   - Windows example: http://localhost/Practical-Multilingualism/
2. Open index.html in your browser.
3. Inspect translations.json and edit or add languages.

## Adding a New Language
1. Open translations.json.
2. Add a new top-level key (e.g. "es") and provide the required keys:
   - page_title, title, greeting, username, save_button, select_language, language_fullname
3. Save the file.
4. To update translations in the browser:
   - Refresh the page or
   - Clear the localStorage cache: in the Developer Console run `localStorage.removeItem('translations'); localStorage.removeItem('translations_size');` then refresh the page
   - Or call the project's `refreshTranslations()` function.

Example snippet for translations.json:
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

## translations.json format
- Top-level keys are language codes (e.g. "en", "tr", "de").
- Each language object contains key-value pairs matching the page's `data-i18n` attributes.
- `language_fullname` is used for display in language lists.

## Caching and Updates
- On first load, the page fetches translations.json, reads its size, and saves it to localStorage.
- If translations.json is updated (size changes), the file is reloaded and localStorage is updated.
- To manually clear the local cache: run `localStorage.removeItem('translations'); localStorage.removeItem('translations_size');`.

## Development
- Add new text in index.html with the appropriate `data-i18n` attribute.
- JS functions are small and single-purpose; for new needs you can:
  - Add URL parameter language selection (e.g. ?lang=de).
  - Extend fallback behavior when a translation key is missing.

## Contributing
1. Fork -> make changes -> submit a pull request.
2. Use small, descriptive commit messages.
3. When adding new languages to translations.json, follow the existing structure.

## License
MIT License — free to use. When contributing, please comply with the license.