# Haus der edlen Brände — Website

Editorial Marketing-Seite für eine fränkische Traditionsbrennerei. Gebaut
mit [Astro](https://astro.build) (statisches Output, minimales JS) + eigenem
CSS-Token-System — kein UI-Framework. Architektur und Design-System sind
bewusst analog zum Wachenröther-Bäck-Projekt gehalten (bewährter Aufbau),
inhaltlich und farblich aber komplett neu — orientiert an
brennerei-ehringhausen.de: hell, monochrom, große fette Versal-Headlines,
dünne Trennlinien, schwarze Award-/Status-Leisten auf Produktfotos.

## Stack

- **Astro 4** (TypeScript, strict) — statische Seitengenerierung.
- **Kein Framework** (React/Vue/etc.).
- **Plain CSS** mit Token-System in `src/styles/tokens.css` und
  gemeinsamen Regeln in `src/styles/global.css`.
- **Vanilla TS** für Sticky-Header + mobile Nav (`src/scripts/header.ts`)
  und das Scroll-Reveal-System (`src/scripts/reveal.ts`).

## Starten

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statische Seite nach dist/
npm run preview   # Produktions-Build lokal ansehen
```

## Bestätigte Fakten (Familie Piesch)

Aus der alten Seite (haus-der-edlen-braende.de) übernommen und bereits in
den Text eingearbeitet:

- Rund 400 Jahre altes fränkisches Fachwerkhaus in **Randersacker am Main**
  (97236), einer traditionsreichen Weinbaugemeinde.
- Familienbetrieb in **vierter Generation**: Weinbau auf 4 ha und eine
  Brennerei mit 2 ha ökologisch wertvollen Streuobstwiesen.
- Geführt von **Andi und Peter Piesch** — außer zur Weinlese die einzigen
  Arbeiter im Betrieb.
- Die alte Seite hatte zusätzlich Unterseiten zu Prämierungen, Sortenliste,
  Obst/Verarbeitung, Keller sowie Kunst & Proben — noch nicht übernommen,
  da der Inhalt dieser Unterseiten (Screenshots/Text) noch fehlt.

## ⚠️ Vor dem Livegang — das ist noch offen

### 1. Logo / Wortmarke

`src/components/BrandMark.astro` rendert aktuell einen Text-Schriftzug
("Haus der edlen Brände · Traditionsbrennerei"), kein Bild. Sobald ein
echtes Logo (SVG/PNG) vorliegt: Komponente auf
`<img src="/images/logo.svg">` umstellen.

### 2. Fotos

Jeder `.media--placeholder`-Block (Hero, Produktkarten, Handwerk, Besuch,
Rezepte) zeigt aktuell nur ein dunkles Platzhalter-Feld. Es gibt eine
Reportage von Giel Bildwelten, die laut Auftraggeber für dieses Haus
entstanden ist und deren Nutzungsrechte vorliegen — sobald die Bilddateien
angeliefert sind, in `public/images/` ablegen und die
`<div class="media--placeholder">`-Blöcke durch `<img>`/`<picture>`
ersetzen.

### 3. Sortiment & Preise

`src/data/products.ts` enthält plausible Beispielprodukte, die zur
bestätigten Betriebsform passen (Streuobst-Edelbrände + Frankenwein statt
der ursprünglich erfundenen Whisky/Gin-Kategorien) — Namen, %vol und
Preise sind aber weiterhin **nicht die echte Sortenliste**. Vor dem
Livegang durch die echten Sorten, Prämierungen und Preise ersetzen.

### 4. Kontakt & Öffnungszeiten

`src/components/Footer.astro` kennt bereits Randersacker am Main (97236),
Hausnummer/Telefon/E-Mail fehlen noch. `src/components/Visit.astro`
(Öffnungszeiten) ist weiterhin Platzhalter — mit echten Daten befüllen.

### 5. Rechtliches

Footer verlinkt aktuell auf `#` für Impressum und Datenschutz — echte
Unterseiten ergänzen (Pflicht für den Livegang in Deutschland).

Deploy von `dist/` auf einen beliebigen statischen Host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, …) — `netlify.toml` liegt bereits bei.
