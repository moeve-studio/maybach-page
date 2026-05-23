// Friesenhaus Muhle — Maybachstraße 26, Sylt
// Property fact-sheet.
// All visual tokens via design-system/colors_and_type.css.

// ─── Translations ─────────────────────────────────────────────────────
const I18N = {
  de: {
    nav:      { steckbrief: 'Steckbrief', lage: 'Lage', beschreibung: 'Räume', grundrisse: 'Grundrisse', galerie: 'Galerie', technik: 'Bauweise', kontakt: 'Anfrage' },
    forSale:  'Zu verkaufen · Sylt',
    address:  'Maybachstraße 26 · 25980 Westerland · Sylt',
    propertyName: 'Friesenhaus Muhle',
    heroSub:  'Freistehendes Einfamilienhaus, reetgedeckt — mit Erweiterungsplanung und gestelltem Bauantrag für vier weitere Zimmer.',
    inquire:  'Anfrage stellen',
    scroll:   'Mehr sehen',

    introEyebrow: 'Das Anwesen',
    introHead:    'Ein seltenes Stück Sylt.',
    introLead:    'In der Maybachstraße 26 in Westerland steht ein Anwesen, das auf Sylt selbst in guter Lage noch einmal heraussticht: ein reetgedecktes Friesenhaus auf einem außergewöhnlich weitläufigen Gartengrundstück.',
    introBody: [
      'Das Grundstück war ursprünglich Teil einer ehemaligen Gärtnerei — ein Ursprung, der bis heute spürbar bleibt: in der Großzügigkeit des Gartens, in der gewachsenen Durchgrünung, in der besonderen Atmosphäre dieses Ortes. Später entstand hier eine kleine, familiengeführte Pension. Damit verbindet das Haus gleich mehrere Qualitäten, die auf Sylt selten gemeinsam auftreten: landschaftliche Verwurzelung, architektonische Eigenständigkeit, familiäre Nutzungsgeschichte und eine zentrale Lage in Westerland.',
      'Das reetgedeckte Friesenhaus gibt dem Anwesen seine unverwechselbare Identität. Es ist kein austauschbarer Neubau, sondern ein Haus mit Charakter, Materialität und Inselbezug. Das Reetdach, die ruhige Kubatur und der friesische Ausdruck schaffen jene Atmosphäre, die viele auf Sylt suchen, aber nur wenige Immobilien tatsächlich besitzen: norddeutsche Gelassenheit, handwerkliche Anmutung und ein Gefühl von Schutz und Geborgenheit. Im Inneren setzt sich diese Materialität fort — sichtbar etwa in der Diele, die mit handbemalten Delfter Wandfliesen aus dem 17.–18. Jahrhundert vertäfelt ist.',
    ],
    introMore: [
      'Die besondere Qualität liegt in der Spannung aus Zentralität und Rückzug. Die Maybachstraße befindet sich in fußläufiger Nähe zu Bahnhof, Innenstadt, Friedrichstraße, Promenade und Weststrand. Gleichzeitig wirkt das Grundstück durch seine gärtnerische Vergangenheit wie eine grüne Insel im Zentrum Westerlands. Wo andere Immobilien in dichter Bebauung aufgehen, bietet dieses Anwesen Abstand, Gartenraum, Privatheit und Entwicklungsspielraum.',
      'Der Garten ist dabei nicht bloß Außenfläche, sondern der eigentliche Luxus dieses Ortes. Er erzählt von der früheren Gärtnerei, öffnet Blickräume, schafft Atmosphäre und gibt dem reetgedeckten Friesenhaus einen angemessenen landschaftlichen Rahmen. Haus und Grundstück bilden hier eine Einheit, die nicht künstlich hergestellt werden kann, sondern über Jahrzehnte gewachsen ist.',
      'Die ehemalige Nutzung als kleine familiengeführte Pension eröffnet zusätzlich eine besondere Perspektive. Das Haus besitzt nicht nur Wohnqualität, sondern auch eine gastliche Geschichte. Für eine private Inselresidenz, eine hochwertige Feriennutzung, eine behutsame Revitalisierung oder ein neues architektonisches Konzept bietet die Maybachstraße 26 eine seltene Grundlage.',
      'Dieses Anwesen ist keine gewöhnliche Sylt-Immobilie. Es ist ein Stück gewachsene Inselkultur: reetgedecktes Friesenhaus, ehemaliges Gärtnereigrundstück, familiäre Pensionsgeschichte, zentral und dennoch grün eingebettet. Eine Immobilie für Käufer, die nicht nur eine Adresse auf Sylt suchen, sondern Herkunft, Atmosphäre und Einmaligkeit.',
    ],
    introMoreLabel:  'Mehr lesen',
    introLessLabel:  'Weniger anzeigen',

    factsEyebrow: 'Steckbrief',
    factsHead:    'Zahlen, Maße, Lage.',
    facts: [
      ['Typ',          'Einfamilienhaus, freistehend, reetgedeckt'],
      ['Lage',         'Westerland · Sylt · Bestlage'],
      ['Adresse',      'Maybachstraße 26 · 25980'],
      ['Wohnfläche',   'ca. 213 m²'],
      ['Grundstück',   'ca. 1.338 m²'],
      ['Zimmer',       '9 Zimmer + Küche'],
      ['Bäder',        '5 Badezimmer'],
      ['Terrassen',    '2 Terrassen'],
      ['Stellplätze',  'Garage für 2 PKW + Außenstellplätze (mind. 3) · Insgesamt 5 Stellplätze'],
      ['Keller',       'Vorhanden'],
      ['Baujahr',      '1962'],
      ['Dach',         'Reet · Sylter Stil'],
      ['Heizung',      'Zentrale Gasheizung (Bestand)'],
      ['Erweiterung',  'Anbau +4 Zimmer · Bauantrag genehmigt'],
      ['Kaufpreis',    'Verhandlungsbasis 3.500.000 €'],
      ['Status',       'Verfügbar'],
    ],

    galleryEyebrow: 'Galerie',
    galleryHead:    'Drei Perspektiven auf ein Haus.',
    tabs: { all: 'Alle', exterior: 'Außen', interior: 'Innen', garden: 'Garten' },

    lageEyebrow: 'Lage',
    lageHead:    'Mittendrin — Meer, Strand, Friedrichstraße, Promenade.',
    lageLead:    'Westerland (Sylt) ist geprägt durch eine lange Tradition als beliebter Ferienort. Sandstrände, Bäder, Golfplätze und ein dichtes Kultur- und Freizeitangebot. Die Friedrichstraße als zentrale Einkaufsstraße liegt in unmittelbarer, fußläufiger Nähe — ebenso Bahnhof und Flughafen.',
    distances: [
      ['Fußgängerzone', '250 m', '3 Min. zu Fuß'],
      ['Strand / Meer', '650 m', '5 Min. zu Fuß'],
      ['Bahnhof Westerland', '500 m', '5 Min. zu Fuß · 2 Min. PKW'],
      ['Flughafen Sylt', '2,5 km', '10 Min. PKW'],
    ],

    roomsEyebrow: 'Räume',
    roomsHead:    'Raumaufteilung.',
    rooms: [
      { floor: 'Erdgeschoss', items: ['Großzügiger Eingangs- und Empfangsbereich', 'Esszimmer', 'Wohnzimmer mit anschließendem Wintergarten', 'Küche inkl. Einbauküche', 'Zwei Schlafzimmer', 'Ein Badezimmer'] },
      { floor: 'Obergeschoss', items: ['Vier weitere Zimmer — nutzbar als Schlafzimmer, Kinderzimmer, Büro oder Bibliothek', 'Weitere Bäder'] },
      { floor: 'Außen', items: ['Zwei Terrassen', 'Garten mit altem Baumbestand und Rosen', 'Garage und Außenstellplätze'] },
    ],

    techEyebrow: 'Bauweise',
    techHead:    'Zusammenfassung der Baubeschreibung für den Anbau.',
    techLead:    'Stand Bauantrag Juli 2024, eingereicht und genehmigt im Rahmen der LBO Schleswig-Holstein.',
    tech: [
      { h: 'Fassade',  items: [['Außenwände', 'Ziegelriemchen rot bzw. rotbraun, Mauerwerk KS-Stein'], ['Dämmung außen', 'Innen- Außendämmung'], ['Dach', 'Krüppelwalmdach, neu mit Hartbedachung'], ['Fenster', 'PVC-U mit Schallschutz nach DIN']] },
      { h: 'Tragwerk', items: [['Gründung', 'Stahlbeton-Bodensohle, Flach- oder Streifenfundamente'], ['Decken', 'Stahlbeton min. 15–20 cm, Trittschall nach DIN'], ['Innenwände', 'KS-Stein + Trockenbau mit Mineralwolle'], ['Treppe', 'Stahlbeton-Ortbeton, Sichtbetonqualität']] },
      { h: 'Technik',  items: [['Heizung', 'Wärmepumpe (Außenaufstellung), Zentralheizung'], ['Warmwasser', 'Zentral, über Heizsystem'], ['Lüftung', 'Zwangslüftung in den Bädern'], ['Brandmeldung', 'Rauchmelder in Schlafräumen und Fluren'], ['Blitzschutz', 'Ringerder + Potentialausgleich, äußerer Blitzschutz']] },
      { h: 'Oberflächen & Boden', items: [['Innenflächen', 'Mineralischer Putz, helle Dispersionsfarbe'], ['Türen', 'Holzumfassungszargen, weiß, Schallschutz ≥ 27 dB'], ['Bodenbelag', 'Fertigparkett in Wohnräumen, Fliesen in Bädern']] },
      { h: 'Außenanlagen', items: [['Zufahrt', 'über Maybachstraße'], ['Befahrbare Flächen', 'Schotterrasen, Rasenkammersteine bzw. Pflaster mit ≥ 15 % Fugenanteil'], ['Gartenflächen', 'Wiesen, Rosenbestand']] },
    ],

    contactEyebrow: 'Anfrage',
    contactHead:    'Diskret und unverbindlich.',
    contactLead:    'Anfragen werden vertraulich behandelt. Wir antworten persönlich, innerhalb weniger Tage. Diese Seite richtet sich an alle Interessierten — private Käufer ebenso wie Vertreter eines Maklers.',
    fName:    'Name (optional)',
    fEmail:   'E-Mail',
    fPhone:   'Telefon (optional)',
    fMessage: 'Worum geht es Ihrer Anfrage? Investor, Eigennutzung, Pensionsbetrieb …',
    submit:   'Anfrage senden',
    submitted: 'Ihre Anfrage ist eingegangen.',
    submittedBody: 'Wir melden uns persönlich, innerhalb weniger Tage. Bitte prüfen Sie ggf. Ihren Spam-Ordner.',
    submittedAgain: 'Weitere Anfrage senden',
    privacyHint: 'Wir nutzen Ihre Daten ausschließlich, um Ihnen zu antworten.',

    footerNote: 'Steckbrief zum Anwesen — zur Verfügung gestellt für Interessierte und beauftragte Vermittler',
    footerLinks: ['Impressum', 'Datenschutz', 'Kontakt'],

    architectCardEyebrow: 'Grundrisse',
    architectCardHead: 'Planlage Bestandshaus · EG und OG',
    architectCardBody: 'Aktuelle Grundrisspläne für Erd- und Obergeschoss. Klicken Sie auf einen Plan, um ihn in voller Auflösung anzusehen oder herunterzuladen.',
  },

  en: {
    nav:      { steckbrief: 'Facts', lage: 'Location', beschreibung: 'Rooms', grundrisse: 'Floor plans', galerie: 'Gallery', technik: 'Construction', kontakt: 'Inquire' },
    forSale:  'For Sale · Sylt',
    address:  'Maybachstraße 26 · 25980 Westerland · Sylt · Germany',
    propertyName: 'Friesenhaus Muhle',
    heroSub:  'Detached single-family house, thatched roof — with extension plans filed for four additional rooms.',
    inquire:  'Make an Inquiry',
    scroll:   'Continue',

    introEyebrow: 'The Property',
    introHead:    'A rare piece of Sylt.',
    introLead:    'A thatched Frisian house on Maybachstraße 26 in Westerland — set on an unusually generous garden plot, the former grounds of a small nursery. The address stands out even within Sylt\'s best neighbourhoods.',
    introBody: [
      'The plot was once part of a working nursery — a heritage you can still feel today: in the openness of the garden, in the mature greenery, in the singular atmosphere of the place. Later it became a small, family-run guesthouse. The result is a combination that rarely comes together on Sylt: landscape rootedness, architectural identity, a family hospitality history, and a central Westerland location.',
      'The thatched Frisian house gives the estate its unmistakable identity. It is not an interchangeable new build but a house with character, materiality and island lineage. Thatch, calm volume and Frisian expression create the kind of atmosphere many seek on Sylt but few properties actually possess: northern composure, craft, and a sense of shelter. That same materiality continues inside — most visibly in the entry hall, lined with hand-painted Delft wall tiles from the 17th and 18th centuries.',
    ],
    introMore: [
      'Its particular quality lies in the tension between centrality and retreat. Maybachstraße is within walking distance of the train station, the town centre, Friedrichstraße, the promenade and the Weststrand beach. At the same time, the former nursery grounds work like a green island in the middle of Westerland — offering distance, garden, privacy and room to develop where neighbouring properties simply blend into dense fabric.',
      'The garden is not merely outdoor space; it is the true luxury of this place. It tells the story of the nursery, opens up views, creates atmosphere and gives the thatched house an appropriate landscape frame. House and grounds form a unity that cannot be manufactured — it has grown over decades.',
      'The former use as a small family-run guesthouse opens an additional perspective. The house has not just residential quality but a hospitable history. For a private island residence, a high-end holiday use, a careful revitalisation or a new architectural concept, Maybachstraße 26 offers a rare foundation.',
      'This is not an ordinary Sylt property. It is a piece of grown island culture: thatched Frisian house, former nursery grounds, family guesthouse history, central and yet greenly embedded. A property for buyers who do not only want an address on Sylt but origin, atmosphere and singularity.',
    ],
    introMoreLabel:  'Read more',
    introLessLabel:  'Show less',

    factsEyebrow: 'Property Facts',
    factsHead:    'Figures, dimensions, location.',
    facts: [
      ['Type',          'Single-family house, detached, thatched'],
      ['Location',      'Westerland · Sylt · Prime central'],
      ['Address',       'Maybachstraße 26 · 25980'],
      ['Living area',   'approx. 213 m²'],
      ['Plot',          'approx. 1,338 m²'],
      ['Rooms',         '9 rooms + kitchen'],
      ['Bathrooms',     '5'],
      ['Terraces',      '2'],
      ['Parking',       'Garage + outdoor spaces'],
      ['Cellar',        'Yes'],
      ['Built',         '1962'],
      ['Roof',          'Thatch · Sylt style'],
      ['Heating',       'Central gas (existing)'],
      ['Extension',     '+4 rooms · permit filed'],
      ['Price',         'Asking 3,500,000 € (negotiable)'],
      ['Status',        'Available'],
    ],

    galleryEyebrow: 'Gallery',
    galleryHead:    'Three views of one house.',
    tabs: { all: 'All', exterior: 'Exterior', interior: 'Interior', garden: 'Garden' },

    lageEyebrow: 'Location',
    lageHead:    'In the heart of the island capital.',
    lageLead:    'Westerland on Sylt has a long tradition as one of Germany\'s most beloved holiday destinations. Wide sand beaches, spas, golf courses and a dense cultural calendar. Friedrichstraße, the main shopping street, is just a short walk away — as are the train station and the airport.',
    distances: [
      ['Pedestrian zone',    '250 m', '3 min walk'],
      ['Beach / sea',        '650 m', '5 min walk'],
      ['Westerland station', '500 m', '5 min walk · 2 min by car'],
      ['Sylt airport',       '2.5 km', '10 min by car'],
    ],

    roomsEyebrow: 'Rooms',
    roomsHead:    'Layout as built.',
    rooms: [
      { floor: 'Ground floor', items: ['Generous entry / reception hall', 'Dining room', 'Living room with adjoining conservatory', 'Kitchen with built-in units', 'Two bedrooms', 'One bathroom'] },
      { floor: 'Upper floor',  items: ['Four further rooms — usable as bedrooms, children\'s rooms, study or library', 'Additional bathrooms'] },
      { floor: 'Outside',      items: ['Two terraces', 'Garden with mature trees and roses', 'Garage and outdoor parking'] },
    ],

    techEyebrow: 'Construction',
    techHead:    'A summary of the building description.',
    techLead:    'Per the building permit filed and approved in July 2024 under Schleswig-Holstein state building code.',
    tech: [
      { h: 'Envelope', items: [['Outer walls', 'Red / red-brown brick slips on calcium-silicate masonry'], ['External insulation', 'Mineral aerogel, applied directly to masonry'], ['Roof', 'Hip-gabled, newly re-laid with hard sub-roof'], ['Windows', 'PVC-U with DIN-compliant acoustic glazing']] },
      { h: 'Structure', items: [['Foundation', 'Reinforced-concrete slab on shallow / strip footings'], ['Floors', 'Reinforced concrete ≥ 15–20 cm, DIN impact-sound rating'], ['Internal walls', 'Calcium silicate + dry-wall with mineral wool'], ['Stairs', 'In-situ reinforced concrete, fair-faced finish']] },
      { h: 'Services', items: [['Heating', 'Heat pump (external), central system'], ['Hot water', 'Central, via heating system'], ['Ventilation', 'Forced extract in bathrooms'], ['Fire detection', 'Smoke alarms in bedrooms and corridors'], ['Lightning protection', 'Earthing + bonding, external lightning conductors']] },
      { h: 'Finishes', items: [['Internal surfaces', 'Mineral plaster, light dispersion paint'], ['Doors', 'Solid wood-frame, white, ≥ 27 dB acoustic'], ['Floors', 'Engineered parquet in living spaces, tile in bathrooms']] },
      { h: 'Grounds', items: [['Access', 'Via Maybachstraße'], ['Drives', 'Permeable: gravel-grass, pavers with ≥ 15 % joint area'], ['Garden', 'Meadow and established rose beds']] },
    ],

    contactEyebrow: 'Inquire',
    contactHead:    'Discreet and without obligation.',
    contactLead:    'Inquiries are handled in confidence. We reply personally, within a few days. This page is open to all interested parties — private buyers as well as authorised brokers.',
    fName:    'Name (optional)',
    fEmail:   'E-mail',
    fPhone:   'Phone (optional)',
    fMessage: 'What brings you to the property? Investor, own use, guesthouse operator …',
    submit:   'Send Inquiry',
    submitted: 'Your message has been received.',
    submittedBody: 'We respond personally, within a few days. Please check your spam folder.',
    submittedAgain: 'Send another inquiry',
    privacyHint: 'We use your details only to reply to your inquiry.',

    footerNote: 'Property brief, available to all interested parties and authorised intermediaries',
    footerLinks: ['Imprint', 'Privacy', 'Contact'],

    architectCardEyebrow: 'Floor plans',
    architectCardHead: 'Existing building · ground & upper floor',
    architectCardBody: 'Current floor plans for ground and upper floor. Click a plan to view at full resolution or download.',
  },
};

// ─── Image manifests ──────────────────────────────────────────────────
const GALLERY = [
  { src: 'images/ext-front-gable.jpg',   cat: 'exterior', cap: { de: 'Vordergiebel · Rosen', en: 'Front gable · roses' }, ratio: 3/4 },
  { src: 'images/ext-rear-wide.jpg',     cat: 'exterior', cap: { de: 'Rückseite mit Wintergarten', en: 'Rear elevation, conservatory' }, ratio: 16/9, wide: true },
  { src: 'images/ext-side-terrace.jpg',  cat: 'exterior', cap: { de: 'Terrassenseite', en: 'Terrace side' }, ratio: 4/3 },
  { src: 'images/ext-arched-door.jpg',   cat: 'exterior', cap: { de: 'Gartentür', en: 'Garden door' }, ratio: 3/4 },
  { src: 'images/ext-arched-rear-door.jpg', cat: 'exterior', cap: { de: 'Rundbogentür unter dem Reet · Klinker und blauer Holzfries', en: 'Arched door under the thatch · brick and blue timber band' }, ratio: 3/4 },
  { src: 'images/ext-signage.jpg',       cat: 'exterior', cap: { de: '„Friesenhaus Muhle"', en: '"Friesenhaus Muhle"' }, ratio: 4/3 },
  { src: 'images/ext-name-front.jpg',    cat: 'exterior', cap: { de: 'Frontansicht', en: 'Front elevation' }, ratio: 3/4 },
  { src: 'images/ext-side-tree.jpg',     cat: 'exterior', cap: { de: 'Längsseite · alter Baum am Reetdach', en: 'Side elevation · mature tree by the thatch' }, ratio: 3/4 },

  { src: 'images/garden-back.jpg',       cat: 'garden',   cap: { de: 'Wiese', en: 'Meadow' }, ratio: 3/4 },
  { src: 'images/garden-side.jpg',       cat: 'garden',   cap: { de: 'Rosen am Weg', en: 'Roses by the path' }, ratio: 4/3 },

  { src: 'images/int-delft-tile-wall.jpg', cat: 'interior', cap: { de: 'Delfter Wandfliesen · handbemalt, 17.–18. Jahrhundert', en: 'Delft wall tiles · hand-painted, 17th–18th century' }, ratio: 3/4 },
  { src: 'images/int-delft-double-door.jpg', cat: 'interior', cap: { de: 'Salondoppeltür · „Herzlich Willkommen", umrahmt von Delfter Fliesen', en: 'Salon double door · "Herzlich Willkommen", framed by Delft tiles' }, ratio: 4/3, full: true, wide: true },
  { src: 'images/int-corridor-portraits.jpg', cat: 'interior', cap: { de: 'Aufgang Obergeschoss · Stiche entlang des Treppenhauses', en: 'Stairs and upper landing · engravings along the staircase' }, ratio: 3/4, full: true },
  { src: 'images/int-painted-doors.jpg', cat: 'interior', cap: { de: 'Bemalte Türen', en: 'Painted doors' }, ratio: 4/3 },
  { src: 'images/int-dining-cabinet.jpg',cat: 'interior', cap: { de: 'Esszimmer · bemalter Schrank', en: 'Dining · painted cabinet' }, ratio: 4/3 },
  { src: 'images/int-wintergarden.jpg',  cat: 'interior', cap: { de: 'Wintergarten', en: 'Winter garden' }, ratio: 16/9, wide: true },
  { src: 'images/int-dining-open.jpg',   cat: 'interior', cap: { de: 'Großer Wohnraum', en: 'Open living' }, ratio: 16/9, wide: true },
  { src: 'images/int-staircase.jpg',     cat: 'interior', cap: { de: 'Treppenflur', en: 'Stair corridor' }, ratio: 3/4 },
  { src: 'images/int-bedroom-twin.jpg',  cat: 'interior', cap: { de: 'Doppelzimmer', en: 'Twin bedroom' }, ratio: 4/3 },
  { src: 'images/int-bedroom-pine.jpg',  cat: 'interior', cap: { de: 'Kiefer-Zimmer', en: 'Pine-bed room' }, ratio: 4/3 },
  { src: 'images/int-bedroom-eaves.jpg', cat: 'interior', cap: { de: 'Giebelzimmer', en: 'Eaves room' }, ratio: 4/3 },
  { src: 'images/int-bedroom-sylt.jpg',  cat: 'interior', cap: { de: 'Stube unterm Reet', en: 'Room under the thatch' }, ratio: 4/3 },
  { src: 'images/int-bedroom-green.jpg', cat: 'interior', cap: { de: 'Grünes Zimmer', en: 'Green room' }, ratio: 16/9, wide: true },
  { src: 'images/int-bedroom-wood.jpg',  cat: 'interior', cap: { de: 'Holzdielen-Zimmer', en: 'Plank-floor room' }, ratio: 4/3 },

  { src: 'images/ext-panorama-full.jpg', cat: 'exterior', cap: { de: 'Gesamtansicht · Garten, Kastanie und Rosenbeete im Juni', en: 'Full view · garden, chestnut and rose beds in June' }, ratio: 21/9, wide: true, full: true },
];

const HERO_IMAGES = [
  'images/ext-hero-pathway.jpg',
  'images/ext-rear-wide.jpg',
  'images/ext-name-front.jpg',
  'images/ext-front-gable.jpg',
];

// ─── Tiny shared primitives ──────────────────────────────────────────
function Eyebrow({ children, light = false, num = null, style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.55)' : 'var(--color-gray-mid)',
      display: 'flex', alignItems: 'center', gap: 14,
      ...style,
    }}>
      {num !== null && <span style={{ fontSize: 10, opacity: 0.6 }}>— {String(num).padStart(2, '0')}</span>}
      <span>{children}</span>
    </div>
  );
}

function SectionTitle({ eyebrow, num, head, light = false, after }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 32, flexWrap: 'wrap', marginBottom: 56 }}>
      <div>
        <Eyebrow light={light} num={num}>{eyebrow}</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', lineHeight: 1.05,
          letterSpacing: '-0.02em', color: light ? '#fff' : 'var(--color-navy-dark)',
          marginTop: 18, maxWidth: 720,
        }}>{head}</h2>
      </div>
      {after && <div>{after}</div>}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────
function Nav({ lang, setLang, onInquire }) {
  const t = I18N[lang];
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = !scrolled;
  const links = [
    { id: 'steckbrief',   label: t.nav.steckbrief },
    { id: 'lage',         label: t.nav.lage },
    { id: 'beschreibung', label: t.nav.beschreibung },
    { id: 'galerie',      label: t.nav.galerie },
    { id: 'grundrisse',   label: t.nav.grundrisse },
    { id: 'bauweise',     label: t.nav.technik },
    { id: 'anfrage',      label: t.nav.kontakt },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(20px, 4vw, 56px)',
      background: scrolled ? 'rgba(250,250,247,0.92)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--color-stone)' : '1px solid rgba(255,255,255,0.08)',
      backdropFilter: scrolled ? 'blur(8px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(8px) saturate(140%)' : 'none',
      transition: 'background 0.35s, border-color 0.35s, color 0.35s',
      color: dark ? 'rgba(255,255,255,0.92)' : 'var(--color-navy-dark)',
    }}>
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
        display: 'flex', alignItems: 'baseline', gap: 12,
        fontFamily: 'var(--font-display)', color: 'inherit',
        textDecoration: 'none', borderBottom: 'none',
      }}>
        <span style={{ fontSize: 21, fontWeight: 400, letterSpacing: '0.02em' }}>Friesenhaus Muhle</span>
        <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', opacity: 0.55, textTransform: 'uppercase' }}>Sylt</span>
      </a>

      <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l.id}>
            <a href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }} style={{
              fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.14em',
              textTransform: 'lowercase', color: 'inherit',
              textDecoration: 'none', borderBottom: '1px solid transparent',
              paddingBottom: 2, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.55'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <LangSwitch lang={lang} setLang={setLang} dark={dark} />
        <button onClick={onInquire} style={{
          background: 'transparent', color: 'inherit',
          border: `1px solid ${dark ? 'rgba(255,255,255,0.45)' : 'var(--color-navy-dark)'}`,
          padding: '11px 22px', fontFamily: 'var(--font-sans)',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'lowercase', cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.9)' : 'var(--color-navy-dark)';
            e.currentTarget.style.color = dark ? '#111' : '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'inherit';
          }}
        >{I18N[lang].inquire.toLowerCase()}</button>
      </div>
    </nav>
  );
}

function LangSwitch({ lang, setLang, dark }) {
  const c = dark ? 'rgba(255,255,255,0.7)' : 'var(--color-gray-dark)';
  const cActive = dark ? '#fff' : 'var(--color-navy-dark)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em' }}>
      {['de', 'en'].map((l, i, a) => (
        <React.Fragment key={l}>
          <button onClick={() => setLang(l)} style={{
            background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
            fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
            color: lang === l ? cActive : c,
            textDecoration: lang === l ? 'underline' : 'none',
            textUnderlineOffset: 4,
          }}>{l.toUpperCase()}</button>
          {i < a.length - 1 && <span style={{ opacity: 0.4, color: c }}>·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────
function Hero({ lang, heroImg, onInquire }) {
  const t = I18N[lang];
  return (
    <section style={{ height: '100vh', minHeight: 720, position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
      <img src={heroImg} alt="Friesenhaus Muhle" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center 60%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(11,13,20,0.55) 0%, rgba(11,13,20,0.05) 30%, rgba(11,13,20,0.6) 100%)',
      }}></div>

      <div style={{
        position: 'absolute', top: 110, right: 'clamp(20px, 4vw, 56px)',
        textAlign: 'right',
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.22em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase',
      }}>
        N° 01<br/>
        <span style={{ opacity: 0.65 }}>54.91 N · 8.31 E</span>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 clamp(20px, 4vw, 56px) 80px' }}>
        <Eyebrow light num={null}>{t.forSale}</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(3rem, 9vw, 9rem)', lineHeight: 0.95,
          letterSpacing: '-0.025em', color: '#fff',
          marginTop: 22, marginBottom: 0,
        }}>
          Friesenhaus<br/>
          <em style={{ fontWeight: 300, color: 'rgba(255,255,255,0.78)' }}>Muhle.</em>
        </h1>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) auto minmax(0, 1fr)', gap: 32, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', marginBottom: 16 }}>{t.address}</div>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.05rem, 1.4vw, 1.35rem)', lineHeight: 1.55, color: 'rgba(255,255,255,0.82)', maxWidth: 520, margin: 0 }}>
              {t.heroSub}
            </p>
          </div>

          <button onClick={onInquire} style={{
            background: '#fff', color: 'var(--color-navy-dark)', border: 'none',
            padding: '16px 32px', fontFamily: 'var(--font-sans)', fontSize: 12,
            letterSpacing: '0.18em', textTransform: 'lowercase', cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>{t.inquire.toLowerCase()} ↘</button>

          <div style={{ justifySelf: 'end', textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{t.scroll}</div>
            <div className="hero-scroll-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Intro / Lead ────────────────────────────────────────────────────
function Intro({ lang }) {
  const t = I18N[lang];
  const [expanded, setExpanded] = React.useState(false);
  return (
    <section style={{ padding: 'clamp(80px, 12vh, 160px) clamp(20px, 4vw, 56px)', borderBottom: '1px solid var(--color-stone)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2.4fr)', gap: 56, alignItems: 'start', maxWidth: 1480, margin: '0 auto' }}>
        <Eyebrow num={1}>{t.introEyebrow}</Eyebrow>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(1.6rem, 3vw, 2.65rem)', lineHeight: 1.22,
            letterSpacing: '-0.015em', color: 'var(--color-navy-dark)',
            maxWidth: 1000, margin: 0,
          }}>
            {t.introHead}
          </p>
          <p style={{
            marginTop: 36, fontFamily: 'var(--font-sans)', fontSize: 16,
            lineHeight: 1.85, color: 'var(--color-gray-dark)', maxWidth: 700,
          }}>
            {t.introLead}
          </p>

          {t.introBody && t.introBody.map((para, i) => (
            <p key={i} style={{
              marginTop: 24, fontFamily: 'var(--font-sans)', fontSize: 16,
              lineHeight: 1.85, color: 'var(--color-gray-dark)', maxWidth: 700,
            }}>{para}</p>
          ))}

          {t.introMore && (
            <div style={{
              maxHeight: expanded ? '4000px' : '0px',
              overflow: 'hidden',
              opacity: expanded ? 1 : 0,
              transition: 'max-height 0.7s ease, opacity 0.5s ease 0.1s',
            }} aria-hidden={!expanded}>
              {t.introMore.map((para, i) => (
                <p key={i} style={{
                  marginTop: 24, fontFamily: 'var(--font-sans)', fontSize: 16,
                  lineHeight: 1.85, color: 'var(--color-gray-dark)', maxWidth: 700,
                }}>{para}</p>
              ))}
            </div>
          )}

          {t.introMore && (
            <button
              onClick={() => setExpanded(x => !x)}
              aria-expanded={expanded}
              style={{
                marginTop: 32,
                background: 'transparent',
                border: '1px solid var(--color-navy-dark)',
                color: 'var(--color-navy-dark)',
                padding: '12px 24px',
                fontFamily: 'var(--font-sans)',
                fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'lowercase', cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-navy-dark)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-navy-dark)';
              }}
            >
              {expanded ? t.introLessLabel.toLowerCase() + ' ↑' : t.introMoreLabel.toLowerCase() + ' ↓'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Steckbrief (facts grid) ─────────────────────────────────────────
function Steckbrief({ lang }) {
  const t = I18N[lang];
  return (
    <section id="steckbrief" style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)', background: 'var(--color-sand)', borderBottom: '1px solid var(--color-stone)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        <SectionTitle eyebrow={t.factsEyebrow} num={2} head={t.factsHead} />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px',
          background: 'var(--color-stone)',
          border: '1px solid var(--color-stone)',
        }}>
          {t.facts.map(([k, v]) => (
            <div key={k} style={{
              background: 'var(--color-sand)',
              padding: '24px 24px 28px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 116,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-gray-mid)', textTransform: 'uppercase', marginBottom: 14 }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19, lineHeight: 1.3, color: 'var(--color-navy-dark)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Lage (location + distances) ─────────────────────────────────────
function Lage({ lang }) {
  const t = I18N[lang];
  return (
    <section id="lage" style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)', background: 'var(--color-warm-white)', borderBottom: '1px solid var(--color-stone)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        <SectionTitle eyebrow={t.lageEyebrow} num={3} head={t.lageHead} />

        <figure style={{ margin: '0 0 56px', position: 'relative' }}>
          <img src="images/sylt-mood-lighthouse.jpg" alt={lang === 'de' ? 'Sylt — Dünen und Leuchtturm' : 'Sylt — dunes and lighthouse'} style={{
            width: '100%', aspectRatio: '21 / 9', objectFit: 'cover', display: 'block',
          }} />
          <figcaption style={{
            position: 'absolute', bottom: 16, left: 16, right: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap',
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 1px 6px rgba(0,0,0,0.5)',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)' }}>
              {lang === 'de' ? 'Sylt — Dünen, Strand, Licht.' : 'Sylt — dunes, beach, light.'}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.85 }}>
              54.91° N · 8.31° E
            </span>
          </figcaption>
        </figure>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)', gap: 56, alignItems: 'start' }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.85,
            color: 'var(--color-gray-dark)', margin: 0, maxWidth: 520,
          }}>{t.lageLead}</p>

          <div>
            <div style={{
              border: '1px solid var(--color-stone)',
              display: 'grid', gridTemplateColumns: '1fr',
            }}>
              {t.distances.map(([what, dist, time], i) => (
                <div key={what} style={{
                  display: 'grid', gridTemplateColumns: '2fr 1.2fr 2fr',
                  padding: '22px 24px', gap: 16, alignItems: 'baseline',
                  borderTop: i === 0 ? 'none' : '1px solid var(--color-stone)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21, color: 'var(--color-navy-dark)' }}>{what}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em', color: 'var(--color-navy-dark)' }}>{dist}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-gray-mid)' }}>{time}</div>
                </div>
              ))}
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=Maybachstra%C3%9Fe+26%2C+25980+Westerland%2C+Sylt" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', marginTop: 24,
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--color-navy-dark)',
              borderBottom: '1px solid var(--color-navy-dark)', paddingBottom: 2,
            }}>{lang === 'de' ? 'Auf Karte ansehen →' : 'View on map →'}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Beschreibung — room layout per floor ────────────────────────────
function Beschreibung({ lang }) {
  const t = I18N[lang];
  return (
    <section id="beschreibung" style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)', borderBottom: '1px solid var(--color-stone)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        <SectionTitle eyebrow={t.roomsEyebrow} num={4} head={t.roomsHead} />

        <figure style={{ margin: '0 0 64px' }}>
          <img src="images/int-hallway-panorama.jpg" alt={lang === 'de' ? 'Eingangshalle mit Delfter Fliesen und Treppe' : 'Entry hall with Delft tiles and staircase'} style={{
            width: '100%', aspectRatio: '21 / 9', objectFit: 'cover', display: 'block',
          }} />
          <figcaption style={{
            marginTop: 12, fontFamily: 'var(--font-sans)', fontSize: 13,
            color: 'var(--color-gray-mid)', fontStyle: 'italic',
          }}>
            {lang === 'de' ? 'Diele · Delfter Fliesen aus dem 17.–18. Jahrhundert, Aufgang zum Obergeschoss.' : 'Entry hall · 17th–18th-century Delft tiles, stairs up to the first floor.'}
          </figcaption>
        </figure>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 5fr)', gap: 56, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.8, color: 'var(--color-gray-dark)', margin: 0, maxWidth: 360 }}>
              {lang === 'de'
                ? 'Wohnfläche EG ca. 128 m², Obergeschoss ca. 85 m². Raumhöhen zwischen 2,30 m und 2,35 m. Genaue Maße siehe Grundrisse weiter unten.'
                : 'Ground floor ~128 m², upper floor ~85 m². Ceiling heights between 2.30 m and 2.35 m. Exact dimensions: see floor plans below.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {t.rooms.map((group, i) => (
              <div key={group.floor} style={{
                borderTop: '1px solid var(--color-stone)',
                padding: '32px 0 36px',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: 14,
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em',
                  textTransform: 'uppercase', marginBottom: 22,
                }}>
                  <span style={{ color: 'var(--color-gray-mid)', opacity: 0.7 }}>— {String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--color-navy-dark)' }}>{group.floor}</span>
                </div>

                <ul style={{
                  listStyle: 'none', margin: 0, padding: 0,
                  display: 'grid',
                  gridTemplateColumns: group.items.length > 3 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
                  columnGap: 32, rowGap: 10,
                }}>
                  {group.items.map(item => (
                    <li key={item} style={{
                      display: 'grid', gridTemplateColumns: '14px 1fr', gap: 12,
                      alignItems: 'baseline',
                      fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 15,
                      lineHeight: 1.55, color: 'var(--color-navy-dark)',
                    }}>
                      <span aria-hidden="true" style={{
                        color: 'var(--color-stone-mid)',
                        fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.55,
                        textAlign: 'center',
                      }}>·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Grundrisse — floor-plan previews (image) + PDF download ─────────
function Grundrisse({ lang }) {
  const t = I18N[lang];
  const plans = [
    {
      key: 'eg',
      preview: 'grundrisse/grundriss-erdgeschoss.jpg',
      pdf:     'grundrisse/grundriss-erdgeschoss.pdf',
      label:   { de: 'Erdgeschoss', en: 'Ground floor' },
      sub:     { de: 'Wohnfläche EG ca. 128 m² · Empfang · Esszimmer · 2 × Wohnzimmer · Küche · 2 Schlafzimmer · Bad · Terrasse', en: 'Ground floor ~128 m² · reception · dining · 2 × living · kitchen · 2 bedrooms · bath · terrace' },
    },
    {
      key: 'og',
      preview: 'grundrisse/grundriss-obergeschoss.jpg',
      pdf:     'grundrisse/grundriss-obergeschoss.pdf',
      label:   { de: 'Obergeschoss', en: 'Upper floor' },
      sub:     { de: '4 Schlafzimmer · 4 Bäder · Flur · Terrasse ca. 18 m²', en: '4 bedrooms · 4 baths · landing · terrace ~18 m²' },
    },
  ];

  const [lightbox, setLightbox] = React.useState(null);
  const lbItems = plans.map(p => ({
    src: p.preview,
    cap: { de: t.architectCardHead + ' · ' + p.label.de, en: t.architectCardHead + ' · ' + p.label.en },
  }));

  return (
    <section id="grundrisse" style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)', background: 'var(--color-sand)', borderBottom: '1px solid var(--color-stone)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        <SectionTitle eyebrow={t.architectCardEyebrow} num={6} head={t.architectCardHead} />

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.85, color: 'var(--color-gray-dark)', maxWidth: 720, marginBottom: 56 }}>
          {t.architectCardBody}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 32 }}>
          {plans.map((p, i) => (
            <figure key={p.key} style={{ margin: 0, background: 'var(--color-warm-white)', border: '1px solid var(--color-stone)' }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '20px 24px', borderBottom: '1px solid var(--color-stone)', gap: 16, flexWrap: 'wrap',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gray-mid)', marginBottom: 6 }}>
                    {p.key.toUpperCase()}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, lineHeight: 1.2, color: 'var(--color-navy-dark)' }}>
                    {p.label[lang]}
                  </div>
                </div>
                <a href={p.pdf} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'var(--color-navy-dark)',
                  borderBottom: '1px solid var(--color-navy-dark)', paddingBottom: 2, whiteSpace: 'nowrap',
                }}>{lang === 'de' ? 'PDF öffnen ↗' : 'Open PDF ↗'}</a>
              </div>

              <button onClick={() => setLightbox(i)} style={{
                display: 'block', width: '100%', padding: 0, border: 'none',
                background: '#fff', cursor: 'zoom-in', position: 'relative', overflow: 'hidden',
              }} className="plan-tile" aria-label={lang === 'de' ? 'Grundriss vergrößern' : 'Enlarge plan'}>
                <img src={p.preview} alt={p.label[lang]} style={{
                  width: '100%', height: 'auto', display: 'block', objectFit: 'contain',
                  background: '#fff', transition: 'opacity 0.3s',
                }} />
                <span style={{
                  position: 'absolute', bottom: 12, right: 12,
                  background: 'rgba(22,32,56,0.85)', color: '#fff',
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em',
                  textTransform: 'uppercase', padding: '6px 10px',
                }}>{lang === 'de' ? 'Vergrößern ⤢' : 'Enlarge ⤢'}</span>
              </button>

              <figcaption style={{
                padding: '16px 24px', fontFamily: 'var(--font-sans)', fontSize: 13,
                color: 'var(--color-gray-mid)', borderTop: '1px solid var(--color-stone)', lineHeight: 1.5,
              }}>{p.sub[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          items={lbItems}
          start={lightbox}
          lang={lang}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

// ─── Gallery with category filter ────────────────────────────────────
function Gallery({ lang }) {
  const t = I18N[lang];
  const [filter, setFilter] = React.useState('all');
  const [lightbox, setLightbox] = React.useState(null);
  const filtered = GALLERY.filter(g => filter === 'all' || g.cat === filter);

  return (
    <section id="galerie" style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)', background: 'var(--color-warm-white)', borderBottom: '1px solid var(--color-stone)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        <SectionTitle
          eyebrow={t.galleryEyebrow} num={5} head={t.galleryHead}
          after={
            <div style={{ display: 'flex', gap: 4 }}>
              {Object.entries(t.tabs).map(([k, label]) => {
                const key = k === 'all' ? 'all' : k;
                const active = filter === key;
                return (
                  <button key={k} onClick={() => setFilter(key)} style={{
                    background: active ? 'var(--color-navy-dark)' : 'transparent',
                    color: active ? '#fff' : 'var(--color-gray-dark)',
                    border: '1px solid ' + (active ? 'var(--color-navy-dark)' : 'var(--color-stone)'),
                    padding: '9px 16px', fontFamily: 'var(--font-sans)', fontSize: 11,
                    letterSpacing: '0.14em', textTransform: 'lowercase', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>{label.toLowerCase()}</button>
                );
              })}
            </div>
          }
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 16,
        }}>
          {filtered.map((g, i) => {
            const span = g.wide ? 8 : 4;
            const ratio = g.full
              ? (g.ratio < 1 ? '3 / 4' : (g.ratio > 1.5 ? '16 / 9' : '4 / 3'))
              : (g.wide ? '16 / 9' : (g.ratio < 1 ? '3 / 4' : '4 / 3'));
            return (
              <button key={g.src} onClick={() => setLightbox(i)} style={{
                gridColumn: `span ${span}`,
                aspectRatio: ratio,
                background: g.full ? 'var(--color-warm-white)' : '#000',
                border: 'none', padding: 0, cursor: 'zoom-in',
                position: 'relative', overflow: 'hidden',
              }} className="gallery-tile">
                <img src={g.src} alt={g.cap[lang]} style={{
                  width: '100%', height: '100%', objectFit: g.full ? 'contain' : 'cover',
                  transition: 'transform 0.6s ease', display: 'block',
                }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '32px 16px 14px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
                  color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 12,
                  letterSpacing: '0.04em', textAlign: 'left',
                  opacity: 0, transition: 'opacity 0.3s',
                }} className="gallery-cap">{g.cap[lang]}</div>
              </button>
            );
          })}
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          items={filtered}
          start={lightbox}
          lang={lang}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

function Lightbox({ items, start, lang, onClose }) {
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

  // Portal to body — escapes any ancestor `transform` that would otherwise
  // re-anchor `position: fixed` to the wrong containing block.
  return ReactDOM.createPortal((
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(11, 13, 20, 0.94)',
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
        maxWidth: '100%', maxHeight: '100%', position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <img src={g.src} alt={g.cap[lang]} style={{
          maxWidth: '90vw', maxHeight: '78vh', objectFit: 'contain', display: 'block',
        }} />
        <div style={{
          marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16,
          width: '100%', minWidth: 400,
          color: 'rgba(255,255,255,0.85)',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17 }}>{g.cap[lang]}</div>
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

// ─── Bauweise — technical summary ────────────────────────────────────
function Bauweise({ lang }) {
  const t = I18N[lang];
  return (
    <section id="bauweise" style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)', background: 'var(--color-navy-dark)', color: '#fff' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end', marginBottom: 64, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow light num={7}>{t.techEyebrow}</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#fff', marginTop: 18, maxWidth: 720,
            }}>{t.techHead}</h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85,
            color: 'rgba(255,255,255,0.65)', maxWidth: 460, justifySelf: 'end', margin: 0,
          }}>{t.techLead}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {t.tech.map(group => (
            <div key={group.h} style={{ background: 'var(--color-navy-dark)', padding: '28px 24px 32px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21, color: '#fff', marginBottom: 22, letterSpacing: '0.01em' }}>{group.h}</div>
              <dl style={{ margin: 0 }}>
                {group.items.map(([k, v]) => (
                  <div key={k} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '12px 0' }}>
                    <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{k}</dt>
                    <dd style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Anonymous inquiry form ──────────────────────────────────────────
function Anfrage({ lang }) {
  const t = I18N[lang];
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', tel: '', nachricht: '' });

  return (
    <section id="anfrage" style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 4vw, 56px)', background: 'var(--color-navy-dark)', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <Eyebrow light num={8}>{t.contactEyebrow}</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', lineHeight: 1.05,
            letterSpacing: '-0.02em', color: '#fff', marginTop: 18, marginBottom: 32,
          }}>{t.contactHead}</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.7)', maxWidth: 460, marginBottom: 48 }}>
            {t.contactLead}
          </p>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 2, letterSpacing: '0.04em' }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 10, marginBottom: 12 }}>
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
              <Field label={t.fName} value={form.name} onChange={v => setForm({...form, name: v})} />
              <Field label={t.fEmail} type="email" required value={form.email} onChange={v => setForm({...form, email: v})} />
              <Field label={t.fPhone} value={form.tel} onChange={v => setForm({...form, tel: v})} />
              <Field label={t.fMessage} multiline value={form.nachricht} onChange={v => setForm({...form, nachricht: v})} />

              <button type="submit" style={{
                marginTop: 28, background: '#fff', color: 'var(--color-navy-dark)',
                border: 'none', padding: '17px 36px', fontFamily: 'var(--font-sans)',
                fontSize: 12, letterSpacing: '0.18em', textTransform: 'lowercase', cursor: 'pointer',
              }}>{t.submit.toLowerCase()} ↘</button>
              <div style={{ marginTop: 16, fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
                {t.privacyHint}
              </div>
            </form>
          ) : (
            <div style={{ padding: '48px 0' }}>
              <div style={{ width: 36, height: 1, background: '#fff', marginBottom: 32 }}></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 38, color: '#fff', margin: 0, lineHeight: 1.1 }}>
                {t.submitted}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: 420, marginTop: 24 }}>
                {t.submittedBody}
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', tel: '', nachricht: '' }); }} style={{
                marginTop: 32, background: 'transparent', color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)', padding: '14px 28px',
                fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'lowercase', cursor: 'pointer',
              }}>← {t.submittedAgain.toLowerCase()}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = 'text', multiline = false, required = false }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: 'block', borderBottom: '1px solid rgba(255,255,255,0.18)', padding: '24px 0 14px', position: 'relative' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 10 }}>
        {label}{required && <span style={{ marginLeft: 4 }}>*</span>}
      </div>
      {multiline ? (
        <textarea
          value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} rows={3}
          style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 15, resize: 'vertical' }}
        />
      ) : (
        <input
          type={type} value={value} onChange={e => onChange(e.target.value)} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 16 }}
        />
      )}
      <div style={{
        position: 'absolute', bottom: -1, left: 0, height: 1, background: '#fff',
        width: focused ? '100%' : '0%', transition: 'width 0.3s ease',
      }}></div>
    </label>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────
function Footer({ lang }) {
  const t = I18N[lang];
  return (
    <footer style={{ background: '#0c1224', color: 'rgba(255,255,255,0.55)', padding: '48px clamp(20px, 4vw, 56px) 32px', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, fontSize: 12, letterSpacing: '0.06em' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: '#fff', fontWeight: 400, letterSpacing: '0.02em' }}>
          Friesenhaus Muhle <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.55, marginLeft: 8 }}>· Sylt</span>
        </div>
        <div style={{ flex: 1, minWidth: 240, textAlign: 'center', fontSize: 11 }}>
          © 2026 · {t.footerNote}
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {t.footerLinks.map(l => (
            <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', borderBottom: 'none', fontSize: 11 }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  I18N, GALLERY, HERO_IMAGES,
  Eyebrow, SectionTitle, Nav, Hero, Intro, Steckbrief, Lage, Beschreibung, Grundrisse,
  Gallery, Lightbox, Bauweise, Anfrage, Footer,
});
