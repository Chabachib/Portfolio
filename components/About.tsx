export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">01 — About</span>
            <h2 style={{ marginTop: 18 }}>
              Engineering at the <em>intersection</em> of physics, data &amp; intelligence.
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="bio reveal">
            <p>
              <strong>AI Engineer &amp; Data Scientist</strong> based in Marrakech, Morocco — I
              specialise in physics-informed ML, LLM automation, and end-to-end MLOps. My
              work sits at the overlap of research and engineering: I prototype models that
              genuinely move metrics, then harden them into production systems that scale.
            </p>
            <p>
              Currently building at <strong>Variable Data Co.</strong>, where I designed an
              LLM-based clause-extraction engine that cut insurance report turnaround from
              2+ days to under 30 minutes. Before that, I deployed an EV Digital Twin at
              DHBW Friedrichshafen ingesting 10k+ data points per second, and built a
              physics-informed neural network for battery SoC estimation achieving &lt;2%
              prediction error. My EEG emotion-detection research is published in{' '}
              <em>Sensors</em>, MDPI.
            </p>
            <div className="stat-mini">
              <div>
                <div className="n">2+</div>
                <div className="l">Years exp.</div>
              </div>
              <div>
                <div className="n">2</div>
                <div className="l">Publications</div>
              </div>
              <div>
                <div className="n">3+</div>
                <div className="l">Shipped systems</div>
              </div>
            </div>
          </div>

          <div className="expertise reveal-stagger">
            <div className="ex-card">
              <span className="num">/ 01</span>
              <h4>Physics-Informed ML</h4>
              <p>Embedding domain knowledge directly into model architectures — ensuring predictions are not just accurate, but physically meaningful.</p>
            </div>
            <div className="ex-card">
              <span className="num">/ 02</span>
              <h4>LLM Automation</h4>
              <p>Designing language-model pipelines that replace hours of manual work with reliable, structured intelligence at scale.</p>
            </div>
            <div className="ex-card">
              <span className="num">/ 03</span>
              <h4>Computer Vision</h4>
              <p>Building perception systems that extract signal from raw visual data — from detection to generative modelling.</p>
            </div>
            <div className="ex-card">
              <span className="num">/ 04</span>
              <h4>Digital Twins</h4>
              <p>Creating high-fidelity virtual replicas of real-world systems for simulation, prediction, and proactive decision-making.</p>
            </div>
            <div className="ex-card">
              <span className="num">/ 05</span>
              <h4>MLOps</h4>
              <p>Taking models from prototype to production — robust pipelines, monitoring, and infrastructure that holds up under real load.</p>
            </div>
            <div className="ex-card">
              <span className="num">/ 06</span>
              <h4>Research &amp; Publishing</h4>
              <p>Conducting rigorous, reproducible research and translating findings into contributions that advance the field.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
