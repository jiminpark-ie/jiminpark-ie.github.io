# Jimin PARK Personal Website

Source for the GitHub Pages site at:

```text
https://jiminpark-ie.github.io/
```

This is a static personal research website built with plain HTML, CSS, and JavaScript. There is no build step.

## Files

```text
index.html                 Main page content
styles.css                 Layout, typography, colors, responsive styling
script.js                  Interactive research landscape data and behavior
assets/                    Static assets
.nojekyll                  Tells GitHub Pages to serve files as plain static assets
```

## Editing Content

Edit `index.html` for:

- name and page title
- bio and About section
- email and profile links
- education timeline
- footer

Edit `script.js` for the interactive research map:

- `topics`: research clusters shown as background regions and filters
- `projects`: paper/project nodes, descriptions, methods, and outputs

Each project should list topic IDs that exist in `topics`.

## Editing Style

Edit `styles.css` for colors and layout. The main color variables are at the top under `:root`.

## Local Preview

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

## GitHub Pages

For a user site repository named `jiminpark-ie.github.io`, GitHub Pages serves the site at:

```text
https://jiminpark-ie.github.io/
```

The repository should publish from the `main` branch and root folder.
