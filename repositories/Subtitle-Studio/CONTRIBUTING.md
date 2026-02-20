# Contributing to Subtitle Studio

First off, thank you for considering contributing to Subtitle Studio! It's people like you that make this project such a great tool. We welcome contributions of all kinds: bug reports, feature suggestions, code improvements, documentation updates, and translations.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Enhancements](#suggesting-enhancements)
   - [Your First Code Contribution](#your-first-code-contribution)
   - [Improving Documentation](#improving-documentation)
   - [Adding Translations](#adding-translations)
3. [Style Guides](#style-guides)
   - [Git Commit Messages](#git-commit-messages)
   - [JavaScript Style Guide](#javascript-style-guide)
   - [CSS Style Guide](#css-style-guide)
4. [Development Setup](#development-setup)
5. [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by the [Subtitle Studio Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [project email].

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [issue tracker](https://github.com/aliyilmaz/subtitle-studio/issues) to see if the problem has already been reported. If it hasn't, create a new issue using the **Bug Report** template and include as many details as possible:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected behavior and actual behavior.
- Screenshots or screen recordings if applicable.
- Browser type and version, operating system.

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/aliyilmaz/subtitle-studio/issues). When creating an enhancement suggestion, please:

- Use a clear and descriptive title.
- Provide a step-by-step description of the suggested enhancement.
- Explain why this enhancement would be useful to most users.
- Include mockups or examples if relevant.

### Your First Code Contribution

Unsure where to begin? You can start by looking through the `good first issue` and `help wanted` labels in the issue tracker.

If you want to work on an issue, please comment on it to let others know you're taking it. Feel free to ask any questions you have – we're happy to help!

### Improving Documentation

Good documentation is crucial. If you find a typo, unclear explanation, or missing information, please open an issue or submit a pull request directly. This includes the main `README.md`, language-specific READMEs, and this contributing guide.

### Adding Translations

We love that Subtitle Studio supports multiple languages! If you'd like to add a new language or improve an existing translation:

1. Copy the translation object in the JavaScript code (look for `translations` in the main HTML file).
2. Add your new language key and all the translated strings.
3. Update the language selector (`<select id="langSelect">`) to include your language.
4. Create a new README file for your language (e.g., `README.es.md` for Spanish) and add a link to it in the main `README.md`.
5. Submit a pull request.

## Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

### JavaScript Style Guide

- Use **ES6** features where appropriate.
- Indent with **2 spaces**.
- Use meaningful variable and function names.
- End statements with semicolons.
- Use `const` for values that won't be reassigned, `let` otherwise.
- Add comments to explain non-obvious logic.

### CSS Style Guide

- Use class names that are descriptive and follow BEM-like conventions if suitable.
- Indent with **2 spaces**.
- Group related properties together.
- Use CSS variables for colors and recurring values (already present in the style section).
- Ensure responsive behavior works on all screen sizes.

## Development Setup

The project is entirely client-side, so there's no build step required. You can simply:

1. Fork the repository and clone it locally.
2. Open `index.html` in your browser to see the app.
3. Make changes and refresh the page to see them.
4. Test thoroughly across different browsers (Chrome, Firefox, Edge, Safari).

If you want to test the speech recognition feature, make sure you're using a browser that supports the Web Speech API (like Chrome or Edge).

## Pull Request Process

1. Ensure your code follows the style guides mentioned above.
2. Update the documentation (READMEs) if you've changed functionality.
3. Make sure your changes work in all supported browsers.
4. Include screenshots or screen recordings if your changes affect the UI.
5. Issue the pull request with a clear description of what you've done and why.
6. Your pull request will be reviewed by the maintainers. Be open to feedback and make adjustments if requested.

Thank you for helping make Subtitle Studio better! 🎉
