/**
 * Placeholder catalog — replace with die echte Sortenliste (Namen, %vol,
 * Preise, Prämierungen) sobald verfügbar. Kategorien orientieren sich an
 * dem, was über die Familie Piesch bekannt ist: Weinbau (4 ha) und
 * Brennerei mit eigenen Streuobstwiesen (2 ha) in Randersacker am Main.
 * Struktur folgt dem Produktraster-Muster der Referenzseite: Badge-Leiste,
 * Name + %vol, Kurzbeschreibung, Preiszeile, Preis-pro-Liter-Zeile.
 */
export interface Badge {
  label: string;
  variant?: 'alert';
}

export interface Product {
  name: string;
  abv: string;
  description: string;
  volume: string;
  price: string;
  pricePerLiter: string;
  badge?: Badge;
}

export interface ProductCategory {
  id: string;
  title: string;
  items: Product[];
}

export const categories: ProductCategory[] = [
  {
    id: 'edelbraende',
    title: 'Streuobst-Edelbrände',
    items: [
      {
        name: 'Zwetschgenbrand',
        abv: '42% vol',
        description: 'Aus vollreifen Zwetschgen der eigenen Streuobstwiesen, doppelt gebrannt.',
        volume: '0,5 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
        badge: { label: 'Hofklassiker' },
      },
      {
        name: 'Williamsbirnenbrand',
        abv: '42% vol',
        description: 'Feiner Birnenbrand mit ausgeprägtem Fruchtaroma, klar im Abgang.',
        volume: '0,5 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
      {
        name: 'Kirschbrand',
        abv: '40% vol',
        description: 'Aus Kirschen der Region, samtig und mit feiner Mandelnote.',
        volume: '0,5 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
      {
        name: 'Mispelbrand',
        abv: '42% vol',
        description: 'Selten und aromatisch — aus der Mispel, einer alten Streuobstsorte.',
        volume: '0,5 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
        badge: { label: 'Rarität' },
      },
    ],
  },
  {
    id: 'frankenwein',
    title: 'Frankenwein',
    items: [
      {
        name: 'Silvaner trocken',
        abv: '12,5% vol',
        description: 'Vom eigenen Weinberg in Randersacker — die typische Franken-Rebsorte.',
        volume: '0,75 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
      {
        name: 'Müller-Thurgau trocken',
        abv: '12% vol',
        description: 'Frisch und unkompliziert, aus eigenem Anbau am Main.',
        volume: '0,75 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
      {
        name: 'Spätburgunder Rosé',
        abv: '12,5% vol',
        description: 'Zartrosa und fruchtig, aus eigener Lese gekeltert.',
        volume: '0,75 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
      {
        name: 'Frankenwein im Bocksbeutel',
        abv: 'nach Wahl',
        description: 'Klassische Franken-Flaschenform, ideal als Geschenk.',
        volume: '0,75 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
    ],
  },
  {
    id: 'geschenksets',
    title: 'Geschenksets',
    items: [
      {
        name: 'Verkostungsset Streuobst',
        abv: '4 × 0,04 L',
        description: 'Vier Miniaturen unserer Edelbrände zum Kennenlernen.',
        volume: '0,16 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
      {
        name: 'Geschenkbox Trio',
        abv: '3 × 0,5 L',
        description: 'Zwetschge, Williamsbirne und Kirsche in einer Box.',
        volume: '1,5 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
        badge: { label: 'Beliebtestes Set' },
      },
      {
        name: 'Wein & Brand Set',
        abv: 'gemischt',
        description: 'Ein Silvaner trocken und ein Zwetschgenbrand — Haus in einer Box.',
        volume: '1,25 L',
        price: 'auf Anfrage',
        pricePerLiter: '',
      },
      {
        name: 'Individuelle Anfrage',
        abv: 'nach Wahl',
        description: 'Persönliche Auswahl für Anlässe und Firmenpräsente — sprechen Sie uns an.',
        volume: '',
        price: 'auf Anfrage',
        pricePerLiter: '',
        badge: { label: 'Auf Anfrage' },
      },
    ],
  },
];
