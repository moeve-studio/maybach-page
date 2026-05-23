# Friesenhaus Muhle — Maybachstraße 26, Sylt

Steckbrief zum Anwesen Maybachstraße 26, 25980 Westerland (Sylt) — als Web-Page für Interessierte und beauftragte Vermittler.

## Inhalt

- `index.html` — Hauptseite (DE/EN umschaltbar)
- `components.jsx` — React-Komponenten (Nav, Hero, Steckbrief, Lage, Räume, Galerie, Grundrisse, Bauweise, Anfrage, Footer)
- `tweaks-panel.jsx` — Dev-Panel zum Umschalten von Sprache/Hero-Bild
- `design-system/colors_and_type.css` — Design-Tokens (Farben, Typografie, Spacing)
- `images/` — Außen-, Innen- und Gartenfotos
- `grundrisse/` — Grundriss-PDFs (EG, OG)

## Auf GitHub Pages veröffentlichen

1. Neues Repository anlegen.
2. Alle Dateien außer `uploads/` pushen:
   ```bash
   git init
   git add index.html components.jsx tweaks-panel.jsx design-system/ images/ grundrisse/ README.md
   git commit -m "Initial"
   git branch -M main
   git remote add origin git@github.com:<dein-user>/<repo>.git
   git push -u origin main
   ```
3. Im Repository unter **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Save.
4. Nach ca. 1 Minute liegt die Seite unter `https://<dein-user>.github.io/<repo>/`.

## Inhalt redaktionell anpassen

Änderungen an Texten und Eckdaten erfolgen in `components.jsx` im `I18N`-Block, an Fotos im `GALLERY`-Array, an den Grundrissen in der `Grundrisse`-Komponente.
