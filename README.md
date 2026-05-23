# Friesenhaus Muhle — Maybachstraße 26, Sylt

Steckbrief zum Anwesen Maybachstraße 26, 25980 Westerland (Sylt) — als Web-Page für Interessierte und beauftragte Vermittler.

## Inhalt

- `index.html` — Hauptseite (Mosaik-Layout, DE/EN umschaltbar)
- `components-mosaic.jsx` — React-Komponenten (Nav, Hero, Mosaik-Galerie, Steckbrief, Lage, Räume, Grundrisse, Bauweise, Anfrage, Footer)
- `tweaks-panel.jsx` — Dev-Panel zum Umschalten von Sprache/Layout
- `design-system/colors_and_type.css` — Design-Tokens (Farben, Typografie, Spacing)
- `images/` — Außen-, Innen- und Gartenfotos
- `grundrisse/` — Grundriss-PDFs und -JPGs (EG, OG)

## Inhalt redaktionell anpassen

Änderungen an Texten und Eckdaten erfolgen in `components-mosaic.jsx` im `I18N`-Block, an Fotos im `GALLERY`-Array, an den Grundrissen in der `Grundrisse`-Komponente.

## Auf GitHub Pages veröffentlicht

Live unter: `https://moeve-studio.github.io/maybach-page/`

Deployment erfolgt automatisch nach jedem Push auf den `main`-Branch via GitHub Actions (`.github/workflows/pages.yml`).
