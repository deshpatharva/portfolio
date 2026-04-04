# Artifact 4 — Explainable AI & Model Transparency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone infographic page (`artifacts/xai/`) covering Explainable AI — its definition, challenges, validation metrics, solution techniques, and a 4-model comparison table — and register it as Artifact 4 on the portfolio index.

**Architecture:** Two new files (`index.html` + `style.css`) under `artifacts/xai/`, mirroring the structure of Artifact 3 (`artifacts/llm-training/`). Vanilla HTML/CSS/JS only — no frameworks, no build step. Scroll-triggered reveal animations via `IntersectionObserver`. The portfolio `index.html` gets a 4th artifact card added.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (IntersectionObserver), Google Fonts (Syne, DM Mono, DM Sans).

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `artifacts/xai/style.css` | All styles for the XAI artifact — colors, typography, layout, animations |
| Create | `artifacts/xai/index.html` | Full page markup — topbar, hero, 6 sections, footer, inline JS |
| Modify | `index.html` | Add Artifact 4 card to `#artifacts` grid; move "New" badge from Artifact 3 to Artifact 4 |

---

## Task 1: Scaffold `style.css` — variables, reset, base, topbar, hero

**Files:**
- Create: `artifacts/xai/style.css`

- [ ] **Step 1: Create `artifacts/xai/style.css` with CSS variables, reset, body, container, mono utility, topbar, and hero styles**

```css
/* ══════════════════════════════════════════════
   XAI ARTIFACT — Styles
   Artifact 4 | Atharva Deshpande Portfolio
   ══════════════════════════════════════════════ */

:root {
  --bg:        #060d12;
  --bg-card:   #0a1a18;
  --bg-card2:  #0d2420;
  --border:    #1a3530;
  --text:      #e8f5f2;
  --muted:     #5a8a80;
  --teal:      #00c9a7;
  --red:       #ff5c5c;
  --amber:     #f5a623;
  --violet:    #a78bfa;
  --radius:    12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.7;
  background-image:
    linear-gradient(rgba(26,53,48,.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26,53,48,.25) 1px, transparent 1px);
  background-size: 48px 48px;
}

a { color: var(--teal); text-decoration: none; }
a:hover { text-decoration: underline; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.mono { font-family: 'DM Mono', monospace; }

/* ── Topbar ── */
.topbar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(6,13,18,.92);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; gap: 16px;
  padding: 0 24px; height: 56px;
}
.back-link {
  color: var(--muted); font-size: .85rem;
  transition: color .2s; white-space: nowrap;
}
.back-link:hover { color: var(--text); text-decoration: none; }
.topbar-title {
  font-family: 'Syne', sans-serif;
  font-weight: 600; font-size: .88rem;
  flex: 1; text-align: center;
}
.topbar-badge {
  background: rgba(0,201,167,.12);
  border: 1px solid rgba(0,201,167,.35);
  color: var(--teal);
  font-family: 'DM Mono', monospace;
  font-size: .7rem; font-weight: 500;
  padding: 2px 10px; border-radius: 20px;
  white-space: nowrap;
}

/* ── Hero ── */
.hero {
  padding: 72px 0 60px;
  position: relative; overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: -120px; left: 50%; transform: translateX(-50%);
  width: 900px; height: 600px;
  background: radial-gradient(ellipse at center,
    rgba(0,201,167,.07) 0%,
    rgba(0,201,167,.03) 40%,
    transparent 70%);
  pointer-events: none;
}
.hero-eyebrow {
  display: flex; align-items: center; gap: 10px;
  color: var(--teal); font-family: 'DM Mono', monospace;
  font-size: .8rem; margin-bottom: 20px;
  letter-spacing: .04em;
}
.eyebrow-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--teal); flex-shrink: 0;
  animation: dot-pulse 2.4s ease-in-out infinite;
}
@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,201,167,.5); }
  50%       { box-shadow: 0 0 0 8px rgba(0,201,167,0); }
}
.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800; line-height: 1.08;
  margin-bottom: 18px; color: var(--text);
  letter-spacing: -.01em;
}
.accent { color: var(--teal); }
.hero-sub {
  max-width: 620px; color: var(--muted);
  font-size: 1rem; line-height: 1.8;
  margin-bottom: 48px;
}

/* Hero Stats Bar */
.hero-stats {
  display: flex; align-items: stretch; flex-wrap: wrap;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  width: fit-content; overflow: hidden;
}
.hstat { padding: 18px 28px; text-align: center; }
.hstat-val {
  font-family: 'Syne', sans-serif;
  font-size: 1.4rem; font-weight: 700;
  color: var(--teal); line-height: 1.2;
}
.hstat-label {
  font-family: 'DM Mono', monospace;
  font-size: .68rem; color: var(--muted);
  margin-top: 3px; text-transform: uppercase;
  letter-spacing: .05em;
}
.hstat-div {
  width: 1px; background: var(--border); flex-shrink: 0;
}
```

- [ ] **Step 2: Open `artifacts/xai/style.css` in browser (via `index.html` once created) — verify no parse errors. Skip to Task 2 to build the HTML that loads it.**

---

## Task 2: Scaffold `index.html` — doctype through hero

**Files:**
- Create: `artifacts/xai/index.html`

- [ ] **Step 1: Create `artifacts/xai/index.html` with the document shell, topbar, and hero**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Explainable AI &amp; Model Transparency | Atharva Deshpande</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ── TOPBAR ── -->
  <nav class="topbar">
    <a href="../../index.html#artifacts" class="back-link">&#8592; Portfolio</a>
    <span class="topbar-title">Explainable AI &amp; Model Transparency</span>
    <span class="topbar-badge">Artifact 4</span>
  </nav>

  <!-- ── HERO ── -->
  <header class="hero">
    <div class="container">
      <div class="hero-eyebrow">
        <span class="eyebrow-dot" aria-hidden="true"></span>
        <span class="mono">Generative AI &bull; Explainability &amp; Trust</span>
      </div>
      <h1 class="hero-title">Opening the<br /><span class="accent">Black Box</span></h1>
      <p class="hero-sub">Why AI transparency matters — challenges, validation metrics, and the techniques leading organizations use to make AI decisions understandable.</p>

      <div class="hero-stats" role="list" aria-label="Key statistics">
        <div class="hstat" role="listitem">
          <div class="hstat-val">72%</div>
          <div class="hstat-label">Users don't trust AI</div>
        </div>
        <div class="hstat-div" aria-hidden="true"></div>
        <div class="hstat" role="listitem">
          <div class="hstat-val">3</div>
          <div class="hstat-label">Core challenges</div>
        </div>
        <div class="hstat-div" aria-hidden="true"></div>
        <div class="hstat" role="listitem">
          <div class="hstat-val">5</div>
          <div class="hstat-label">Solution techniques</div>
        </div>
        <div class="hstat-div" aria-hidden="true"></div>
        <div class="hstat" role="listitem">
          <div class="hstat-val">4</div>
          <div class="hstat-label">LLMs compared</div>
        </div>
      </div>
    </div>
  </header>

  <!-- sections go here in later tasks -->

</body>
</html>
```

- [ ] **Step 2: Open `artifacts/xai/index.html` in a browser. Verify: sticky teal topbar renders, hero title shows "Opening the Black Box" with teal accent, 4 stat tiles appear, pulsing dot animates.**

- [ ] **Step 3: Commit**

```bash
git add artifacts/xai/style.css artifacts/xai/index.html
git commit -m "feat: scaffold XAI artifact — topbar and hero"
```

---

## Task 3: Section styles + Section 01 (What is XAI?)

**Files:**
- Modify: `artifacts/xai/style.css` (append section + XAI definition styles)
- Modify: `artifacts/xai/index.html` (add section 01 markup)

- [ ] **Step 1: Append section layout and XAI definition card styles to `style.css`**

```css
/* ── Sections ── */
.section { padding: 80px 0; }
.section-alt {
  background: rgba(10,26,24,.7);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.section-header { margin-bottom: 48px; }
.section-tag {
  display: inline-block;
  font-size: .75rem; color: var(--teal);
  letter-spacing: .12em; text-transform: uppercase;
  margin-bottom: 10px;
}
.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700; margin-bottom: 10px;
  letter-spacing: -.01em;
}
.section-desc {
  color: var(--muted); max-width: 580px;
  font-size: .95rem;
}

/* ── Section 01: XAI Definition ── */
.xai-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}
@media (max-width: 768px) {
  .xai-grid { grid-template-columns: 1fr; }
}
.xai-def-card,
.xai-why-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease;
}
.xai-def-card { border-top: 3px solid var(--teal); }
.xai-why-card { border-top: 3px solid var(--muted); }
.xai-def-card.visible,
.xai-why-card.visible { opacity: 1; transform: translateY(0); }
.xai-why-card { transition-delay: .1s; }

.card-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: .72rem; color: var(--teal);
  letter-spacing: .1em; text-transform: uppercase;
  margin-bottom: 10px;
}
.card-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem; font-weight: 700;
  margin-bottom: 14px;
}
.card-body {
  color: var(--muted); font-size: .9rem;
  line-height: 1.75;
}
.pillars-list {
  list-style: none;
  display: flex; flex-direction: column; gap: 10px;
  margin-top: 16px;
}
.pillars-list li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: .88rem;
}
.pillar-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--teal); flex-shrink: 0;
  margin-top: 6px;
}
.why-item {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: .88rem;
}
.why-item:last-child { border-bottom: none; }
.why-icon { font-size: 1.2rem; flex-shrink: 0; }
.why-label { font-weight: 600; margin-bottom: 2px; }
.why-desc { color: var(--muted); font-size: .83rem; }
```

- [ ] **Step 2: Add Section 01 markup to `index.html` after the `</header>` closing tag and before `</body>`**

```html
  <!-- ── SECTION 01: WHAT IS XAI ── -->
  <section class="section section-alt" aria-labelledby="xai-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">01 — What is XAI?</span>
        <h2 class="section-title" id="xai-heading">Explainable AI &amp; Why It Matters</h2>
        <p class="section-desc">XAI is the set of methods and techniques that make AI decisions understandable to humans — covering transparency, interpretability, and accountability.</p>
      </div>

      <div class="xai-grid">
        <div class="xai-def-card">
          <div class="card-eyebrow">Definition</div>
          <div class="card-title">What is Explainable AI?</div>
          <p class="card-body">Explainable AI (XAI) refers to methods and processes that allow humans to understand and trust the outputs of machine learning models. Unlike traditional software where logic is explicit, large language models distribute decision-making across billions of parameters — making it nearly impossible to trace any single output to a clear cause.</p>
          <ul class="pillars-list">
            <li><span class="pillar-dot"></span><div><strong>Transparency</strong> — the model's architecture and training process are open to inspection</div></li>
            <li><span class="pillar-dot"></span><div><strong>Interpretability</strong> — humans can understand what factors drove a specific decision</div></li>
            <li><span class="pillar-dot"></span><div><strong>Accountability</strong> — clear ownership when an AI system causes harm or produces errors</div></li>
          </ul>
        </div>
        <div class="xai-why-card">
          <div class="card-eyebrow">Why It Matters</div>
          <div class="card-title">Stakes &amp; Drivers</div>
          <div class="why-item"><span class="why-icon">⚖️</span><div><div class="why-label">Regulation</div><div class="why-desc">EU AI Act mandates explainability for high-risk AI systems</div></div></div>
          <div class="why-item"><span class="why-icon">🏥</span><div><div class="why-label">Safety</div><div class="why-desc">Medical, legal, and financial AI require auditable decisions</div></div></div>
          <div class="why-item"><span class="why-icon">⚠️</span><div><div class="why-label">Bias Detection</div><div class="why-desc">Explanations surface when models discriminate unfairly</div></div></div>
          <div class="why-item"><span class="why-icon">🤝</span><div><div class="why-label">User Trust</div><div class="why-desc">72% of users distrust AI — explainability bridges the gap</div></div></div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Open in browser. Verify: two-column layout (definition + why), teal top-border on definition card, 3 pillars with teal dots, 4 why-items with icons and descriptions. Cards are invisible until scrolled into view.**

- [ ] **Step 4: Commit**

```bash
git add artifacts/xai/style.css artifacts/xai/index.html
git commit -m "feat: XAI artifact section 01 — what is XAI"
```

---

## Task 4: Section 02 — Challenges

**Files:**
- Modify: `artifacts/xai/style.css` (append challenge card styles)
- Modify: `artifacts/xai/index.html` (add section 02 markup)

- [ ] **Step 1: Append challenge card styles to `style.css`**

```css
/* ── Section 02: Challenges ── */
.challenges-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 900px) {
  .challenges-grid { grid-template-columns: 1fr; }
}
.challenge-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease, background .2s;
}
.challenge-card:nth-child(2) { transition-delay: .1s; }
.challenge-card:nth-child(3) { transition-delay: .2s; }
.challenge-card.visible { opacity: 1; transform: translateY(0); }
.challenge-card:hover { background: var(--bg-card2); }

.challenge-card[data-accent="red"]    { border-left: 3px solid var(--red); }
.challenge-card[data-accent="amber"]  { border-left: 3px solid var(--amber); }
.challenge-card[data-accent="violet"] { border-left: 3px solid var(--violet); }

.challenge-num {
  font-family: 'DM Mono', monospace;
  font-size: .7rem; color: var(--muted);
  letter-spacing: .1em; margin-bottom: 12px;
}
.challenge-icon { font-size: 1.8rem; margin-bottom: 12px; }
.challenge-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.05rem; font-weight: 700;
  margin-bottom: 10px;
}
.challenge-card[data-accent="red"]    .challenge-title { color: var(--red); }
.challenge-card[data-accent="amber"]  .challenge-title { color: var(--amber); }
.challenge-card[data-accent="violet"] .challenge-title { color: var(--violet); }
.challenge-body {
  color: var(--muted); font-size: .875rem; line-height: 1.7;
}
```

- [ ] **Step 2: Add Section 02 markup to `index.html` after section 01's closing `</section>` tag**

```html
  <!-- ── SECTION 02: CHALLENGES ── -->
  <section class="section" aria-labelledby="challenges-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">02 — Challenges</span>
        <h2 class="section-title" id="challenges-heading">3 Core Obstacles to Explainability</h2>
        <p class="section-desc">Generative AI models create fundamental challenges that resist straightforward interpretation — and are unlikely to vanish as models scale.</p>
      </div>

      <div class="challenges-grid">
        <div class="challenge-card" data-accent="red">
          <div class="challenge-num">01 / 03</div>
          <div class="challenge-icon">⬛</div>
          <div class="challenge-title">Black Box Opacity</div>
          <p class="challenge-body">Decisions emerge from complex, non-linear interactions across millions or billions of parameters. No single component fully explains the output. The distributed and dynamic internal structure resists straightforward interpretation — even from the engineers who built the system.</p>
        </div>
        <div class="challenge-card" data-accent="amber">
          <div class="challenge-num">02 / 03</div>
          <div class="challenge-icon">🔍</div>
          <div class="challenge-title">Post-Hoc Explanation Gap</div>
          <p class="challenge-body">Explanations are typically generated after the decision, not during it. These post-hoc explanations may not accurately reflect the model's true internal reasoning. This gap can undermine trust — a challenge that persists even as models grow more sophisticated and explanation methods improve.</p>
        </div>
        <div class="challenge-card" data-accent="violet">
          <div class="challenge-num">03 / 03</div>
          <div class="challenge-icon">📊</div>
          <div class="challenge-title">Data Quality &amp; Bias</div>
          <p class="challenge-body">Models trained on vast datasets inherit the imperfections within those datasets — including biases, noise, and underrepresentation. Ensuring data quality and representativeness remains crucial, as biased outputs will continue to be a significant concern regardless of model architecture advances.</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Open in browser. Verify: 3-column grid, left accent borders in red/amber/violet, colored titles matching border, cards stagger into view on scroll.**

- [ ] **Step 4: Commit**

```bash
git add artifacts/xai/style.css artifacts/xai/index.html
git commit -m "feat: XAI artifact section 02 — challenges"
```

---

## Task 5: Section 03 — Validation & Performance Metrics

**Files:**
- Modify: `artifacts/xai/style.css` (append metric card styles)
- Modify: `artifacts/xai/index.html` (add section 03 markup)

- [ ] **Step 1: Append metric card styles to `style.css`**

```css
/* ── Section 03: Validation Metrics ── */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 640px) {
  .metrics-grid { grid-template-columns: 1fr; }
}
.metric-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  display: flex; gap: 20px; align-items: flex-start;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease, background .2s;
}
.metric-card:nth-child(2) { transition-delay: .08s; }
.metric-card:nth-child(3) { transition-delay: .16s; }
.metric-card:nth-child(4) { transition-delay: .24s; }
.metric-card.visible { opacity: 1; transform: translateY(0); }
.metric-card:hover { background: var(--bg-card2); }

.metric-icon-wrap {
  width: 44px; height: 44px; border-radius: 10px;
  background: rgba(0,201,167,.12);
  border: 1px solid rgba(0,201,167,.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem; flex-shrink: 0;
}
.metric-body { flex: 1; }
.metric-name {
  font-family: 'Syne', sans-serif;
  font-size: 1rem; font-weight: 700;
  color: var(--teal); margin-bottom: 6px;
}
.metric-desc {
  color: var(--muted); font-size: .875rem; line-height: 1.65;
}
.metric-question {
  margin-top: 8px;
  font-family: 'DM Mono', monospace;
  font-size: .78rem; color: var(--text);
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 12px;
}
```

- [ ] **Step 2: Add Section 03 markup to `index.html` after section 02's closing `</section>` tag**

```html
  <!-- ── SECTION 03: VALIDATION & METRICS ── -->
  <section class="section section-alt" aria-labelledby="metrics-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">03 — Validation &amp; Metrics</span>
        <h2 class="section-title" id="metrics-heading">How We Measure Trust &amp; Reliability</h2>
        <p class="section-desc">Performance metrics give AI systems accountability. These four properties define what a trustworthy explanation actually looks like.</p>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon-wrap">🎯</div>
          <div class="metric-body">
            <div class="metric-name">Faithfulness</div>
            <p class="metric-desc">The explanation must accurately reflect the model's actual decision process — not a plausible-sounding but fictional rationale.</p>
            <div class="metric-question">Does the explanation match what the model actually computed?</div>
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-icon-wrap">🧑‍💼</div>
          <div class="metric-body">
            <div class="metric-name">Human-Groundedness</div>
            <p class="metric-desc">Real users — not just researchers — should be able to understand the explanation and use it to verify or challenge the model's output.</p>
            <div class="metric-question">Can a non-expert understand and act on this explanation?</div>
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-icon-wrap">🔁</div>
          <div class="metric-body">
            <div class="metric-name">Robustness</div>
            <p class="metric-desc">Similar inputs should produce similar explanations. An explanation that changes drastically with minor input variations cannot be trusted.</p>
            <div class="metric-question">Are results consistent across similar inputs and contexts?</div>
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-icon-wrap">📋</div>
          <div class="metric-body">
            <div class="metric-name">Completeness</div>
            <p class="metric-desc">The explanation should cover all factors that materially influenced the output — not just the most obvious or convenient ones.</p>
            <div class="metric-question">Does it account for all relevant contributing factors?</div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Open in browser. Verify: 2×2 grid of metric cards, each with teal icon box, teal metric name, description, and mono question block. Cards stagger in on scroll.**

- [ ] **Step 4: Commit**

```bash
git add artifacts/xai/style.css artifacts/xai/index.html
git commit -m "feat: XAI artifact section 03 — validation metrics"
```

---

## Task 6: Section 04 — Solutions & Techniques

**Files:**
- Modify: `artifacts/xai/style.css` (append technique card styles)
- Modify: `artifacts/xai/index.html` (add section 04 markup)

- [ ] **Step 1: Append technique card styles to `style.css`**

```css
/* ── Section 04: Techniques ── */
.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
.technique-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease, background .2s;
}
.technique-card:nth-child(2) { transition-delay: .08s; }
.technique-card:nth-child(3) { transition-delay: .16s; }
.technique-card:nth-child(4) { transition-delay: .24s; }
.technique-card:nth-child(5) { transition-delay: .32s; }
.technique-card.visible { opacity: 1; transform: translateY(0); }
.technique-card:hover { background: var(--bg-card2); }

.technique-header {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 14px;
}
.technique-icon {
  font-size: 1.8rem; flex-shrink: 0;
}
.technique-name {
  font-family: 'Syne', sans-serif;
  font-size: 1rem; font-weight: 700;
}
.technique-desc {
  color: var(--muted); font-size: .875rem;
  line-height: 1.7; margin-bottom: 14px;
}
.technique-used-by {
  display: flex; flex-wrap: wrap; gap: 6px;
  margin-top: 12px;
}
.used-tag {
  font-family: 'DM Mono', monospace;
  font-size: .7rem;
  background: rgba(0,201,167,.1);
  border: 1px solid rgba(0,201,167,.25);
  color: var(--teal);
  padding: 2px 9px; border-radius: 20px;
}
```

- [ ] **Step 2: Add Section 04 markup to `index.html` after section 03's closing `</section>` tag**

```html
  <!-- ── SECTION 04: SOLUTIONS & TECHNIQUES ── -->
  <section class="section" aria-labelledby="techniques-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">04 — Solutions &amp; Techniques</span>
        <h2 class="section-title" id="techniques-heading">5 Industry Approaches</h2>
        <p class="section-desc">Leading AI organizations are actively developing and deploying these techniques to improve transparency and interpretability.</p>
      </div>

      <div class="techniques-grid">
        <div class="technique-card">
          <div class="technique-header">
            <span class="technique-icon">🔦</span>
            <span class="technique-name">Attention Visualization</span>
          </div>
          <p class="technique-desc">Heatmaps illustrating which input tokens the model focused on when producing each output token. These visualizations offer insight into the model's internal priorities — though attention patterns are not always a faithful proxy for causal reasoning.</p>
          <div class="technique-used-by">
            <span class="used-tag">GPT-4</span>
            <span class="used-tag">Claude</span>
            <span class="used-tag">LLaMA</span>
          </div>
        </div>
        <div class="technique-card">
          <div class="technique-header">
            <span class="technique-icon">🧠</span>
            <span class="technique-name">Chain-of-Thought Prompting</span>
          </div>
          <p class="technique-desc">Encouraging models to "think aloud" through step-by-step reasoning before giving a final answer. Users can prompt any modern LLM to explain its process by simply asking — making reasoning accessible without requiring model internals access.</p>
          <div class="technique-used-by">
            <span class="used-tag">GPT-4</span>
            <span class="used-tag">Claude</span>
            <span class="used-tag">Gemini</span>
          </div>
        </div>
        <div class="technique-card">
          <div class="technique-header">
            <span class="technique-icon">📐</span>
            <span class="technique-name">SHAP &amp; LIME</span>
          </div>
          <p class="technique-desc">Model-agnostic post-hoc explanation methods. SHAP (SHapley Additive exPlanations) assigns each feature a contribution score using game theory. LIME (Local Interpretable Model-agnostic Explanations) builds a simpler local model that approximates the complex model's behavior around a single prediction.</p>
          <div class="technique-used-by">
            <span class="used-tag">Research</span>
            <span class="used-tag">ML Pipelines</span>
          </div>
        </div>
        <div class="technique-card">
          <div class="technique-header">
            <span class="technique-icon">🔬</span>
            <span class="technique-name">Probing Classifiers</span>
          </div>
          <p class="technique-desc">Lightweight neural networks trained on top of frozen model representations to test what information the model has encoded internally. If a simple linear probe can predict syntactic structure from hidden states, the model has learned syntax — even without being explicitly taught it.</p>
          <div class="technique-used-by">
            <span class="used-tag">Research Labs</span>
            <span class="used-tag">LLaMA</span>
          </div>
        </div>
        <div class="technique-card">
          <div class="technique-header">
            <span class="technique-icon">📜</span>
            <span class="technique-name">Constitutional AI</span>
          </div>
          <p class="technique-desc">Anthropic's approach to making model behavior auditable through explicit principles. Claude is trained with a "constitution" — a set of rules the model uses to self-critique its own outputs. The reasoning process is visible and the governing principles are public, making behavior more predictable and accountable.</p>
          <div class="technique-used-by">
            <span class="used-tag">Claude</span>
            <span class="used-tag">Anthropic</span>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Open in browser. Verify: 5 technique cards in auto-fill grid, each with icon + name header, description, teal "used by" tags. Cards stagger in on scroll.**

- [ ] **Step 4: Commit**

```bash
git add artifacts/xai/style.css artifacts/xai/index.html
git commit -m "feat: XAI artifact section 04 — solutions and techniques"
```

---

## Task 7: Section 05 — Model Comparison Table

**Files:**
- Modify: `artifacts/xai/style.css` (append comparison table styles)
- Modify: `artifacts/xai/index.html` (add section 05 markup)

- [ ] **Step 1: Append comparison table styles to `style.css`**

```css
/* ── Section 05: Model Comparison ── */
.compare-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .875rem;
}
.compare-table th {
  font-family: 'Syne', sans-serif;
  font-weight: 600; font-size: .8rem;
  text-transform: uppercase; letter-spacing: .06em;
  padding: 14px 20px;
  background: var(--bg-card2);
  border-bottom: 1px solid var(--border);
  text-align: center;
  color: var(--muted);
}
.compare-table th:first-child { text-align: left; color: var(--text); }
.compare-table td {
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  transition: opacity .4s ease;
}
.compare-table td:first-child {
  text-align: left;
  font-weight: 500;
  color: var(--text);
}
.compare-table tr:last-child td { border-bottom: none; }
.compare-table tr:nth-child(even) td { background: rgba(10,26,24,.4); }
.compare-table td.visible { opacity: 1; }

.cell-yes   { color: var(--teal);  font-size: 1.1rem; }
.cell-no    { color: var(--muted); font-size: 1.1rem; }
.cell-part  { color: var(--amber); font-size: .78rem; font-family: 'DM Mono', monospace; }

.model-header-row th:not(:first-child) {
  color: var(--text);
  font-size: .82rem;
}
```

- [ ] **Step 2: Add Section 05 markup to `index.html` after section 04's closing `</section>` tag**

```html
  <!-- ── SECTION 05: MODEL COMPARISON ── -->
  <section class="section section-alt" aria-labelledby="compare-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">05 — Model Comparison</span>
        <h2 class="section-title" id="compare-heading">GPT-4 &middot; Claude &middot; Gemini &middot; LLaMA</h2>
        <p class="section-desc">How the four leading generative AI models approach explainability, transparency, and open access.</p>
      </div>

      <div class="compare-wrap">
        <table class="compare-table" role="table" aria-label="Model explainability comparison">
          <thead>
            <tr class="model-header-row">
              <th scope="col">Feature</th>
              <th scope="col">GPT-4</th>
              <th scope="col">Claude</th>
              <th scope="col">Gemini</th>
              <th scope="col">LLaMA 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chain-of-Thought</td>
              <td class="cell-yes">✓</td>
              <td class="cell-yes">✓</td>
              <td class="cell-yes">✓</td>
              <td class="cell-part">Partial</td>
            </tr>
            <tr>
              <td>Open Weights</td>
              <td class="cell-no">✗</td>
              <td class="cell-no">✗</td>
              <td class="cell-no">✗</td>
              <td class="cell-yes">✓</td>
            </tr>
            <tr>
              <td>Constitutional AI</td>
              <td class="cell-no">✗</td>
              <td class="cell-yes">✓</td>
              <td class="cell-no">✗</td>
              <td class="cell-no">✗</td>
            </tr>
            <tr>
              <td>Public Transparency Report</td>
              <td class="cell-yes">✓</td>
              <td class="cell-yes">✓</td>
              <td class="cell-yes">✓</td>
              <td class="cell-part">Partial</td>
            </tr>
            <tr>
              <td>Attention Visualization Tools</td>
              <td class="cell-part">Partial</td>
              <td class="cell-yes">✓</td>
              <td class="cell-part">Partial</td>
              <td class="cell-yes">✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Open in browser. Verify: full-width table with sticky horizontal scroll on mobile, teal ✓ / muted ✗ / amber "Partial" cells, alternating row background, table rows animate in on scroll (after JS added in Task 8).**

- [ ] **Step 4: Commit**

```bash
git add artifacts/xai/style.css artifacts/xai/index.html
git commit -m "feat: XAI artifact section 05 — model comparison table"
```

---

## Task 8: Section 06 — Explanatory Document, Footer, and IntersectionObserver JS

**Files:**
- Modify: `artifacts/xai/style.css` (append explanatory doc + footer styles)
- Modify: `artifacts/xai/index.html` (add section 06, footer, inline `<script>`)

- [ ] **Step 1: Append explanatory doc and footer styles to `style.css`**

```css
/* ── Section 06: Explanatory Document ── */
.explainer-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-top: 3px solid var(--teal);
  border-radius: var(--radius);
  padding: 40px;
  max-width: 800px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease;
}
.explainer-card.visible { opacity: 1; transform: translateY(0); }
.explainer-card p {
  color: var(--muted);
  font-size: .95rem;
  line-height: 1.85;
  margin-bottom: 20px;
}
.explainer-card p:last-child { margin-bottom: 0; }
.explainer-card strong { color: var(--text); }

/* ── Footer ── */
.artifact-footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;
}
.artifact-footer .container {
  display: flex; align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
}
.footer-copy {
  font-family: 'DM Mono', monospace;
  font-size: .78rem; color: var(--muted);
}
.footer-back {
  font-size: .85rem; color: var(--muted);
  transition: color .2s;
}
.footer-back:hover { color: var(--text); text-decoration: none; }

/* ── Mobile tweaks ── */
@media (max-width: 640px) {
  .hero-stats { width: 100%; }
  .hstat { flex: 1; padding: 14px 12px; }
  .topbar-title { display: none; }
}
```

- [ ] **Step 2: Add Section 06, footer, and the `<script>` block to `index.html`. Replace the `<!-- sections go here -->` comment and close `</body>` properly. Add these after section 05's closing `</section>` tag, before `</body>`:**

```html
  <!-- ── SECTION 06: EXPLANATORY DOCUMENT ── -->
  <section class="section" aria-labelledby="explainer-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">06 — Explanatory Document</span>
        <h2 class="section-title" id="explainer-heading">Summary &amp; Design Rationale</h2>
      </div>

      <div class="explainer-card">
        <p>Generative AI models — particularly large language models like GPT-4, Claude, Gemini, and LLaMA — are powerful yet fundamentally opaque. Their decision-making is distributed across billions of parameters through non-linear interactions that resist straightforward interpretation. This artifact maps the three core challenges standing between AI systems and genuine transparency: the <strong>black box opacity</strong> of distributed model internals, the <strong>post-hoc explanation gap</strong> where after-the-fact rationales may not reflect true reasoning, and <strong>data quality and bias</strong> embedded in training sets. Understanding these challenges is the first step toward holding AI systems accountable.</p>
        <p>Validation metrics — <strong>faithfulness, human-groundedness, robustness, and completeness</strong> — give us concrete ways to evaluate whether an explanation is trustworthy, not just plausible. The five solution techniques shown here represent the industry's active response: attention visualization and probing classifiers expose model internals; SHAP and LIME quantify feature contributions; chain-of-thought prompting makes reasoning externally auditable; and Anthropic's Constitutional AI embeds explicit, public principles directly into training. The <strong>teal color identity</strong> was chosen to evoke clinical clarity and diagnostic precision — qualities that should define how we approach AI accountability. The model comparison table grounds the concepts in the real landscape of tools available today.</p>
      </div>
    </div>
  </section>

  <footer class="artifact-footer">
    <div class="container">
      <span class="mono footer-copy">Artifact 4 &mdash; Atharva Deshpande &middot; 2026</span>
      <a href="../../index.html#artifacts" class="footer-back">&#8592; Back to Portfolio</a>
    </div>
  </footer>

  <script>
    // Scroll-triggered reveal for all animated elements
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.08 });

    document.querySelectorAll(
      '.xai-def-card, .xai-why-card, .challenge-card, .metric-card, .technique-card, .explainer-card'
    ).forEach(el => revealObs.observe(el));

    // Table row reveal — each cell individually for a left-to-right sweep effect
    const tableObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const cells = e.target.querySelectorAll('td');
          cells.forEach((cell, i) => {
            setTimeout(() => cell.classList.add('visible'), i * 60);
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.compare-table tbody tr').forEach(row => tableObs.observe(row));
  </script>
```

- [ ] **Step 3: Open in browser. Scroll through the full page. Verify:**
  - All 6 sections visible
  - Explanatory document card fades in on scroll with 2 paragraphs
  - Footer shows "Artifact 4" and back link
  - Table cells animate left-to-right when scrolled into view
  - No console errors

- [ ] **Step 4: Commit**

```bash
git add artifacts/xai/style.css artifacts/xai/index.html
git commit -m "feat: XAI artifact section 06, footer, and scroll animations"
```

---

## Task 9: Update Portfolio Index — Add Artifact 4 Card

**Files:**
- Modify: `index.html` (portfolio root)

- [ ] **Step 1: In `index.html`, find the Artifact 3 card and remove the `new-badge` div from it. The current Artifact 3 block looks like:**

```html
        <article class="artifact-card">
          <div class="artifact-badge new-badge">New</div>
          <div class="artifact-icon">&#x1F916;</div>
          <h3>How LLMs Are Built</h3>
          <p>An infographic tracing the full LLM training lifecycle — from data collection and pre-training through RLHF and deployment — with model comparisons across GPT-4, Claude, LLaMA 2, and Gemini.</p>
          <a href="artifacts/llm-training/index.html" class="btn btn-outline">View Artifact</a>
        </article>
```

Change it to (remove `<div class="artifact-badge new-badge">New</div>`):

```html
        <article class="artifact-card">
          <div class="artifact-icon">&#x1F916;</div>
          <h3>How LLMs Are Built</h3>
          <p>An infographic tracing the full LLM training lifecycle — from data collection and pre-training through RLHF and deployment — with model comparisons across GPT-4, Claude, LLaMA 2, and Gemini.</p>
          <a href="artifacts/llm-training/index.html" class="btn btn-outline">View Artifact</a>
        </article>
```

- [ ] **Step 2: Add the Artifact 4 card immediately after the closing `</article>` of Artifact 3:**

```html
        <article class="artifact-card">
          <div class="artifact-badge new-badge">New</div>
          <div class="artifact-icon">&#x1F50D;</div>
          <h3>Explainable AI &amp; Model Transparency</h3>
          <p>An infographic mapping XAI challenges, validation metrics, and solution techniques — with a side-by-side comparison of how GPT-4, Claude, Gemini, and LLaMA approach transparency.</p>
          <a href="artifacts/xai/index.html" class="btn btn-outline">View Artifact</a>
        </article>
```

- [ ] **Step 3: Open `index.html` in browser, navigate to the `#artifacts` section. Verify:**
  - 4 artifact cards visible in the grid
  - Artifact 3 no longer has "New" badge
  - Artifact 4 has "New" badge, magnifying glass icon, correct title and description
  - "View Artifact" link on Artifact 4 navigates to `artifacts/xai/index.html`

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add Artifact 4 XAI card to portfolio index"
```

---

## Self-Review

**Spec coverage check:**
- ✅ What is XAI + importance → Section 01
- ✅ Challenges (opacity, post-hoc, bias) → Section 02
- ✅ Validation & performance metrics → Section 03
- ✅ Current solutions & techniques (attention viz, CoT, SHAP/LIME, probing, Constitutional AI) → Section 04
- ✅ Model comparison GPT-4/Claude/Gemini/LLaMA → Section 05
- ✅ Explanatory document (1–2 paragraphs) → Section 06
- ✅ Scroll-triggered reveal animations → Tasks 3–8 (`.visible` class via IntersectionObserver)
- ✅ Teal/emerald color identity → Task 1 CSS variables
- ✅ Portfolio index updated with Artifact 4 card → Task 9
- ✅ "New" badge moved from Artifact 3 to Artifact 4 → Task 9

**Placeholder scan:** None found. All steps contain actual markup, CSS, and commands.

**Type consistency:** `.visible` class used consistently across all animated elements. `IntersectionObserver` selector list in Task 8 Step 2 matches all card class names defined in Tasks 3–7.
