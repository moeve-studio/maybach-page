// Friesenhaus Muhle — Bento Mosaic variant
// 4-column dense grid, no crops (tile aspect-ratio = image aspect-ratio).
// Hover grows the image past its tile, lifting above neighbours.

const I18N_MOSAIC = {
  de: {
    title:    'Friesenhaus Muhle.',
    subtitle: 'Maybachstraße 26 · Westerland · Sylt.',
    forSale:  'zu verkaufen',
    price:    '3.500.000 €',
    inquire:  'Anfrage',

    factsArea:   'Wohnfläche',
    factsPlot:   'Grundstück',
    factsRooms:  'Zimmer + Bäder',
    factsBeach:  'zum Strand',

    factsHead:   'Zahlen, Maße, Lage.',
    facts: [
      ['Typ',          'Einfamilienhaus, freistehend, reetgedeckt'],
      ['Lage',         'Westerland · Sylt · Bestlage'],
      ['Adresse',      'Maybachstraße 26 · 25980'],
      ['Wohnfläche',   'ca. 213 m²'],
      ['Grundstück',   'ca. 1.338 m²'],
      ['Zimmer',       '9 Zimmer + Küche'],
      ['Bäder',        '5 Badezimmer'],
      ['Terrassen',    '2 Terrassen'],
      ['Stellplätze',  'Garage für 2 PKW + 3 Außenstellplätze'],
      ['Keller',       'Vorhanden'],
      ['Baujahr',      '1962'],
      ['Dach',         'Reet · Sylter Stil'],
      ['Heizung',      'Zentrale Gasheizung (Bestand)'],
      ['Erweiterung',  'Anbau +4 Zimmer · Bauantrag genehmigt'],
      ['Kaufpreis',    'Verhandlungsbasis 3.500.000 €'],
      ['Status',       'Verfügbar'],
    ],

    lageHead: 'Lage.',
    lageLead: 'Westerland (Sylt) ist geprägt durch eine lange Tradition als beliebter Ferienort. Sandstrände, Bäder, Golfplätze und ein dichtes Kultur- und Freizeitangebot. Die Friedrichstraße als zentrale Einkaufsstraße liegt in unmittelbarer, fußläufiger Nähe — ebenso Bahnhof und Flughafen.',
    distances: [
      ['Fußgängerzone', '250 m', '3 Min. zu Fuß'],
      ['Strand · Meer', '650 m', '5 Min. zu Fuß'],
      ['Bahnhof Westerland', '500 m', '5 Min. zu Fuß · 2 Min. PKW'],
      ['Flughafen Sylt', '2,5 km', '10 Min. PKW'],
    ],
    mapLink: 'Auf Karte ansehen →',

    plansHead: 'Grundrisse · Planlage Bestandshaus.',
    plansSub:  'Erdgeschoss ca. 128 m² · Obergeschoss ca. 85 m². Klick öffnet die volle Auflösung.',
    planEg:    'Erdgeschoss',
    planEgSub: 'Empfang · Esszimmer · 2 × Wohnzimmer · Küche · 2 Schlafzimmer · Bad · Terrasse',
    planOg:    'Obergeschoss',
    planOgSub: '4 Schlafzimmer · 4 Bäder · Flur · Terrasse ca. 18 m²',
    planPdf:   'PDF ↗',

    techHead:  'Bauweise · Anbau.',
    techLead:  'Stand des genehmigten Bauantrags · Juli 2024. Bauweise gemäß LBO Schleswig-Holstein.',
    techMore:  'Vollständige Bauweise lesen',
    techLess:  'Schließen',
    tech: [
      { h: 'Fassade',  items: [['Außenwände', 'Ziegelriemchen rot bzw. rotbraun · Mauerwerk KS-Stein'], ['Dämmung', 'Innen-/Außendämmung'], ['Dach', 'Krüppelwalmdach · Hartbedachung'], ['Fenster', 'PVC-U · Schallschutz nach DIN']] },
      { h: 'Tragwerk', items: [['Gründung', 'Stahlbeton-Bodensohle'], ['Decken', 'Stahlbeton ≥ 15–20 cm'], ['Innenwände', 'KS-Stein + Trockenbau'], ['Treppe', 'Stahlbeton, Sichtbeton']] },
      { h: 'Technik',  items: [['Heizung', 'Wärmepumpe (außen) · Zentralsystem'], ['Warmwasser', 'Zentral'], ['Lüftung', 'Zwangslüftung in Bädern'], ['Brandmeldung', 'Rauchmelder in Räumen & Fluren'], ['Blitzschutz', 'Ringerder + Potentialausgleich']] },
    ],

    inquiryHead: 'Anfrage stellen.',
    inquirySub:  'Anfragen werden vertraulich behandelt. Wir antworten persönlich, innerhalb weniger Tage.',
    fName:    'Name (optional)',
    fEmail:   'E-Mail',
    fPhone:   'Telefon (optional)',
    fMessage: 'Worum geht es Ihrer Anfrage?',
    submit:   'Anfrage senden',
    submitted: 'Ihre Anfrage ist eingegangen.',
    submittedBody: 'Wir melden uns persönlich, innerhalb weniger Tage.',
    submittedAgain: 'Weitere Anfrage senden',

    editorialLink: 'Vollständiger Steckbrief',
    cinemaLink:    'Cinema-Version',
    footerNote:    'Steckbrief zum Anwesen — zur Verfügung gestellt für Interessierte und beauftragte Vermittler.',
    footerLinks:   ['Impressum', 'Datenschutz'],
  },
  en: {
    title:    'Friesenhaus Muhle.',
    subtitle: 'Maybachstraße 26 · Westerland · Sylt.',
    forSale:  'for sale',
    price:    '€ 3,500,000',
    inquire:  'Inquire',

    factsArea:   'Living area',
    factsPlot:   'Plot',
    factsRooms:  'Rooms + baths',
    factsBeach:  'to the beach',

    factsHead:   'Figures, dimensions, location.',
    facts: [
      ['Type',          'Single-family house, detached, thatched'],
      ['Location',      'Westerland · Sylt · Prime central'],
      ['Address',       'Maybachstraße 26 · 25980'],
      ['Living area',   'approx. 213 m²'],
      ['Plot',          'approx. 1,338 m²'],
      ['Rooms',         '9 rooms + kitchen'],
      ['Bathrooms',     '5'],
      ['Terraces',      '2'],
      ['Parking',       'Garage for 2 cars + 3 outdoor spaces'],
      ['Cellar',        'Yes'],
      ['Built',         '1962'],
      ['Roof',          'Thatch · Sylt style'],
      ['Heating',       'Central gas (existing)'],
      ['Extension',     '+4 rooms · permit on file'],
      ['Price',         'Asking € 3,500,000 (negotiable)'],
      ['Status',        'Available'],
    ],

    lageHead: 'Location.',
    lageLead: 'Westerland on Sylt has a long tradition as one of Germany\'s most beloved holiday destinations. Wide sand beaches, spas, golf courses, a dense cultural calendar. Friedrichstraße — the main shopping street — is just a short walk away, as are the train station and the airport.',
    distances: [
      ['Pedestrian zone',    '250 m', '3 min walk'],
      ['Beach · sea',        '650 m', '5 min walk'],
      ['Westerland station', '500 m', '5 min walk · 2 min car'],
      ['Sylt airport',       '2.5 km', '10 min car'],
    ],
    mapLink: 'View on map →',

    plansHead: 'Floor plans · existing building.',
    plansSub:  'Ground floor ~128 m² · upper floor ~85 m². Click to open full resolution.',
    planEg:    'Ground floor',
    planEgSub: 'Reception · dining · 2 × living · kitchen · 2 bedrooms · bath · terrace',
    planOg:    'Upper floor',
    planOgSub: '4 bedrooms · 4 baths · landing · terrace ~18 m²',
    planPdf:   'PDF ↗',

    techHead:  'Construction · extension.',
    techLead:  'Status of the approved building permit · July 2024. Construction per Schleswig-Holstein state code.',
    techMore:  'Read full construction notes',
    techLess:  'Close',
    tech: [
      { h: 'Envelope',  items: [['Outer walls', 'Red / red-brown brick on CSU masonry'], ['Insulation', 'Internal / external'], ['Roof', 'Hip-gabled · hard sub-roof'], ['Windows', 'PVC-U · DIN acoustic']] },
      { h: 'Structure', items: [['Foundation', 'Reinforced-concrete slab'], ['Floors', 'RC ≥ 15–20 cm'], ['Inner walls', 'CSU + drywall'], ['Stair', 'Fair-faced RC']] },
      { h: 'Services',  items: [['Heating', 'Heat pump (external) · central'], ['Hot water', 'Central'], ['Ventilation', 'Forced extract in baths'], ['Fire', 'Smoke alarms in rooms & corridors'], ['Lightning', 'Earthing + bonding']] },
    ],

    inquiryHead: 'Make an inquiry.',
    inquirySub:  'Inquiries are handled in confidence. We respond personally, within a few days.',
    fName:    'Name (optional)',
    fEmail:   'E-mail',
    fPhone:   'Phone (optional)',
    fMessage: 'What brings you to the property?',
    submit:   'Send inquiry',
    submitted: 'Your inquiry has been received.',
    submittedBody: 'We respond personally, within a few days.',
    submittedAgain: 'Send another',

    editorialLink: 'Full property brief',
    cinemaLink:    'Cinema version',
    footerNote:    'Property brief — available to all interested parties and authorised intermediaries.',
    footerLinks:   ['Imprint', 'Privacy'],
  },
};

// ─── Tile manifest ────────────────────────────────────────────────────
// span: how many of the 4 columns (1, 2, 4)
// ar:   tile aspect-ratio (must match image's native ratio so cover ≡ contain → no crop)
// kind: 'title' | 'fact' | 'text' | 'image'
const MOSAIC_TILES = [
  // Top row anchor
  { kind: 'title', span: 2, ar: '1/1' },
  { kind: 'image', span: 2, ar: '16/9', img: 'images/ext-hero-pathway.jpg',     cap: { de: 'Zugang zum Haus',           en: 'Approach' } },

  { kind: 'image', span: 1, ar: '3/4',  img: 'images/ext-name-front.jpg',       cap: { de: 'Vorderseite',               en: 'Front' } },
  { kind: 'fact',  span: 1, ar: '1/1',  key: 'area',  big: '213 m²' },
  { kind: 'image', span: 1, ar: '3/4',  img: 'images/ext-front-gable.jpg',      cap: { de: 'Giebel · Rosen',            en: 'Gable · roses' } },
  { kind: 'image', span: 1, ar: '3/4',  img: 'images/int-delft-tile-wall.jpg',  cap: { de: 'Delfter Fliesen 17.–18. Jh.', en: 'Delft tiles, 17–18C' } },

  { kind: 'image', span: 2, ar: '16/9', img: 'images/int-hallway-panorama.jpg', cap: { de: 'Eingangshalle',             en: 'Entry hall' } },
  { kind: 'image', span: 1, ar: '3/4',  img: 'images/ext-arched-rear-door.jpg', cap: { de: 'Rundbogentür',              en: 'Arched door' } },
  { kind: 'fact',  span: 1, ar: '1/1',  key: 'plot',  big: '1.338 m²' },

  { kind: 'image', span: 2, ar: '16/9', img: 'images/int-wintergarden.jpg',     cap: { de: 'Wintergarten',              en: 'Winter garden' } },
  { kind: 'image', span: 2, ar: '16/9', img: 'images/int-bedroom-green.jpg',    cap: { de: 'Schlafzimmer · grün',       en: 'Bedroom · green' } },

  { kind: 'image', span: 1, ar: '4/3',  img: 'images/int-painted-doors.jpg',    cap: { de: 'Bemalte Türen',             en: 'Painted doors' } },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/int-dining-cabinet.jpg',   cap: { de: 'Esszimmer',                 en: 'Dining' } },
  { kind: 'text',  span: 1, ar: '1/1',  textKey: 'reet' },
  { kind: 'image', span: 1, ar: '3/4',  img: 'images/int-corridor-portraits.jpg', cap: { de: 'Treppenflur',             en: 'Stair corridor' } },
  { kind: 'fact',  span: 1, ar: '1/1',  key: 'beach', big: '5 min' },

  { kind: 'image', span: 1, ar: '4/3',  img: 'images/int-bedroom-twin.jpg',     cap: { de: 'Doppelzimmer',              en: 'Twin room' } },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/int-bedroom-pine.jpg',     cap: { de: 'Kiefer-Zimmer',             en: 'Pine room' } },
  { kind: 'image', span: 1, ar: '3/4',  img: 'images/int-staircase.jpg',        cap: { de: 'Treppe',                    en: 'Staircase' } },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/int-bedroom-eaves.jpg',    cap: { de: 'Giebelzimmer',              en: 'Eaves room' } },

  { kind: 'image', span: 2, ar: '16/9', img: 'images/int-dining-open.jpg',      cap: { de: 'Wohnraum',                  en: 'Living' } },
  { kind: 'fact',  span: 1, ar: '1/1',  key: 'rooms', big: '9 + 5' },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/ext-side-terrace.jpg',     cap: { de: 'Terrassenseite',            en: 'Terrace' } },

  { kind: 'image', span: 2, ar: '16/9', img: 'images/ext-rear-wide.jpg',        cap: { de: 'Rückseite',                 en: 'Rear' } },
  { kind: 'image', span: 1, ar: '3/4',  img: 'images/ext-arched-door.jpg',      cap: { de: 'Gartentür',                 en: 'Garden door' } },
  { kind: 'image', span: 1, ar: '3/4',  img: 'images/ext-side-tree.jpg',        cap: { de: 'Längsseite · Baum',         en: 'Side · tree' } },

  { kind: 'image', span: 2, ar: '16/9', img: 'images/sylt-mood-lighthouse.jpg', cap: { de: 'Sylt — Dünen, Strand, Licht', en: 'Sylt — dunes, beach, light' } },
  { kind: 'text',  span: 1, ar: '1/1',  textKey: 'permit' },
  { kind: 'fact',  span: 1, ar: '1/1',  key: 'price', big: null /* lang-specific */ },

  // Tail cluster — short 4/3 tiles only, so dense flow can pack everything tight
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/int-bedroom-sylt.jpg',     cap: { de: 'Zimmer unterm Reet',        en: 'Room under the thatch' } },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/int-bedroom-wood.jpg',     cap: { de: 'Holzdielen-Zimmer',         en: 'Plank-floor room' } },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/ext-signage.jpg',          cap: { de: '„Friesenhaus Muhle"',       en: '"Friesenhaus Muhle"' } },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/garden-back.jpg',          cap: { de: 'Garten',                    en: 'Garden' } },
  { kind: 'image', span: 1, ar: '4/3',  img: 'images/garden-side.jpg',          cap: { de: 'Rosen am Weg',              en: 'Roses by the path' } },
];

// Final panorama is rendered separately as a full-width strip below the bento.
const PANORAMA_TILE = {
  img: 'images/ext-panorama-full.jpg',
  cap: { de: 'Gesamtansicht · Garten', en: 'Full view · garden' },
};

// Text tile copy
const TEXT_TILES = {
  reet:   { de: 'Reet · Klinker · Rosen.',         en: 'Thatch · Brick · Roses.' },
  permit: { de: 'Bauantrag für Anbau genehmigt.',  en: 'Extension permit on file.' },
};

// ─── Tile renderers ───────────────────────────────────────────────────
function TitleTile({ lang }) {
  const t = I18N_MOSAIC[lang];
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'var(--color-navy-dark)',
      color: 'var(--color-warm-white)',
      padding: 'clamp(16px, 2.4vw, 36px)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
      }}>{t.forSale} <span style={{ opacity: 0.55 }}>· Sylt</span></div>

      <div>
        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(1.6rem, 4.4vw, 4.4rem)', lineHeight: 0.96,
          letterSpacing: '-0.02em', color: '#fff',
        }}>{t.title}</h1>
        <div style={{
          marginTop: 16,
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1vw, 1rem)', lineHeight: 1.5,
          color: 'rgba(255,255,255,0.7)',
        }}>{t.subtitle}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(1.1rem, 1.9vw, 1.9rem)', lineHeight: 1,
          color: '#fff',
        }}>{t.price}</div>
        <a href="#inquiry" style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: 2,
        }}>{t.inquire.toLowerCase()} →</a>
      </div>
    </div>
  );
}

function FactTile({ tile, lang }) {
  const t = I18N_MOSAIC[lang];
  const big = tile.key === 'price' ? t.price : tile.big;
  const labels = {
    area:  t.factsArea,
    plot:  t.factsPlot,
    rooms: t.factsRooms,
    beach: t.factsBeach,
    price: t.forSale,
  };
  const small = labels[tile.key];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'var(--color-sand)',
      padding: 'clamp(14px, 2vw, 28px)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'var(--color-gray-mid)',
      }}>— {small}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 300,
        fontSize: 'clamp(1.5rem, 3.2vw, 2.8rem)', lineHeight: 1,
        letterSpacing: '-0.01em', color: 'var(--color-navy-dark)',
        whiteSpace: 'nowrap',
      }}>{big}</div>
    </div>
  );
}

function TextTile({ tile, lang }) {
  const text = TEXT_TILES[tile.textKey]?.[lang] ?? '';
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'var(--color-navy-dark)',
      color: '#fff',
      padding: 'clamp(14px, 2vw, 28px)',
      display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(1.05rem, 1.7vw, 1.6rem)', lineHeight: 1.25,
        letterSpacing: '-0.01em',
      }}>{text}</div>
    </div>
  );
}

function ImageTile({ tile, lang, onOpen }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%', height: '100%',
        position: 'relative', overflow: 'visible',
        background: 'transparent', border: 'none', padding: 0,
        cursor: 'zoom-in',
      }}
      className={'mosaic-tile' + (hovered ? ' is-hovered' : '')}
      aria-label={tile.cap[lang]}
    >
      <div style={{
        position: 'absolute', inset: 0, overflow: 'visible',
      }}>
        <img src={tile.img} alt={tile.cap[lang]} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(.2,.7,.2,1), box-shadow 0.5s ease',
          boxShadow: hovered ? '0 14px 40px rgba(0,0,0,0.35)' : 'none',
          willChange: 'transform',
        }} />
      </div>

      {/* Caption appears on hover */}
      <div style={{
        position: 'absolute', left: 10, bottom: 10, right: 10,
        fontFamily: 'var(--font-sans)', fontSize: 11,
        color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.55)',
        letterSpacing: '0.04em',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        transition: 'opacity 0.3s, transform 0.3s',
        pointerEvents: 'none',
      }}>{tile.cap[lang]}</div>
    </button>
  );
}

// ─── Data blocks (full Steckbrief content) ────────────────────────────
function DataSectionHead({ children, color = 'var(--color-navy-dark)' }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)', fontWeight: 300,
      fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', lineHeight: 1.05,
      letterSpacing: '-0.02em', color, margin: '0 0 40px',
    }}>{children}</h2>
  );
}

function FactsBlock({ lang }) {
  const t = I18N_MOSAIC[lang];
  return (
    <section style={{
      background: 'var(--color-sand)',
      padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)',
      borderTop: '1px solid var(--color-stone)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <DataSectionHead>{t.factsHead}</DataSectionHead>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--color-stone)',
          border: '1px solid var(--color-stone)',
        }}>
          {t.facts.map(([k, v]) => (
            <div key={k} style={{
              background: 'var(--color-sand)',
              padding: '22px 22px 26px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 108,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gray-mid)', marginBottom: 12 }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 18, lineHeight: 1.3, color: 'var(--color-navy-dark)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LageBlock({ lang }) {
  const t = I18N_MOSAIC[lang];
  return (
    <section style={{
      padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)',
      borderTop: '1px solid var(--color-stone)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <DataSectionHead>{t.lageHead}</DataSectionHead>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)', gap: 56, alignItems: 'start' }} className="mosaic-bottom-grid">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.85, color: 'var(--color-gray-dark)', margin: 0, maxWidth: 520 }}>
            {t.lageLead}
          </p>

          <div>
            <div style={{ border: '1px solid var(--color-stone)' }}>
              {t.distances.map(([what, dist, time], i) => (
                <div key={what} style={{
                  display: 'grid', gridTemplateColumns: '2fr 1.2fr 2fr',
                  padding: '20px 22px', gap: 16, alignItems: 'baseline',
                  borderTop: i === 0 ? 'none' : '1px solid var(--color-stone)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19, color: 'var(--color-navy-dark)' }}>{what}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em', color: 'var(--color-navy-dark)' }}>{dist}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-gray-mid)' }}>{time}</div>
                </div>
              ))}
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=Maybachstra%C3%9Fe+26%2C+25980+Westerland%2C+Sylt"
               target="_blank" rel="noopener noreferrer"
               style={{
                 display: 'inline-block', marginTop: 24,
                 fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
                 textTransform: 'uppercase', color: 'var(--color-navy-dark)',
                 borderBottom: '1px solid var(--color-navy-dark)', paddingBottom: 2,
               }}
            >{t.mapLink}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrundrisseBlock({ lang }) {
  const t = I18N_MOSAIC[lang];
  const [open, setOpen] = React.useState(null);
  const plans = [
    { src: 'grundrisse/grundriss-erdgeschoss.jpg',  pdf: 'grundrisse/grundriss-erdgeschoss.pdf',  label: t.planEg, sub: t.planEgSub },
    { src: 'grundrisse/grundriss-obergeschoss.jpg', pdf: 'grundrisse/grundriss-obergeschoss.pdf', label: t.planOg, sub: t.planOgSub },
  ];

  return (
    <section style={{
      background: 'var(--color-sand)',
      padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)',
      borderTop: '1px solid var(--color-stone)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <DataSectionHead>{t.plansHead}</DataSectionHead>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.8, color: 'var(--color-gray-dark)', maxWidth: 640, marginBottom: 48 }}>
          {t.plansSub}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
          {plans.map((p, i) => (
            <figure key={p.label} style={{ margin: 0, background: 'var(--color-warm-white)', border: '1px solid var(--color-stone)' }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '18px 22px', borderBottom: '1px solid var(--color-stone)', gap: 16, flexWrap: 'wrap',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gray-mid)', marginBottom: 4 }}>
                    {p.label === t.planEg ? 'EG' : 'OG'}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21, color: 'var(--color-navy-dark)' }}>{p.label}</div>
                </div>
                <a href={p.pdf} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--color-navy-dark)',
                  borderBottom: '1px solid var(--color-navy-dark)', paddingBottom: 2, whiteSpace: 'nowrap',
                }}>{t.planPdf}</a>
              </div>

              <button onClick={() => setOpen(i)} style={{
                display: 'block', width: '100%', padding: 0, border: 'none',
                background: '#fff', cursor: 'zoom-in',
              }}>
                <img src={p.src} alt={p.label} style={{
                  display: 'block', width: '100%', height: 'auto', objectFit: 'contain',
                }} />
              </button>

              <figcaption style={{
                padding: '14px 22px', fontFamily: 'var(--font-sans)', fontSize: 13,
                color: 'var(--color-gray-mid)', borderTop: '1px solid var(--color-stone)', lineHeight: 1.5,
              }}>{p.sub}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {open !== null && <PlanLightbox plan={plans[open]} onClose={() => setOpen(null)} />}
    </section>
  );
}

function PlanLightbox({ plan, onClose }) {
  React.useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  return ReactDOM.createPortal((
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(11, 13, 20, 0.95)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40,
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 24, right: 32, background: 'transparent', border: 'none',
        color: 'rgba(255,255,255,0.85)', fontSize: 28, cursor: 'pointer', padding: 8, lineHeight: 1,
      }}>×</button>
      <img src={plan.src} alt={plan.label} onClick={e => e.stopPropagation()} style={{
        maxWidth: '92vw', maxHeight: '88vh', objectFit: 'contain', background: '#fff',
      }} />
    </div>
  ), document.body);
}

function BauweiseBlock({ lang }) {
  const t = I18N_MOSAIC[lang];
  const [open, setOpen] = React.useState(false);

  return (
    <section style={{
      background: 'var(--color-navy-dark)', color: '#fff',
      padding: 'clamp(64px, 10vh, 120px) clamp(20px, 4vw, 56px)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <DataSectionHead color="#fff">{t.techHead}</DataSectionHead>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: 540, margin: 0 }}>
              {t.techLead}
            </p>
          </div>
          <button onClick={() => setOpen(x => !x)} style={{
            background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.4)', padding: '11px 22px',
            fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'lowercase', cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>{open ? t.techLess.toLowerCase() + ' ↑' : t.techMore.toLowerCase() + ' ↓'}</button>
        </div>

        <div style={{
          maxHeight: open ? '2400px' : '0px',
          overflow: 'hidden',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.8s ease, opacity 0.5s ease 0.1s',
        }} aria-hidden={!open}>
          <div style={{
            marginTop: 48,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32,
          }}>
            {t.tech.map(group => (
              <div key={group.h}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21, color: '#fff', marginBottom: 16 }}>{group.h}</div>
                <dl style={{ margin: 0 }}>
                  {group.items.map(([k, v]) => (
                    <div key={k} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '10px 0' }}>
                      <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>{k}</dt>
                      <dd style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.82)' }}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Header (top) ────────────────────────────────────────────────────
function MosaicHeader({ lang, setLang }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(250,250,247,0.92)',
      backdropFilter: 'blur(10px) saturate(140%)',
      WebkitBackdropFilter: 'blur(10px) saturate(140%)',
      borderBottom: '1px solid var(--color-stone)',
      padding: '14px clamp(16px, 3vw, 32px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
        fontFamily: 'var(--font-display)', fontSize: 16,
        color: 'var(--color-navy-dark)', textDecoration: 'none',
        borderBottom: 'none', letterSpacing: '0.01em',
      }}>
        Friesenhaus Muhle <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, opacity: 0.55, letterSpacing: '0.18em', marginLeft: 8 }}>SYLT</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em' }}>
          {['de', 'en'].map((l, i, a) => (
            <React.Fragment key={l}>
              <button onClick={() => setLang(l)} style={{
                background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
                fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
                color: lang === l ? 'var(--color-navy-dark)' : 'var(--color-gray-mid)',
                textDecoration: lang === l ? 'underline' : 'none',
                textUnderlineOffset: 4,
              }}>{l.toUpperCase()}</button>
              {i < a.length - 1 && <span style={{ opacity: 0.4, color: 'var(--color-gray-mid)' }}>·</span>}
            </React.Fragment>
          ))}
        </div>

        <a href="#inquiry" style={{
          background: 'transparent', color: 'var(--color-navy-dark)',
          border: '1px solid var(--color-navy-dark)',
          padding: '8px 18px', fontFamily: 'var(--font-sans)', fontSize: 11,
          letterSpacing: '0.18em', textTransform: 'lowercase',
          textDecoration: 'none', borderBottomColor: 'var(--color-navy-dark)',
        }}>{I18N_MOSAIC[lang].inquire.toLowerCase()}</a>
      </div>
    </header>
  );
}

// ─── Lightbox (portal) ───────────────────────────────────────────────
function MosaicLightbox({ items, start, lang, onClose }) {
  const [i, setI] = React.useState(start);
  const prev = () => setI(x => (x - 1 + items.length) % items.length);
  const next = () => setI(x => (x + 1) % items.length);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);
  const g = items[i];

  return ReactDOM.createPortal((
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(11, 13, 20, 0.96)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
    }}>
      <button onClick={e => { e.stopPropagation(); prev(); }} style={lbBtn('left')}>‹</button>
      <button onClick={e => { e.stopPropagation(); next(); }} style={lbBtn('right')}>›</button>
      <button onClick={onClose} style={{
        position: 'absolute', top: 28, right: 32, background: 'transparent', border: 'none',
        color: 'rgba(255,255,255,0.85)', fontSize: 28, cursor: 'pointer', padding: 8, lineHeight: 1,
      }}>×</button>

      <div onClick={e => e.stopPropagation()} style={{
        maxWidth: '100%', maxHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <img src={g.img} alt={g.cap[lang]} style={{
          maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', display: 'block',
        }} />
        <div style={{
          marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: 16, width: '100%', minWidth: 400, color: 'rgba(255,255,255,0.85)',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16 }}>{g.cap[lang]}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', opacity: 0.6 }}>
            {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  ), document.body);
}
function lbBtn(side) {
  return {
    position: 'absolute', [side]: 28, top: '50%', transform: 'translateY(-50%)',
    background: 'transparent', border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff', fontSize: 30, width: 56, height: 56, lineHeight: '52px',
    textAlign: 'center', cursor: 'pointer', borderRadius: 0, padding: 0,
  };
}

// ─── Bottom: inquiry + footer ────────────────────────────────────────
function MosaicFooter({ lang }) {
  const t = I18N_MOSAIC[lang];
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', tel: '', nachricht: '' });

  return (
    <section id="inquiry" style={{ background: 'var(--color-navy-dark)', color: '#fff', padding: 'clamp(64px, 10vh, 120px) clamp(20px, 5vw, 80px) 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: 80, alignItems: 'start' }} className="mosaic-bottom-grid">
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(1.8rem, 3.4vw, 3rem)', lineHeight: 1.05,
            letterSpacing: '-0.02em', color: '#fff', margin: '0 0 28px',
          }}>{t.inquiryHead}</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.7)', maxWidth: 440, marginBottom: 40 }}>
            {t.inquirySub}
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, letterSpacing: '0.04em' }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 10, marginBottom: 10 }}>
              {lang === 'de' ? 'Objekt' : 'Property'}
            </div>
            Friesenhaus Muhle<br/>
            Maybachstraße 26<br/>
            25980 Westerland · Sylt
          </div>
        </div>

        <div>
          {!submitted ? (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <MosaicField label={t.fName} value={form.name} onChange={v => setForm({...form, name: v})} />
              <MosaicField label={t.fEmail} type="email" required value={form.email} onChange={v => setForm({...form, email: v})} />
              <MosaicField label={t.fPhone} value={form.tel} onChange={v => setForm({...form, tel: v})} />
              <MosaicField label={t.fMessage} multiline value={form.nachricht} onChange={v => setForm({...form, nachricht: v})} />
              <button type="submit" style={{
                marginTop: 28, background: '#fff', color: 'var(--color-navy-dark)',
                border: 'none', padding: '17px 36px', fontFamily: 'var(--font-sans)',
                fontSize: 12, letterSpacing: '0.18em', textTransform: 'lowercase', cursor: 'pointer',
              }}>{t.submit.toLowerCase()} ↘</button>
            </form>
          ) : (
            <div style={{ padding: '40px 0' }}>
              <div style={{ width: 36, height: 1, background: '#fff', marginBottom: 28 }}></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 38, color: '#fff', margin: 0, lineHeight: 1.1 }}>
                {t.submitted}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: 420, marginTop: 20 }}>
                {t.submittedBody}
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', tel: '', nachricht: '' }); }} style={{
                marginTop: 28, background: 'transparent', color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)', padding: '12px 24px',
                fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'lowercase', cursor: 'pointer',
              }}>← {t.submittedAgain.toLowerCase()}</button>
            </div>
          )}
        </div>
      </div>

      {/* Cross-version links + footer */}
      <div style={{
        maxWidth: 1280, margin: '80px auto 0', paddingTop: 32,
        borderTop: '1px solid rgba(255,255,255,0.14)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 24,
      }}>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <a href="editorial.html" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
            borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 2,
          }}>{t.editorialLink} →</a>
          <a href="index.html" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
            borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 2,
          }}>{t.cinemaLink} →</a>
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', maxWidth: 540, textAlign: 'right' }}>
          © 2026 · {t.footerNote}
        </div>
      </div>
    </section>
  );
}

function MosaicField({ label, value, onChange, type = 'text', multiline = false, required = false }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: 'block', borderBottom: '1px solid rgba(255,255,255,0.18)', padding: '20px 0 12px', position: 'relative' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 10 }}>
        {label}{required && <span style={{ marginLeft: 4 }}>*</span>}
      </div>
      {multiline ? (
        <textarea value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} rows={3}
          style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 15, resize: 'vertical' }} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 16 }} />
      )}
      <div style={{
        position: 'absolute', bottom: -1, left: 0, height: 1, background: '#fff',
        width: focused ? '100%' : '0%', transition: 'width 0.3s ease',
      }}></div>
    </label>
  );
}

// ─── App ─────────────────────────────────────────────────────────────
function MosaicApp() {
  const [lang, setLang] = React.useState('de');
  const [lbStart, setLbStart] = React.useState(null);

  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // Image-only items for the lightbox, keeping order so indices line up
  const imageTiles = [...MOSAIC_TILES.filter(t => t.kind === 'image'), PANORAMA_TILE];

  const openLb = (img) => {
    const idx = imageTiles.findIndex(t => t.img === img);
    if (idx >= 0) setLbStart(idx);
  };

  return (
    <>
      <MosaicHeader lang={lang} setLang={setLang} />

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: '0.25cqw',
        gridAutoFlow: 'dense',
        containerType: 'inline-size',
        gap: 0,
        background: 'var(--color-warm-white)',
      }} className="mosaic-grid">
        {MOSAIC_TILES.map((tile, i) => {
          const span = tile.span || 1;
          // grid-auto-rows = 0.25cqw → 400 rows = 100% of container width.
          // Tile height (in % of container) = (25 × span) / aspectRatioValue.
          // Rows = tileHeightPct / 0.25.
          const [arN, arD] = String(tile.ar).split('/').map(Number);
          const arVal = arN / arD;
          const rowsNeeded = Math.round((25 * span) / arVal / 0.25);

          return (
            <div key={i}
              className="mosaic-cell"
              data-span={span}
              data-ar={tile.ar}
              style={{
                gridColumn: `span ${span}`,
                gridRow: `span ${rowsNeeded}`,
                position: 'relative',
                overflow: 'visible',
                // Mobile fallback (set via --cell-ar consumed in media query)
                '--cell-ar': tile.ar,
              }}
            >
              {tile.kind === 'title' && <TitleTile lang={lang} />}
              {tile.kind === 'fact'  && <FactTile tile={tile} lang={lang} />}
              {tile.kind === 'text'  && <TextTile tile={tile} lang={lang} />}
              {tile.kind === 'image' && <ImageTile tile={tile} lang={lang} onOpen={() => openLb(tile.img)} />}
            </div>
          );
        })}
      </main>

      {/* Full-width panorama strip below the bento — kept out of the grid
          so dense-flow doesn't leave a tall tail of empty columns above it. */}
      <section style={{ width: '100%', overflow: 'hidden', background: 'var(--color-warm-white)' }}>
        <button onClick={() => {
          const idx = imageTiles.findIndex(t => t.img === PANORAMA_TILE.img);
          if (idx >= 0) setLbStart(idx);
        }} style={{
          display: 'block', width: '100%', padding: 0, border: 'none',
          background: 'transparent', cursor: 'zoom-in',
        }}>
          <img src={PANORAMA_TILE.img} alt={PANORAMA_TILE.cap[lang]} style={{
            display: 'block', width: '100%', height: 'auto',
          }} />
        </button>
      </section>

      <FactsBlock lang={lang} />
      <LageBlock lang={lang} />
      <GrundrisseBlock lang={lang} />
      <BauweiseBlock lang={lang} />

      <MosaicFooter lang={lang} />

      {lbStart !== null && (
        <MosaicLightbox
          items={imageTiles}
          start={lbStart}
          lang={lang}
          onClose={() => setLbStart(null)}
        />
      )}
    </>
  );
}

Object.assign(window, {
  I18N_MOSAIC, MOSAIC_TILES, PANORAMA_TILE, TEXT_TILES,
  TitleTile, FactTile, TextTile, ImageTile,
  FactsBlock, LageBlock, GrundrisseBlock, BauweiseBlock, PlanLightbox, DataSectionHead,
  MosaicHeader, MosaicLightbox, MosaicFooter, MosaicField,
  MosaicApp,
});
