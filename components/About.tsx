const sections = [
  {
    title: 'Who am I?',
    content: `AI Engineer & Data Scientist from Marrakech, Morocco, with a foundation in mathematics and computer science. Published researcher with work in Sensors (MDPI) and Springer LNNS. I love building end-to-end systems, and there's nothing quite like the satisfaction of watching them work exactly as intended.`,
  },
  {
    title: 'What I do?',
    content: `I build ML systems that hold up outside the notebook, physics-informed neural networks grounded in real equations, LLM pipelines that automate complex document workflows, and digital twins that process telemetry in real time. My work lives at the overlap of research rigour and production reliability: prototype fast, then harden it until it scales.`,
  },
  {
    title: 'Vision',
    content: `I believe the next generation of AI will be built at the intersection of physical laws and data-driven learning, not choosing between the two. My goal is to contribute to that frontier: models that are not just accurate, but interpretable, physically constrained, and trustworthy enough to deploy in high-stakes environments.`,
  },
  {
    title: 'Beyond Dev',
    content: `When I'm not building systems, I'm out running, logging miles and collecting race medals when the opportunity shows up. I hike whenever terrain allows and travel as often as I can, drawn to new places, landscapes, and the perspective that comes with being somewhere unfamiliar.`,
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">01 — About</span>
            <h2 style={{ marginTop: 18 }}>
              Get <em>to</em> know me.
            </h2>
          </div>
        </div>

        <div className="about-sections reveal-stagger">
          {sections.map((s) => (
            <div className="about-section" key={s.title}>
              <div className="about-section-title">{s.title}</div>
              <p>{s.content}</p>
            </div>
          ))}
        </div>

        <div className="stat-mini reveal">
          <div>
            <div className="n">1+</div>
            <div className="l">Years experience</div>
          </div>
          <div>
            <div className="n">2</div>
            <div className="l">Academic Publications</div>
          </div>
          <div>
            <div className="n">5+</div>
            <div className="l">Shipped systems</div>
          </div>
        </div>
      </div>
    </section>
  )
}
