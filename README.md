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
  Obst/Verarbeitung, Keller sowie Kunst & Proben — noch nicht vollständig
  übernommen, da der Textinhalt dieser Unterseiten noch fehlt.
- **Echter Prämierungen:** Bayerischer Staatsehrenpreis für Edelbrenner
  (Bayerisches Staatsministerium für Ernährung, Landwirtschaft und Forsten
  / BayernBrand) — zwei Verleihungsfotos liegen vor und sind in
  `src/components/Awards.astro` eingebaut.
- **Echte Weinlage:** "Sonnenstuhl" (Randersacker) laut Fass-Etikett
  (Jahrgang 2007, Sorte Regent, Holzfassausbau) — im Frankenwein-Sortiment
  und als Bild-Detail eingearbeitet.

## Fotos — jetzt mit echtem Material

Die Familie hat 22 eigene Foto-Dateien bereitgestellt (professionelle
Reportage-Aufnahmen + private Aufnahmen + die beiden Prämierungsfotos).
Alle tatsächlich verwendeten Bilder liegen sauber benannt in
`public/images/`; nicht verwendete Originale (Duplikate/ähnliche Motive)
liegen unangetastet in `archive/` (nicht im Build, nur zur späteren
Auswahl). Verteilung:

- **Hero** (`hero-verkostung.jpg`) — Verkostungsporträt
- **Handwerk** (`handwerk-keller.jpg`) — Probeentnahme im Kellergewölbe
- **Besuch** (`haus-fachwerk.jpg`) — das echte Fachwerkhaus
- **Streuobst-Edelbrände** (`streuobst-ernte-lead.jpg`) — Ernteszene
- **Frankenwein** (`frankenwein-sonnenstuhl-etikett.jpg`) — Fass-Etikett
  "Lage Sonnenstuhl"
- **Prämierungen** (`praemierung-staatsehrenpreis-1/2.jpg`)
- **Galerie** (`src/components/Gallery.astro`) — 9 weitere Prozess- und
  Stimmungsbilder (Brennkessel, Kellergang, Fasslager, Verkostungsecke, …)

Noch als selbst gezeichnete Linien-Illustration (`Illustration.astro`):
die Flaschen in den Produktkarten und die vier Serviervorschläge-Karten,
da dafür keine passenden Produktfotos vorliegen.

⚠️ Nutzungsrechte-Hinweis: Die professionellen Aufnahmen tragen im
Dateinamen den Vermerk eines beauftragten Werbefotografen aus Hassfurt.
Laut Auskunft des Auftraggebers sind die Rechte für dieses Projekt geklärt
— das aber bitte vor dem Livegang nochmal mit dem eigentlichen
Rechteinhaber (der Brennerei selbst) gegenchecken, falls das noch nicht
abschließend geklärt ist.

## ⚠️ Vor dem Livegang — das ist noch offen

### 1. Logo / Wortmarke

`src/components/BrandMark.astro` rendert aktuell einen Text-Schriftzug
("Haus der edlen Brände · Traditionsbrennerei"), kein Bild. Sobald ein
echtes Logo (SVG/PNG) vorliegt: Komponente auf
`<img src="/images/logo.svg">` umstellen.

### 2. Produktfotos

Für echte Flaschenfotos (Produktkarten) und Serviervorschläge liegt noch
kein Material vor — aktuell Illustrationen, siehe oben.

### 3. Sortiment & Preise

`src/data/products.ts` enthält plausible Beispielprodukte, die zur
bestätigten Betriebsform passen (Streuobst-Edelbrände + Frankenwein,
inkl. der echten Lage "Sonnenstuhl") — Namen, %vol und Preise sind aber
weiterhin **nicht die echte, vollständige Sortenliste**. Vor dem Livegang
durch die echten Sorten und Preise ersetzen.

### 4. Kontakt & Öffnungszeiten

`src/components/Footer.astro` kennt bereits Randersacker am Main (97236),
Hausnummer/Telefon/E-Mail fehlen noch. `src/components/Visit.astro`
(Öffnungszeiten) ist weiterhin Platzhalter — mit echten Daten befüllen.

### 5. Rechtliches

Footer verlinkt aktuell auf `#` für Impressum und Datenschutz — echte
Unterseiten ergänzen (Pflicht für den Livegang in Deutschland).

Deploy von `dist/` auf einen beliebigen statischen Host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, …) — `netlify.toml` liegt bereits bei.
