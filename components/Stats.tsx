const stats = [
  {
    count: 2,
    suf: '',
    label: 'Publications',
    sub: 'Sensors MDPI · Springer LNNS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 4h9l3 3v13H6z" />
        <path d="M9 10h6M9 14h6M9 18h4" />
      </svg>
    ),
  },
  {
    count: 30,
    suf: 'min',
    label: 'Report turnaround',
    sub: 'down from 2+ days at Variable Data',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    count: 94,
    suf: '%',
    label: 'EEG accuracy',
    sub: 'valence/arousal on DEAP dataset',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 4v16h16" />
        <path d="M7 14l3-3 4 4 5-7" />
      </svg>
    ),
  },
  {
    count: 10,
    suf: 'k+',
    label: 'Data pts / sec',
    sub: 'real-time EV telemetry, <50ms latency',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
      </svg>
    ),
  },
  {
    count: 2,
    suf: '%',
    label: 'PINN SoC error',
    sub: 'Battery estimation, physically consistent',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    count: 93,
    suf: '%',
    label: 'GAN-Sim accuracy',
    sub: 'target-detection, sim-to-real transfer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section id="stats">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">05 — Footprint</span>
            <h2 style={{ marginTop: 18 }}>
              A few <em>numbers</em>, for context.
            </h2>
          </div>
          <p>Metrics from production systems, published research, and deployed models.</p>
        </div>

        <div className="stats-grid reveal-stagger">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="icon">{s.icon}</div>
              <div className="n" data-count={s.count}>
                <span className="val">0</span>
                <span className="suf">{s.suf}</span>
              </div>
              <div className="l">{s.label}</div>
              <div className="s">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
