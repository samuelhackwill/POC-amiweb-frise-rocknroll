# Frise rock'n'roll

Dynamic timeline proof of concept for Amiweb.

[Live POC](https://samuelhackwill.github.io/POC-amiweb-frise-rocknroll/)

## Notes

- Goal: generate a visual frise from editable data.
- Stack: static HTML, CSS, JavaScript, and Vite for local development/builds.
- Entry point: `index.html`.
- Data model: global current year, L'Amicale creation date, people, role periods, and optional creation markers.

## Development

```sh
npm install
npm run dev
```

## GitHub Pages

Pushes to `main` automatically build and deploy the POC using GitHub Actions.

The Vite base path is configurable for project-page builds:

```sh
VITE_BASE_PATH=/POC-amiweb-frise-rocknroll/ npm run build
```
