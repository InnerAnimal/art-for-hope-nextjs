export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <img src="/assets/logo-64.png" alt="Art for Hope logo" />
            <span>Art for Hope</span>
          </a>
          <nav style={{display:'flex',gap:'10px'}}>
            <a className="ghost" href="#programs">Programs</a>
            <a className="ghost" href="#gallery">Gallery</a>
            <a className="pill" href="#contact">Join a Workshop</a>
          </nav>
        </div>
      </header>

      <main id="top" className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Healing Arts by Amanda Barnes</div>
            <h1>Creating Hope Through Healing, Art, and Mindfulness</h1>
            <p className="lead">
              Inclusive, heart-centered workshops and adaptive art experiences designed to inspire strength,
              connection, and empowerment—especially within the SCI community.
            </p>
            <div className="cta-row">
              <a className="pill" href="#contact">Book a Session</a>
              <a className="ghost" href="#about">Learn More</a>
            </div>
            <div className="hero-card" style={{marginTop:18}}>
              <img src="/assets/workshop-thumb.jpg" alt="Participants holding paintings at a workshop" />
              <div>
                <strong>Upcoming: Community Workshop</strong><br />
                <span className="muted">Accessible venue • Materials provided • All levels welcome</span>
              </div>
            </div>
          </div>
          <div aria-hidden="true">
            <img src="/assets/logo-hero.png" alt="" style={{width:'100%',maxWidth:520,display:'block',marginInline:'auto',filter:'drop-shadow(0 24px 60px rgba(0,0,0,.5))'}} />
          </div>
        </div>
      </main>

      <section id="programs">
        <div className="wrap">
          <div className="eyebrow">Programs</div>
          <h2 style={{fontFamily:'Playfair Display,serif',margin:'.2rem 0 1rem'}}>How We Help</h2>
          <div className="grid cols-3">
            <article className="card">
              <span className="badge">Adaptive Art</span>
              <h3>Inclusive Sessions</h3>
              <p className="muted">Accessible, judgment-free creativity for all abilities with tools and pacing tailored to each participant.</p>
            </article>
            <article className="card">
              <span className="badge">Workshops</span>
              <h3>Community & Connection</h3>
              <p className="muted">Group workshops that cultivate mindfulness, resilience, and belonging through art-making.</p>
            </article>
            <article className="card">
              <span className="badge">Mindfulness</span>
              <h3>Creative Calm</h3>
              <p className="muted">Gentle practices that reduce stress, spark joy, and reconnect people with their inner light.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="wrap">
          <div className="eyebrow">Gallery</div>
          <h2 style={{fontFamily:'Playfair Display,serif',margin:'.2rem 0 1rem'}}>Moments of Hope</h2>
          <div className="gallery" role="list">
            <img className="tall" src="/assets/gallery-01.jpg" alt="Close-up of a brush painting a bright orange petal" role="listitem" />
            <img src="/assets/gallery-02.jpg" alt="Participant smiling and holding finished tree-of-life painting" role="listitem" />
            <img className="tall" src="/assets/gallery-03.jpg" alt="Hands guiding an adaptive brush across canvas" role="listitem" />
            <img className="wide" src="/assets/gallery-04.jpg" alt="Group photo showing participants proudly holding artwork" role="listitem" />
            <img src="/assets/gallery-05.jpg" alt="Elder participant smiling with a leaf motif painting" role="listitem" />
            <img src="/assets/gallery-06.jpg" alt="Participant in wheelchair painting an orange flower" role="listitem" />
          </div>
        </div>
      </section>

      <section aria-label="Testimonial">
        <div className="wrap quote">
          <p>“Creating art with Amanda gave me back a sense of control and joy. I left feeling lighter, braver, and connected.”</p>
          <cite>— Workshop Participant</cite>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h2 style={{fontFamily:'Playfair Display,serif',margin:'.2rem 0 1rem'}}>Join a Workshop</h2>
          <form className="card" action="https://formspree.io/f/your-id" method="POST">
            <div style={{display:'grid',gap:12,gridTemplateColumns:'1fr'}}>
              <label>Full Name
                <input name="name" required placeholder="Your name" style={{width:'100%',marginTop:6,padding:'12px 14px',borderRadius:12,border:'1px solid var(--ring)',background:'#160F38',color:'var(--afh-ink)'}} />
              </label>
              <label>Email
                <input name="email" type="email" required placeholder="you@example.com" style={{width:'100%',marginTop:6,padding:'12px 14px',borderRadius:12,border:'1px solid var(--ring)',background:'#160F38',color:'var(--afh-ink)'}} />
              </label>
              <label>Message
                <textarea name="message" rows={4} placeholder="Tell us a little about you…" style={{width:'100%',marginTop:6,padding:'12px 14px',borderRadius:12,border:'1px solid var(--ring)',background:'#160F38',color:'var(--afh-ink)'}} />
              </label>
            </div>
            <div style={{display:'flex',gap:10,alignItems:'center',marginTop:14}}>
              <button className="pill" type="submit">Send</button>
              <span className="muted">Or email: <a href="mailto:info@artforhopehealingarts.com">info@artforhopehealingarts.com</a></span>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap" style={{display:'flex',flexWrap:'wrap',gap:12,alignItems:'center',justifyContent:'space-between'}}>
          <div>© {new Date().getFullYear()} Art for Hope Healing Arts</div>
          <div style={{display:'flex',gap:12}}>
            <a className="ghost" href="https://www.facebook.com/ArtForHopeHealingArts" target="_blank" rel="noopener">Facebook</a>
            <a className="ghost" href="#programs">Programs</a>
            <a className="ghost" href="#gallery">Gallery</a>
          </div>
        </div>
      </footer>
    </>
  );
}
