// Direction C — "Field Notes"
// Warm, advisory, paper-textured. A boutique private-practice feel.
// Soft cream paper, hand-set serif display, sans body, hand-drawn rules.
function DirectionC() {
  const [tab, setTab] = React.useState(0);
  const cur = SPECIALTIES[tab];

  return (
    <div className="dirC">
      {/* Top strip */}
      <div className="dirC__strip">
        <span>An independent agency, since {HATCH.founded}.</span>
        <span className="dirC__strip-sep">·</span>
        <a href={`tel:${HATCH.phone}`}>{HATCH.phone}</a>
      </div>

      {/* Header */}
      <header className="dirC__header">
        <a className="dirC__brand" href="#top">
          <span className="dirC__seal">
            <svg viewBox="0 0 60 60" width="48" height="48">
              <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <text x="30" y="36" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="22" fontWeight="600" fill="currentColor">H</text>
            </svg>
          </span>
          <span className="dirC__brand-text">
            <strong>Hatch</strong>
            <em>Insurance Agency &nbsp;·&nbsp; Phoenix</em>
          </span>
        </a>
        <nav className="dirC__nav">
          <a href="#practice">Practice</a>
          <a href="#specialty">Specialties</a>
          <a href="#approach">Approach</a>
          <a href="#people">People</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="dirC__cta" href="#visit">Begin a conversation</a>
      </header>

      {/* Hero — full-bleed image with overlaid headline */}
      <section className="dirC__hero dirC__hero--image" id="practice">
        <div className="dirC__hero-image-bg">
          <img src="assets/verticals/affluent.png" alt="" />
          <div className="dirC__hero-scrim" />
        </div>

        <div className="dirC__hero-overlay">
          <h1 className="dirC__hero-h dirC__hero-h--inverse">
            Insurance is a <em>relationship</em>,
            <br />before it is a policy.
          </h1>
        </div>
      </section>

      {/* Intro band — moved below hero */}
      <section className="dirC__intro">
        <div className="dirC__hero-grid">
          <p className="dirC__hero-lede">
            For fifty years we have done the same thing — sit with operators,
            owners, and households, listen to what they actually do, and place
            the coverage that fits. We work with a panel of A-rated carriers
            so the recommendation is yours, not theirs.
          </p>
          <div className="dirC__hero-meta">
            <div>
              <span className="k">Practice</span>
              <span className="v">Independent · Boutique</span>
            </div>
            <div>
              <span className="k">Established</span>
              <span className="v">Phoenix, {HATCH.founded}</span>
            </div>
            <div>
              <span className="k">Footprint</span>
              <span className="v">{HATCH.states} states · 8 specialties</span>
            </div>
            <div>
              <span className="k">Hours</span>
              <span className="v">{HATCH.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Approach — letter-style (moved above specialties) */}
      <section className="dirC__approach" id="approach">
        <div className="dirC__sec-head">
          <span className="dirC__kicker">— II —</span>
          <h2>How we work.</h2>
        </div>

        <div className="dirC__letter">
          <p>
            We are an independent agency, which means we are not contracted to
            sell a single carrier's policies. We sit on your side of the table,
            present several proposals, and stay on the file long after the
            policy is bound.
          </p>
          <p>
            Most of what makes a difference happens before the quote — listening
            to the operation, learning what is actually exposed, and asking the
            questions a quote engine never will. We have been doing it the same
            way since {HATCH.founded}, and we are not going to stop.
          </p>
          <p className="dirC__letter-sign">— The Hatch Team</p>
        </div>

        <ol className="dirC__steps">
          {[
          ['Pre-qualification', 'A real conversation about the operation, the assets, and the exposure.'],
          ['Carrier presentation', 'Multiple proposals from A-rated markets that want your class.'],
          ['Packaging', 'Lines combined where it reduces gaps and improves continuity.'],
          ['Stewardship', 'Renewal reviews, COIs, and a person to call when something happens.']].
          map(([h, b], i) =>
          <li key={h}>
              <span className="step">{String(i + 1).padStart(2, '0')}</span>
              <h4>{h}</h4>
              <p>{b}</p>
            </li>
          )}
        </ol>
      </section>

      {/* Specialties — tabbed, plate style */}
      <section className="dirC__specialty" id="specialty">
        <div className="dirC__sec-head">
          <span className="dirC__kicker">— III —</span>
          <h2>The eight practices.</h2>
          <p>Each practice has its own producer, its own carriers, and its own way of asking questions. Pick the one that sounds like your operation.</p>
        </div>

        <div className="dirC__tabs">
          {SPECIALTIES.map((s, i) =>
          <button
            key={s.slug}
            className={`dirC__tab ${i === tab ? 'is-active' : ''}`}
            onClick={() => setTab(i)}>
            
              <span className="n">{s.n}</span>
              <span className="t">{s.short}</span>
            </button>
          )}
        </div>

        <article className="dirC__plate">
          <div className="dirC__plate-image">
            <img src={cur.img} alt={cur.title} />
            <span className="dirC__plate-caption">Plate {cur.n} · {cur.title}</span>
          </div>
          <div className="dirC__plate-body">
            <span className="dirC__plate-no">No. {cur.n}</span>
            <h3>{cur.title}</h3>
            <p className="dirC__plate-aud">{cur.audience}</p>
            <p className="dirC__plate-summary">{cur.body}</p>

            <div className="dirC__plate-list">
              <span className="lbl">What we look at</span>
              <ul>
                {cur.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>

            <a className="dirC__plate-cta" href="#visit">
              {cur.cta}
              <span className="arr">↗</span>
            </a>
          </div>
        </article>
      </section>

      {/* Voices */}
      <section className="dirC__voices">
        <div className="dirC__sec-head">
          <span className="dirC__kicker">— IV —</span>
          <h2>Voices from the file.</h2>
        </div>
        <div className="dirC__voice-grid">
          {TESTIMONIALS.map((t) =>
          <figure key={t.author} className="dirC__voice">
              <blockquote>
                <span className="qmark">"</span>
                {t.quote}
              </blockquote>
              <figcaption>
                <strong>{t.author}</strong>
                <em>{t.role}</em>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* People */}
      <section className="dirC__people" id="people">
        <div className="dirC__sec-head">
          <span className="dirC__kicker">— V —</span>
          <h2>The people on your file.</h2>
          <p>The advisor on your file is the advisor on your call. No queues, no routing trees.</p>
        </div>
        <div className="dirC__people-grid">
          {TEAM.map((t) =>
          <article key={t.name} className="dirC__person">
              <div className="dirC__person-portrait">
                <span>{t.initials}</span>
              </div>
              <h4>{t.name}</h4>
              <p>{t.role}</p>
            </article>
          )}
        </div>
      </section>

      {/* Visit / contact */}
      <section className="dirC__visit" id="visit">
        <div className="dirC__visit-grid">
          <div>
            <span className="dirC__kicker">— VI —</span>
            <h2>Come by, or pick up the phone.</h2>
            <p>We answer it. The same people who write the policy.</p>
          </div>
          <div className="dirC__visit-card">
            <div className="dirC__visit-row">
              <span>Office</span>
              <strong>{HATCH.address[0]}<br />{HATCH.address[1]}</strong>
            </div>
            <div className="dirC__visit-row">
              <span>Toll free</span>
              <strong>{HATCH.toll}</strong>
            </div>
            <div className="dirC__visit-row">
              <span>Local</span>
              <strong>{HATCH.phone}</strong>
            </div>
            <div className="dirC__visit-row">
              <span>Email</span>
              <strong>{HATCH.email}</strong>
            </div>
            <div className="dirC__visit-row">
              <span>Hours</span>
              <strong>{HATCH.hours}</strong>
            </div>
            <a className="dirC__visit-cta" href={`tel:${HATCH.phone}`}>
              Call Hatch <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="dirC__footer">
        <em>Hatch Insurance Agency · Independent since {HATCH.founded} · Phoenix, Arizona</em>
      </footer>
    </div>);

}
window.DirectionC = DirectionC;