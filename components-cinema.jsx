// Friesenhaus Muhle — Cinema variant
// One image per screen, sparse text overlays, end credits.

const I18N_CINEMA = {
  de: {
    address: 'Maybachstraße 26 · 25980 Westerland · Sylt',
    forSale: 'Zu verkaufen · Sylt',
    inquire: 'Anfrage',
    skip:    'Zu den Fakten',
    scroll:  'Weiter',
    title:   'Friesenhaus Muhle.',
    subtitle:'Maybachstraße 26 · Westerland · Sylt.',

    creditsKicker: 'Abspann',
    creditsHead:   'Die Fakten.',
    creditsLead:   'Ein reetgedecktes Friesenhaus auf einem 1.338 m² großen Gartengrundstück im Zentrum Westerlands. Bauantrag für eine viergeschossige Erweiterung um vier zusätzliche Räume liegt genehmigt vor.',

    summaryBig: [
      ['3.500.000 €', 'Verhandlungsbasis'],
      ['213 m²',      'Wohnfläche'],
      ['1.338 m²',    'Grundstück'],
      ['9 + 5',       'Zimmer + Bäder'],
    ],
    distances: [
      ['Fußgängerzone',   '250 m'],
      ['Strand · Meer',   '650 m'],
      ['Bahnhof',         '500 m'],
      ['Flughafen',       '2,5 km'],
    ],

    plansHead: 'Grundrisse',
    plansSub:  'Erdgeschoss ca. 128 m² · Obergeschoss ca. 85 m². Klick öffnet die volle Auflösung.',
    planEg:    'Erdgeschoss',
    planOg:    'Obergeschoss',
    planPdf:   'PDF',

    techHead:  'Bauweise · Anbau',
    techSub:   'Stand des genehmigten Bauantrags · Juli 2024.',
    techMore:  'Vollständige Bauweise lesen',
    techLess:  'Schließen',

    inquiryHead: 'Anfrage stellen',
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
    editorialHint: 'Mit Galerie, Lage-Details und Bauweise im Volltext.',

    footerNote: 'Steckbrief zum Anwesen — zur Verfügung gestellt für Interessierte und beauftragte Vermittler.',
    footerLinks: ['Impressum', 'Datenschutz'],
  },

  en: {
    address: 'Maybachstraße 26 · 25980 Westerland · Sylt · Germany',
    forSale: 'For Sale · Sylt',
    inquire: 'Inquire',
    skip:    'Skip to facts',
    scroll:  'Continue',
    title:   'Friesenhaus Muhle.',
    subtitle:'Maybachstraße 26 · Westerland · Sylt.',

    creditsKicker: 'End credits',
    creditsHead:   'The facts.',
    creditsLead:   'A thatched Frisian house on a 1,338 m² garden plot in the centre of Westerland. Approved planning permission for a four-room extension is on file.',

    summaryBig: [
      ['€ 3,500,000', 'Asking (negotiable)'],
      ['213 m²',      'Living area'],
      ['1,338 m²',    'Plot'],
      ['9 + 5',       'Rooms + baths'],
    ],
    distances: [
      ['Pedestrian zone', '250 m'],
      ['Beach · sea',     '650 m'],
      ['Station',         '500 m'],
      ['Airport',         '2.5 km'],
    ],

    plansHead: 'Floor plans',
    plansSub:  'Ground floor ~128 m² · upper floor ~85 m². Click to open full resolution.',
    planEg:    'Ground floor',
    planOg:    'Upper floor',
    planPdf:   'PDF',

    techHead:  'Construction · extension',
    techSub:   'Status: building permit filed and approved · July 2024.',
    techMore:  'Read full construction notes',
    techLess:  'Close',

    inquiryHead: 'Make an inquiry',
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
    editorialHint: 'Includes gallery, location detail and full construction notes.',

    footerNote: 'Property brief — available to all interested parties and authorised intermediaries.',
    footerLinks: ['Imprint', 'Privacy'],
  },
};

// ─── Cinema sequence ──────────────────────────────────────────────────
// Each entry = one full-screen "shot". pos picks the text overlay corner.
const FRAMES = {
  de: [
    { img: 'images/ext-hero-pathway.jpg', pos: 'bottom-left', isTitle: true },
    { img: 'images/ext-name-front.jpg',         pos: 'bottom-right', text: 'Reet. Klinker. Rosen.' },
    { img: 'images/ext-arched-rear-door.jpg',   pos: 'top-right',    text: 'Eine Tür unter dem Reet.' },
    { img: 'images/int-delft-tile-wall.jpg',    pos: 'bottom-left',  text: 'Diele.', sub: 'Delfter Fliesen, 17.–18. Jahrhundert.' },
    { img: 'images/int-hallway-panorama.jpg',   pos: 'bottom-right', text: 'Empfang.' },
    { img: 'images/int-wintergarden.jpg',       pos: 'bottom-left',  text: 'Wintergarten.' },
    { img: 'images/int-bedroom-green.jpg',      pos: 'bottom-right', text: 'Schlafzimmer · grün.' },
    { img: 'images/ext-panorama-full.jpg',      pos: 'bottom-left',  text: '1.338 m².', sub: 'Garten — ehemals Gärtnerei.' },
    { img: 'images/sylt-mood-lighthouse.jpg',   pos: 'bottom-right', text: 'Strand: 5 Minuten.' },
  ],
  en: [
    { img: 'images/ext-hero-pathway.jpg', pos: 'bottom-left', isTitle: true },
    { img: 'images/ext-name-front.jpg',         pos: 'bottom-right', text: 'Thatch. Brick. Roses.' },
    { img: 'images/ext-arched-rear-door.jpg',   pos: 'top-right',    text: 'A door beneath the thatch.' },
    { img: 'images/int-delft-tile-wall.jpg',    pos: 'bottom-left',  text: 'Entry hall.', sub: 'Delft tiles, 17th–18th century.' },
    { img: 'images/int-hallway-panorama.jpg',   pos: 'bottom-right', text: 'Reception.' },
    { img: 'images/int-wintergarden.jpg',       pos: 'bottom-left',  text: 'Winter garden.' },
    { img: 'images/int-bedroom-green.jpg',      pos: 'bottom-right', text: 'Bedroom · green.' },
    { img: 'images/ext-panorama-full.jpg',      pos: 'bottom-left',  text: '1,338 m².', sub: 'Garden — a former nursery.' },
    { img: 'images/sylt-mood-lighthouse.jpg',   pos: 'bottom-right', text: 'Beach: 5 minutes.' },
  ],
};

// ─── Tiny minimal nav (always pinned) ─────────────────────────────────
function CinemaNav({ lang, setLang, onInquire, onSkip }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 80,
      padding: '20px clamp(20px, 4vw, 40px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(8,8,10,0.65)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px) saturate(140%)' : 'none',
      transition: 'background 0.4s, backdrop-filter 0.4s',
      color: 'rgba(255,255,255,0.9)',
    }}>
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
        fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400,
        color: 'inherit', textDecoration: 'none', borderBottom: 'none', letterSpacing: '0.01em',
      }}>
        Friesenhaus Muhle
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <button onClick={onSkip} style={{
          background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', opacity: 0.7, padding: 0,
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; }}
        >
          {I18N_CINEMA[lang].skip} ↓
        </button>

        <CinemaLangSwitch lang={lang} setLang={setLang} />

        <button onClick={onInquire} style={{
          background: 'transparent', color: 'inherit',
          border: '1px solid rgba(255,255,255,0.45)',
          padding: '9px 18px', fontFamily: 'var(--font-sans)', fontSize: 11,
          letterSpacing: '0.18em', textTransform: 'lowercase', cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.92)';
            e.currentTarget.style.color = '#111';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'inherit';
          }}
        >{I18N_CINEMA[lang].inquire.toLowerCase()}</button>
      </div>
    </nav>
  );
}

function CinemaLangSwitch({ lang, setLang }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em' }}>
      {['de', 'en'].map((l, i, a) => (
        <React.Fragment key={l}>
          <button onClick={() => setLang(l)} style={{
            background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
            fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
            color: lang === l ? '#fff' : 'rgba(255,255,255,0.55)',
            textDecoration: lang === l ? 'underline' : 'none',
            textUnderlineOffset: 4,
          }}>{l.toUpperCase()}</button>
          {i < a.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── A single cinematic frame ────────────────────────────────────────
function Frame({ frame, index, total, lang }) {
  const t = I18N_CINEMA[lang];
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);

  React.useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const corner = frame.pos || 'bottom-left';
  const posStyle = (() => {
    if (corner === 'top-right')    return { top: 'clamp(80px, 16vh, 160px)', right: 'clamp(24px, 5vw, 80px)', textAlign: 'right', alignItems: 'flex-end' };
    if (corner === 'top-left')     return { top: 'clamp(80px, 16vh, 160px)', left: 'clamp(24px, 5vw, 80px)', textAlign: 'left',  alignItems: 'flex-start' };
    if (corner === 'bottom-right') return { bottom: 'clamp(80px, 16vh, 160px)', right: 'clamp(24px, 5vw, 80px)', textAlign: 'right', alignItems: 'flex-end' };
    if (corner === 'center')       return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', alignItems: 'center' };
    return { bottom: 'clamp(80px, 16vh, 160px)', left: 'clamp(24px, 5vw, 80px)', textAlign: 'left', alignItems: 'flex-start' };
  })();

  const ken = seen ? 'scale(1.04)' : 'scale(1.0)';

  return (
    <section ref={ref} style={{
      height: '100vh', minHeight: 600, position: 'relative', overflow: 'hidden',
      background: '#050505',
    }}>
      {/* Image — slow Ken-Burns push */}
      <img src={frame.img} alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover',
        transform: ken,
        transition: 'transform 7s ease-out',
      }} />

      {/* Vignette: dim top + bottom for text legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)',
        pointerEvents: 'none',
      }}></div>

      {/* Chapter mark */}
      <div style={{
        position: 'absolute', top: 'clamp(80px, 14vh, 130px)', left: 'clamp(24px, 5vw, 80px)',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
        opacity: seen ? 1 : 0, transition: 'opacity 1.4s ease 0.2s',
      }}>
        {String(index + 1).padStart(2, '0')} <span style={{ opacity: 0.55 }}>· {String(total).padStart(2, '0')}</span>
      </div>

      {/* Text overlay */}
      <div style={{
        position: 'absolute', display: 'flex', flexDirection: 'column',
        gap: 14, maxWidth: 720,
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1.4s ease 0.4s, transform 1.4s ease 0.4s',
        ...posStyle,
      }}>
        {frame.isTitle ? (
          <>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.62)', marginBottom: 8 }}>
              {t.forSale}
            </div>
            <h1 style={{
              margin: 0, color: '#fff',
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(3rem, 9vw, 8.6rem)', lineHeight: 0.96,
              letterSpacing: '-0.025em',
            }}>{t.title}</h1>
            <div style={{
              marginTop: 10, fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.35rem)', lineHeight: 1.5,
              color: 'rgba(255,255,255,0.78)',
            }}>{t.subtitle}</div>
          </>
        ) : (
          <>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(1.8rem, 4.5vw, 4rem)', lineHeight: 1.05,
              letterSpacing: '-0.018em', color: '#fff',
            }}>{frame.text}</div>
            {frame.sub && (
              <div style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(0.95rem, 1.25vw, 1.2rem)', lineHeight: 1.45,
                color: 'rgba(255,255,255,0.72)', marginTop: 4,
              }}>{frame.sub}</div>
            )}
          </>
        )}
      </div>

      {/* First frame: scroll cue */}
      {frame.isTitle && (
        <div style={{
          position: 'absolute', bottom: 28, right: 'clamp(24px, 5vw, 80px)',
          textAlign: 'right', color: 'rgba(255,255,255,0.55)',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' }}>{t.scroll}</div>
          <div className="cinema-scroll-line"></div>
        </div>
      )}
    </section>
  );
}

// ─── Credits / facts roll ────────────────────────────────────────────
function Credits({ lang, setLang }) {
  const t = I18N_CINEMA[lang];
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', tel: '', nachricht: '' });
  const [lbPlan, setLbPlan] = React.useState(null);
  const [techOpen, setTechOpen] = React.useState(false);

  const plans = [
    { src: 'grundrisse/grundriss-erdgeschoss.jpg',  pdf: 'grundrisse/grundriss-erdgeschoss.pdf',  label: t.planEg },
    { src: 'grundrisse/grundriss-obergeschoss.jpg', pdf: 'grundrisse/grundriss-obergeschoss.pdf', label: t.planOg },
  ];

  return (
    <section id="credits" style={{
      background: 'var(--bg-credits)',
      color: 'var(--fg-credits)',
      padding: 'clamp(80px, 14vh, 160px) clamp(20px, 5vw, 80px) 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Kicker + headline */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>
          — {t.creditsKicker}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1, letterSpacing: '-0.025em',
          margin: '0 0 28px', color: '#fff',
        }}>{t.creditsHead}</h2>
        <p style={{
          maxWidth: 760, margin: '0 0 80px',
          fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.75,
          color: 'rgba(255,255,255,0.72)',
        }}>{t.creditsLead}</p>

        {/* Big four numbers */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 0, borderTop: '1px solid rgba(255,255,255,0.14)',
          borderBottom: '1px solid rgba(255,255,255,0.14)',
          marginBottom: 96,
        }}>
          {t.summaryBig.map(([big, small], i) => (
            <div key={small} style={{
              padding: '36px 24px',
              borderRight: i < t.summaryBig.length - 1 ? '1px solid rgba(255,255,255,0.14)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', lineHeight: 1.05,
                color: '#fff', letterSpacing: '-0.01em', whiteSpace: 'nowrap',
              }}>{big}</div>
              <div style={{
                marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.48)',
              }}>{small}</div>
            </div>
          ))}
        </div>

        {/* Distances + Floor plans */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)', gap: 80, alignItems: 'start', marginBottom: 96 }} className="credits-grid">
          {/* Distances */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>
              {lang === 'de' ? 'Entfernungen' : 'Distances'}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {t.distances.map(([what, dist]) => (
                <li key={what} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-sans)', fontSize: 15,
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  <span>{what}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em', color: '#fff' }}>{dist}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Maybachstra%C3%9Fe+26%2C+25980+Westerland%2C+Sylt"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', marginTop: 28,
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: '#fff',
                borderBottom: '1px solid #fff', paddingBottom: 2,
              }}
            >
              {lang === 'de' ? 'Auf Karte ansehen ↗' : 'View on map ↗'}
            </a>
          </div>

          {/* Floor plans */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, gap: 16, flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                {t.plansHead}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.55)', maxWidth: 420 }}>
                {t.plansSub}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {plans.map((p, i) => (
                <figure key={p.label} style={{ margin: 0 }}>
                  <button onClick={() => setLbPlan(i)} style={{
                    display: 'block', width: '100%', background: '#fff',
                    border: 'none', padding: 0, cursor: 'zoom-in',
                  }}>
                    <img src={p.src} alt={p.label} style={{
                      width: '100%', height: 'auto', display: 'block', objectFit: 'contain',
                    }} />
                  </button>
                  <figcaption style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    paddingTop: 14, gap: 16, flexWrap: 'wrap',
                  }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19, color: '#fff' }}>{p.label}</span>
                    <a href={p.pdf} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)',
                      borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 2,
                    }}>{t.planPdf} ↗</a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Construction collapse */}
        <div style={{ marginBottom: 96, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>
                {t.techHead}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, color: '#fff' }}>{t.techSub}</div>
            </div>
            <button onClick={() => setTechOpen(x => !x)} style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.4)', padding: '11px 22px',
              fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'lowercase', cursor: 'pointer',
            }}>{techOpen ? t.techLess.toLowerCase() + ' ↑' : t.techMore.toLowerCase() + ' ↓'}</button>
          </div>

          <div style={{
            maxHeight: techOpen ? '2400px' : '0px',
            overflow: 'hidden',
            opacity: techOpen ? 1 : 0,
            transition: 'max-height 0.8s ease, opacity 0.5s ease 0.1s',
          }} aria-hidden={!techOpen}>
            <div style={{
              marginTop: 32,
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}>
              {[
                { h: lang === 'de' ? 'Fassade' : 'Envelope', items: lang === 'de'
                  ? [['Außenwände', 'Ziegelriemchen rot bzw. rotbraun · Mauerwerk KS-Stein'], ['Dämmung außen', 'Innen-/Außendämmung'], ['Dach', 'Krüppelwalmdach · Hartbedachung'], ['Fenster', 'PVC-U · Schallschutz nach DIN']]
                  : [['Outer walls', 'Red / red-brown brick on CSU masonry'], ['Insulation', 'Internal / external'], ['Roof', 'Hip-gabled · hard sub-roof'], ['Windows', 'PVC-U · DIN acoustic']] },
                { h: lang === 'de' ? 'Technik' : 'Services', items: lang === 'de'
                  ? [['Heizung', 'Wärmepumpe (außen) · Zentralsystem'], ['Warmwasser', 'Zentral'], ['Lüftung', 'Zwangslüftung in Bädern'], ['Brandmeldung', 'Rauchmelder in Räumen & Fluren']]
                  : [['Heating', 'Heat pump (external) · central'], ['Hot water', 'Central'], ['Ventilation', 'Forced extract in baths'], ['Fire', 'Smoke alarms throughout']] },
                { h: lang === 'de' ? 'Tragwerk' : 'Structure', items: lang === 'de'
                  ? [['Gründung', 'Stahlbeton-Bodensohle'], ['Decken', 'Stahlbeton ≥ 15–20 cm'], ['Innenwände', 'KS + Trockenbau'], ['Treppe', 'Stahlbeton, Sichtbeton']]
                  : [['Foundation', 'RC slab'], ['Floors', 'RC ≥ 15–20 cm'], ['Inner walls', 'CSU + drywall'], ['Stair', 'Fair-faced RC']] },
              ].map(group => (
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

        {/* Inquiry */}
        <div id="inquiry" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: 80, alignItems: 'start' }} className="credits-grid">
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>
              {lang === 'de' ? 'Kontakt' : 'Contact'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3.4vw, 3rem)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#fff', margin: '0 0 28px',
            }}>{t.inquiryHead}</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: 440, marginBottom: 40 }}>
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
                <CinemaField label={t.fName} value={form.name} onChange={v => setForm({...form, name: v})} />
                <CinemaField label={t.fEmail} type="email" required value={form.email} onChange={v => setForm({...form, email: v})} />
                <CinemaField label={t.fPhone} value={form.tel} onChange={v => setForm({...form, tel: v})} />
                <CinemaField label={t.fMessage} multiline value={form.nachricht} onChange={v => setForm({...form, nachricht: v})} />

                <button type="submit" style={{
                  marginTop: 28, background: '#fff', color: '#0c0c0e',
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

        {/* Link to editorial version */}
        <div style={{
          marginTop: 120, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.14)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24,
        }}>
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, color: '#fff', marginBottom: 6 }}>
              {t.editorialLink}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
              {t.editorialHint}
            </div>
          </div>
          <a href="editorial.html" style={{
            background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.6)', padding: '14px 28px',
            fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'lowercase', textDecoration: 'none', borderBottom: 'none',
            marginRight: 12,
          }}>{lang === 'de' ? 'editorial öffnen' : 'open editorial'} →</a>
          <a href="mosaic.html" style={{
            background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.6)', padding: '14px 28px',
            fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'lowercase', textDecoration: 'none', borderBottom: 'none',
          }}>{lang === 'de' ? 'mosaic öffnen' : 'open mosaic'} →</a>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 60, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16,
          fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em',
        }}>
          <div>© 2026 · {t.footerNote}</div>
          <div style={{ display: 'flex', gap: 24 }}>
            {t.footerLinks.map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', borderBottom: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Plan lightbox */}
      {lbPlan !== null && (
        <PlanLightbox
          plan={plans[lbPlan]}
          onClose={() => setLbPlan(null)}
        />
      )}
    </section>
  );
}

function CinemaField({ label, value, onChange, type = 'text', multiline = false, required = false }) {
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
      background: 'rgba(8, 8, 10, 0.96)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px',
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 24, right: 32, background: 'transparent', border: 'none',
        color: 'rgba(255,255,255,0.85)', fontSize: 28, cursor: 'pointer', padding: 8, lineHeight: 1,
      }}>×</button>
      <img src={plan.src} alt={plan.label} style={{
        maxWidth: '92vw', maxHeight: '88vh', objectFit: 'contain', display: 'block',
        background: '#fff',
      }} onClick={e => e.stopPropagation()} />
    </div>
  ), document.body);
}

// ─── App shell ───────────────────────────────────────────────────────
function CinemaApp() {
  const [lang, setLang] = React.useState('de');

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const goInquire = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
  const goSkip = () => {
    const el = document.getElementById('credits');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const frames = FRAMES[lang];

  return (
    <>
      <CinemaNav lang={lang} setLang={setLang} onInquire={goInquire} onSkip={goSkip} />

      {/* Letterbox bars — only visible during cinema sequence */}
      <div className="letterbox letterbox-top"></div>
      <div className="letterbox letterbox-bottom"></div>

      {frames.map((f, i) => (
        <Frame key={i} frame={f} index={i} total={frames.length} lang={lang} />
      ))}

      <Credits lang={lang} setLang={setLang} />
    </>
  );
}

Object.assign(window, {
  I18N_CINEMA, FRAMES,
  CinemaNav, CinemaLangSwitch, Frame, Credits, CinemaField, PlanLightbox, CinemaApp,
});
