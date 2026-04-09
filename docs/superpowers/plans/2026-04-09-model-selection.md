# Artifact 5 — Pre-trained Model Selection & Decision Matrix — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `artifacts/model-selection/index.html` + `style.css` — a dark-navy, interactive portfolio artifact comparing 8 pre-trained models across NLP, Vision, and Tabular domains with a filterable/sortable decision matrix.

**Architecture:** Two-file static artifact (HTML + CSS) with ~60 lines of vanilla JS embedded in the HTML. Follows the same component patterns as Artifact 4 (XAI) but with an indigo/cyan color identity instead of teal. No external JS libraries.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (IntersectionObserver, sort, filter), Google Fonts (Syne, DM Mono, DM Sans)

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `artifacts/model-selection/style.css` | Create | All styles — variables, layout, components |
| `artifacts/model-selection/index.html` | Create | Full page HTML — 8 sections + topbar + hero + footer |
| `artifacts/xai/index.html` | Modify (line ~20) | Add right-arrow nav to Artifact 5 |
| `index.html` | Modify | Add Artifact 5 card to portfolio grid |

---

## Task 1: Create directory and complete style.css

**Files:**
- Create: `artifacts/model-selection/style.css`

- [ ] **Step 1: Create the directory and style.css with complete styles**

```css
/* ══════════════════════════════════════════════
   MODEL SELECTION ARTIFACT — Styles
   Artifact 5 | Atharva Deshpande Portfolio
   ══════════════════════════════════════════════ */

:root {
  --bg:        #05080f;
  --bg-card:   #0c1228;
  --bg-card2:  #0f1a3a;
  --border:    #1e2d5a;
  --text:      #e8eaf6;
  --muted:     #6b7ab8;
  --indigo:    #7c6ff7;
  --cyan:      #00d4ff;
  --green:     #22c55e;
  --amber:     #f59e0b;
  --red:       #ef4444;
  --nlp-color: #7c6ff7;
  --vis-color: #00d4ff;
  --tab-color: #f59e0b;
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
    linear-gradient(rgba(30,45,90,.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30,45,90,.2) 1px, transparent 1px);
  background-size: 48px 48px;
}

a { color: var(--indigo); text-decoration: none; }
a:hover { text-decoration: underline; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.mono { font-family: 'DM Mono', monospace; }

/* ── Topbar ── */
.topbar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(5,8,15,.92);
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
  background: rgba(124,111,247,.12);
  border: 1px solid rgba(124,111,247,.35);
  color: var(--indigo);
  font-family: 'DM Mono', monospace;
  font-size: .7rem; font-weight: 500;
  padding: 2px 10px; border-radius: 20px;
  white-space: nowrap;
}
.artifact-nav {
  display: flex; align-items: center; gap: 6px;
}
.artifact-nav-arrow {
  color: var(--muted); font-size: .85rem;
  padding: 2px 6px; border-radius: 6px;
  transition: color .2s, background .2s;
  text-decoration: none; line-height: 1;
}
.artifact-nav-arrow:hover {
  color: var(--indigo);
  background: rgba(124,111,247,.1);
  text-decoration: none;
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
    rgba(124,111,247,.08) 0%,
    rgba(0,212,255,.04) 40%,
    transparent 70%);
  pointer-events: none;
}
.hero-eyebrow {
  display: flex; align-items: center; gap: 10px;
  color: var(--indigo); font-family: 'DM Mono', monospace;
  font-size: .8rem; margin-bottom: 20px;
  letter-spacing: .04em;
}
.eyebrow-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--indigo); flex-shrink: 0;
  animation: dot-pulse 2.4s ease-in-out infinite;
}
@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(124,111,247,.5); }
  50%       { box-shadow: 0 0 0 8px rgba(124,111,247,0); }
}
.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800; line-height: 1.08;
  margin-bottom: 18px; color: var(--text);
  letter-spacing: -.01em;
}
.accent { color: var(--indigo); }
.accent-cyan { color: var(--cyan); }
.hero-sub {
  max-width: 620px; color: var(--muted);
  font-size: 1rem; line-height: 1.8;
  margin-bottom: 48px;
}
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
  color: var(--indigo); line-height: 1.2;
}
.hstat-label {
  font-family: 'DM Mono', monospace;
  font-size: .68rem; color: var(--muted);
  margin-top: 3px; text-transform: uppercase;
  letter-spacing: .05em;
}
.hstat-div { width: 1px; background: var(--border); flex-shrink: 0; }

/* ── Sections ── */
.section { padding: 80px 0; }
.section-alt {
  background: rgba(12,18,40,.7);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.section-header { margin-bottom: 48px; }
.section-tag {
  display: inline-block;
  font-size: .75rem; color: var(--indigo);
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

/* ── Section 01: Key Terms ── */
.concepts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
@media (max-width: 720px) { .concepts-grid { grid-template-columns: 1fr; } }
.concept-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px 22px;
  opacity: 0; transform: translateY(16px);
  transition: opacity .5s ease, transform .5s ease, background .2s;
}
.concept-card.visible { opacity: 1; transform: translateY(0); }
.concept-card:nth-child(2) { transition-delay: .05s; }
.concept-card:nth-child(3) { transition-delay: .1s; }
.concept-card:nth-child(4) { transition-delay: .15s; }
.concept-card:nth-child(5) { transition-delay: .2s; }
.concept-card:nth-child(6) { transition-delay: .25s; }
.concept-card:nth-child(7) { transition-delay: .3s; }
.concept-card:nth-child(8) { transition-delay: .35s; }
.concept-card:hover { background: var(--bg-card2); }
.concept-card[data-cat="core"]        { border-left: 3px solid var(--indigo); }
.concept-card[data-cat="evaluation"]  { border-left: 3px solid var(--cyan); }
.concept-card[data-cat="technique"]   { border-left: 3px solid var(--amber); }
.concept-card[data-cat="performance"] { border-left: 3px solid var(--green); }
.concept-card[data-cat="property"]    { border-left: 3px solid var(--red); }
.concept-card[data-cat="optimization"]{ border-left: 3px solid var(--muted); }
.concept-tag {
  font-size: .68rem; letter-spacing: .12em;
  text-transform: uppercase; color: var(--muted);
  margin-bottom: 6px;
}
.concept-name {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem; font-weight: 700;
  margin-bottom: 6px;
}
.concept-short {
  font-family: 'DM Mono', monospace;
  font-size: .78rem; color: var(--indigo);
  margin-bottom: 12px; line-height: 1.5;
}
.concept-body {
  font-size: .875rem; color: var(--muted);
  line-height: 1.75;
}
.concept-body em { color: var(--text); font-style: normal; font-weight: 500; }
.abbr-section {
  margin-top: 52px; padding-top: 36px;
  border-top: 1px solid var(--border);
}
.abbr-heading {
  font-size: .8rem; color: var(--muted);
  margin-bottom: 18px; letter-spacing: .05em;
}
.abbr-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 16px;
}
@media (max-width: 768px) { .abbr-grid { grid-template-columns: repeat(2, 1fr); } }
.abbr-item {
  display: flex; align-items: baseline; gap: 10px;
  background: rgba(30,45,90,.4);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 7px 12px;
  transition: background .2s;
}
.abbr-item:hover { background: var(--bg-card2); }
.abbr-term {
  font-family: 'DM Mono', monospace;
  font-size: .8rem; font-weight: 500;
  color: var(--indigo);
  white-space: nowrap; flex-shrink: 0;
  min-width: 44px;
}
.abbr-full { font-size: .8rem; color: var(--muted); line-height: 1.4; }

/* ── Section 02: Why It Matters ── */
.why-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}
@media (max-width: 768px) { .why-grid { grid-template-columns: 1fr; } }
.why-def-card, .why-drivers-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  opacity: 0; transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease;
}
.why-def-card { border-top: 3px solid var(--indigo); }
.why-drivers-card { border-top: 3px solid var(--cyan); transition-delay: .1s; }
.why-def-card.visible, .why-drivers-card.visible { opacity: 1; transform: translateY(0); }
.card-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: .72rem; color: var(--indigo);
  letter-spacing: .1em; text-transform: uppercase;
  margin-bottom: 10px;
}
.card-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem; font-weight: 700;
  margin-bottom: 14px;
}
.card-body { color: var(--muted); font-size: .9rem; line-height: 1.75; }
.tradeoff-triangle {
  margin-top: 20px;
  display: flex; gap: 10px; flex-wrap: wrap;
}
.tradeoff-pill {
  font-family: 'DM Mono', monospace;
  font-size: .75rem;
  background: rgba(124,111,247,.1);
  border: 1px solid rgba(124,111,247,.3);
  color: var(--indigo);
  padding: 5px 14px; border-radius: 20px;
}
.tradeoff-pill.cyan {
  background: rgba(0,212,255,.08);
  border-color: rgba(0,212,255,.25);
  color: var(--cyan);
}
.driver-item {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: .88rem;
}
.driver-item:last-child { border-bottom: none; }
.driver-icon { font-size: 1.2rem; flex-shrink: 0; }
.driver-label { font-weight: 600; margin-bottom: 2px; }
.driver-desc { color: var(--muted); font-size: .83rem; }

/* ── Section 03: The Models ── */
.domain-section { margin-bottom: 52px; }
.domain-section:last-child { margin-bottom: 0; }
.domain-header {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 24px;
}
.domain-pill {
  font-family: 'DM Mono', monospace;
  font-size: .78rem; font-weight: 500;
  padding: 5px 16px; border-radius: 20px;
  letter-spacing: .06em;
}
.domain-pill.nlp {
  background: rgba(124,111,247,.12);
  border: 1px solid rgba(124,111,247,.35);
  color: var(--nlp-color);
}
.domain-pill.vision {
  background: rgba(0,212,255,.08);
  border: 1px solid rgba(0,212,255,.3);
  color: var(--vis-color);
}
.domain-pill.tabular {
  background: rgba(245,158,11,.08);
  border: 1px solid rgba(245,158,11,.3);
  color: var(--tab-color);
}
.domain-divider {
  flex: 1; height: 1px; background: var(--border);
}
.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
}
.model-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  opacity: 0; transform: translateY(16px);
  transition: opacity .5s ease, transform .5s ease, background .2s;
}
.model-card.visible { opacity: 1; transform: translateY(0); }
.model-card:hover { background: var(--bg-card2); }
.model-card.nlp  { border-top: 2px solid var(--nlp-color); }
.model-card.vision { border-top: 2px solid var(--vis-color); }
.model-card.tabular { border-top: 2px solid var(--tab-color); }
.model-card-header {
  display: flex; justify-content: space-between;
  align-items: flex-start; margin-bottom: 10px;
}
.model-name {
  font-family: 'Syne', sans-serif;
  font-size: 1.05rem; font-weight: 700;
}
.model-org {
  font-family: 'DM Mono', monospace;
  font-size: .68rem; color: var(--muted);
  background: rgba(30,45,90,.6);
  border: 1px solid var(--border);
  padding: 2px 8px; border-radius: 4px;
  white-space: nowrap;
}
.model-params {
  font-family: 'DM Mono', monospace;
  font-size: .8rem; color: var(--muted);
  margin-bottom: 14px;
}
.model-params span { color: var(--text); font-weight: 500; }
.model-pills {
  display: flex; flex-wrap: wrap; gap: 6px;
}
.mpill {
  font-family: 'DM Mono', monospace;
  font-size: .68rem;
  padding: 3px 10px; border-radius: 20px;
  border: 1px solid transparent;
}
.mpill.size-sm { background: rgba(34,197,94,.08); border-color: rgba(34,197,94,.25); color: var(--green); }
.mpill.size-md { background: rgba(245,158,11,.08); border-color: rgba(245,158,11,.25); color: var(--amber); }
.mpill.size-lg { background: rgba(239,68,68,.08); border-color: rgba(239,68,68,.25); color: var(--red); }
.mpill.speed-fast   { background: rgba(34,197,94,.08); border-color: rgba(34,197,94,.25); color: var(--green); }
.mpill.speed-medium { background: rgba(245,158,11,.08); border-color: rgba(245,158,11,.25); color: var(--amber); }
.mpill.speed-slow   { background: rgba(239,68,68,.08); border-color: rgba(239,68,68,.25); color: var(--red); }
.mpill.acc-high   { background: rgba(34,197,94,.08); border-color: rgba(34,197,94,.25); color: var(--green); }
.mpill.acc-medium { background: rgba(245,158,11,.08); border-color: rgba(245,158,11,.25); color: var(--amber); }

/* ── Section 04: Decision Matrix ── */
.matrix-controls {
  display: flex; align-items: center; gap: 10px;
  flex-wrap: wrap; margin-bottom: 24px;
}
.filter-label {
  font-family: 'DM Mono', monospace;
  font-size: .75rem; color: var(--muted);
  margin-right: 4px;
}
.filter-btn {
  font-family: 'DM Mono', monospace;
  font-size: .75rem;
  padding: 6px 16px; border-radius: 20px;
  border: 1px solid var(--border);
  background: transparent; color: var(--muted);
  cursor: pointer;
  transition: all .2s;
}
.filter-btn:hover { border-color: var(--indigo); color: var(--indigo); }
.filter-btn.active {
  background: rgba(124,111,247,.15);
  border-color: var(--indigo);
  color: var(--indigo);
}
.filter-btn.nlp.active  { background: rgba(124,111,247,.15); border-color: var(--nlp-color); color: var(--nlp-color); }
.filter-btn.vision.active { background: rgba(0,212,255,.1); border-color: var(--vis-color); color: var(--vis-color); }
.filter-btn.tabular.active { background: rgba(245,158,11,.1); border-color: var(--tab-color); color: var(--tab-color); }

.matrix-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.matrix-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .875rem;
}
.matrix-table th {
  font-family: 'Syne', sans-serif;
  font-weight: 600; font-size: .75rem;
  text-transform: uppercase; letter-spacing: .06em;
  padding: 14px 16px;
  background: var(--bg-card2);
  border-bottom: 2px solid var(--border);
  text-align: left; color: var(--muted);
  cursor: pointer; user-select: none;
  white-space: nowrap;
  transition: color .2s;
}
.matrix-table th:hover { color: var(--text); }
.matrix-table th.sorted { color: var(--indigo); }
.sort-arrow { margin-left: 4px; font-size: .7rem; opacity: .6; }
.matrix-table td {
  padding: 13px 16px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
  opacity: 0;
  transition: opacity .4s ease;
}
.matrix-table td.visible { opacity: 1; }
.matrix-table tr:last-child td { border-bottom: none; }
.matrix-table tr:nth-child(even) td { background: rgba(12,18,40,.4); }
.matrix-table tr.hidden { display: none; }

.model-cell { font-weight: 600; white-space: nowrap; }
.model-dot {
  display: inline-block;
  width: 8px; height: 8px; border-radius: 50%;
  margin-right: 8px; flex-shrink: 0;
  vertical-align: middle;
}
.model-dot.nlp    { background: var(--nlp-color); }
.model-dot.vision { background: var(--vis-color); }
.model-dot.tabular{ background: var(--tab-color); }

.domain-badge {
  font-family: 'DM Mono', monospace;
  font-size: .68rem;
  padding: 2px 9px; border-radius: 20px;
  white-space: nowrap;
}
.domain-badge.nlp    { background: rgba(124,111,247,.12); border: 1px solid rgba(124,111,247,.3); color: var(--nlp-color); }
.domain-badge.vision { background: rgba(0,212,255,.08);   border: 1px solid rgba(0,212,255,.25);  color: var(--vis-color); }
.domain-badge.tabular{ background: rgba(245,158,11,.08);  border: 1px solid rgba(245,158,11,.25); color: var(--tab-color); }

.score-dots { display: flex; gap: 4px; align-items: center; }
.score-dot {
  width: 10px; height: 10px; border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--border);
}
.score-dot.filled.s5 { background: var(--green);  border-color: var(--green); }
.score-dot.filled.s4 { background: var(--green);  border-color: var(--green); }
.score-dot.filled.s3 { background: var(--amber);  border-color: var(--amber); }
.score-dot.filled.s2 { background: var(--red);    border-color: var(--red); }
.score-dot.filled.s1 { background: var(--red);    border-color: var(--red); }

.speed-badge {
  font-family: 'DM Mono', monospace;
  font-size: .72rem; padding: 3px 10px; border-radius: 20px;
}
.speed-badge.fast   { background: rgba(34,197,94,.1);  border: 1px solid rgba(34,197,94,.3);  color: var(--green); }
.speed-badge.medium { background: rgba(245,158,11,.1); border: 1px solid rgba(245,158,11,.3); color: var(--amber); }
.speed-badge.slow   { background: rgba(239,68,68,.1);  border: 1px solid rgba(239,68,68,.3);  color: var(--red); }

.hw-badge {
  font-family: 'DM Mono', monospace;
  font-size: .72rem; padding: 3px 10px; border-radius: 20px;
  background: rgba(107,122,184,.1);
  border: 1px solid rgba(107,122,184,.25);
  color: var(--muted);
}
.best-for-cell { color: var(--muted); font-size: .83rem; max-width: 220px; }

/* ── Section 05: Trade-off Analysis ── */
.analysis-domain { margin-bottom: 56px; }
.analysis-domain:last-child { margin-bottom: 0; }
.analysis-domain-header {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 24px;
}
.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.analysis-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  opacity: 0; transform: translateY(16px);
  transition: opacity .5s ease, transform .5s ease, background .2s;
}
.analysis-card.visible { opacity: 1; transform: translateY(0); }
.analysis-card:hover { background: var(--bg-card2); }
.analysis-model-name {
  font-family: 'Syne', sans-serif;
  font-size: 1rem; font-weight: 700;
  margin-bottom: 16px;
}
.sw-list {
  list-style: none;
  display: flex; flex-direction: column; gap: 7px;
  margin-bottom: 14px;
}
.sw-list li {
  display: flex; align-items: flex-start; gap: 9px;
  font-size: .855rem; color: var(--muted);
}
.sw-dot {
  width: 7px; height: 7px; border-radius: 50%;
  flex-shrink: 0; margin-top: 6px;
}
.sw-dot.strength { background: var(--green); }
.sw-dot.weakness { background: var(--red); }
.sw-list li strong { color: var(--text); font-weight: 500; }
.tradeoff-summary {
  margin-top: 14px; padding-top: 14px;
  border-top: 1px solid var(--border);
  font-family: 'DM Mono', monospace;
  font-size: .78rem; color: var(--muted);
  line-height: 1.6;
}

/* ── Section 06: Recommendations ── */
.reco-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
}
.reco-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  opacity: 0; transform: translateY(16px);
  transition: opacity .5s ease, transform .5s ease, background .2s;
}
.reco-card.visible { opacity: 1; transform: translateY(0); }
.reco-card:hover { background: var(--bg-card2); }
.reco-card:nth-child(2) { transition-delay: .06s; }
.reco-card:nth-child(3) { transition-delay: .12s; }
.reco-card:nth-child(4) { transition-delay: .18s; }
.reco-card:nth-child(5) { transition-delay: .24s; }
.reco-header {
  display: flex; justify-content: space-between;
  align-items: flex-start; gap: 10px;
  margin-bottom: 12px;
}
.reco-scenario {
  font-family: 'Syne', sans-serif;
  font-size: .95rem; font-weight: 700;
  line-height: 1.4;
}
.reco-model {
  font-family: 'DM Mono', monospace;
  font-size: .8rem;
  background: rgba(124,111,247,.12);
  border: 1px solid rgba(124,111,247,.3);
  color: var(--indigo);
  padding: 3px 12px; border-radius: 20px;
  white-space: nowrap;
}
.reco-rationale {
  font-size: .875rem; color: var(--muted);
  line-height: 1.7;
}

/* ── Section 07: Further Reading ── */
.section-reading {
  background: rgba(12,18,40,.7);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.reading-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 48px;
}
@media (max-width: 768px) { .reading-grid { grid-template-columns: 1fr; } }
.reading-group {
  opacity: 0; transform: translateY(14px);
  transition: opacity .5s ease, transform .5s ease;
}
.reading-group.visible { opacity: 1; transform: translateY(0); }
.reading-group:nth-child(2) { transition-delay: .08s; }
.reading-group:nth-child(3) { transition-delay: .16s; }
.reading-group:nth-child(4) { transition-delay: .24s; }
.reading-group-title {
  font-family: 'Syne', sans-serif;
  font-size: .88rem; font-weight: 700;
  color: var(--text); margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--indigo);
  letter-spacing: .01em;
}
.reading-list {
  list-style: none;
  display: flex; flex-direction: column; gap: 18px;
}
.reading-list li { display: flex; flex-direction: column; gap: 4px; }
.reading-list a {
  font-size: .9rem; font-weight: 500;
  color: var(--indigo); line-height: 1.45;
  transition: color .2s;
}
.reading-list a:hover { color: var(--text); text-decoration: none; }
.reading-desc {
  display: block; font-size: .83rem;
  color: var(--muted); line-height: 1.68;
}

/* ── Section 08: Reflection ── */
.reflection-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-top: 3px solid var(--indigo);
  border-radius: var(--radius);
  padding: 40px;
  max-width: 800px;
  opacity: 0; transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease;
}
.reflection-card.visible { opacity: 1; transform: translateY(0); }
.reflection-card p {
  color: var(--muted); font-size: .95rem;
  line-height: 1.85; margin-bottom: 20px;
}
.reflection-card p:last-child { margin-bottom: 0; }
.reflection-card strong { color: var(--text); }

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

/* ── Mobile ── */
@media (max-width: 640px) {
  .hero-stats { width: 100%; }
  .hstat { flex: 1; padding: 14px 12px; }
  .topbar-title { display: none; }
  .matrix-table { font-size: .8rem; }
  .matrix-table td, .matrix-table th { padding: 10px 10px; }
}
```

- [ ] **Step 2: Verify file created**

```bash
ls artifacts/model-selection/
```
Expected: `style.css`

- [ ] **Step 3: Commit**

```bash
git add artifacts/model-selection/style.css
git commit -m "feat: add model-selection artifact styles (artifact 5)"
```

---

## Task 2: Scaffold index.html — head, topbar, hero

**Files:**
- Create: `artifacts/model-selection/index.html`

- [ ] **Step 1: Create index.html with head + topbar + hero**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pre-trained Model Selection &amp; Trade-offs | Atharva Deshpande</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ── TOPBAR ── -->
  <nav class="topbar">
    <a href="../../index.html#artifacts" class="back-link">&#8592; Portfolio</a>
    <span class="topbar-title">Pre-trained Model Selection &amp; Trade-offs</span>
    <div class="artifact-nav">
      <a href="../xai/index.html" class="artifact-nav-arrow" title="Artifact 4: Explainable AI">&#8592;</a>
      <span class="topbar-badge">Artifact 5</span>
    </div>
  </nav>

  <!-- ── HERO ── -->
  <header class="hero">
    <div class="container">
      <div class="hero-eyebrow">
        <span class="eyebrow-dot" aria-hidden="true"></span>
        <span class="mono">Generative AI &bull; Model Selection &amp; Trade-offs</span>
      </div>
      <h1 class="hero-title">Choosing the<br /><span class="accent">Right Model</span></h1>
      <p class="hero-sub">Model selection is never one-size-fits-all. Navigating size, speed, accuracy, and explainability trade-offs across NLP, Computer Vision, and Tabular domains requires a structured framework — not guesswork.</p>

      <div class="hero-stats" role="list" aria-label="Key statistics">
        <div class="hstat" role="listitem">
          <div class="hstat-val">3</div>
          <div class="hstat-label">Domains</div>
        </div>
        <div class="hstat-div" aria-hidden="true"></div>
        <div class="hstat" role="listitem">
          <div class="hstat-val">8</div>
          <div class="hstat-label">Models Compared</div>
        </div>
        <div class="hstat-div" aria-hidden="true"></div>
        <div class="hstat" role="listitem">
          <div class="hstat-val">6</div>
          <div class="hstat-label">Selection Criteria</div>
        </div>
        <div class="hstat-div" aria-hidden="true"></div>
        <div class="hstat" role="listitem">
          <div class="hstat-val">~1.5T</div>
          <div class="hstat-label">Parameters Spanned</div>
        </div>
      </div>
    </div>
  </header>

  <!-- sections will be added in subsequent tasks -->

  <script>
  // Scroll animations — shared IntersectionObserver
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); } });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.concept-card, .why-def-card, .why-drivers-card, .model-card, ' +
    '.analysis-card, .reco-card, .reading-group, .reflection-card'
  ).forEach(el => fadeObs.observe(el));

  // Matrix row animations
  const tableObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('td').forEach(td => td.classList.add('visible')); tableObs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.matrix-table tbody tr').forEach(row => tableObs.observe(row));

  // Filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const domain = btn.dataset.domain;
      document.querySelectorAll('.matrix-table tbody tr').forEach(row => {
        row.classList.toggle('hidden', domain !== 'all' && row.dataset.domain !== domain);
      });
    });
  });

  // Sort
  let sortCol = -1, sortAsc = true;
  document.querySelectorAll('.matrix-table th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      const col = parseInt(th.dataset.col);
      if (sortCol === col) sortAsc = !sortAsc; else { sortCol = col; sortAsc = true; }
      document.querySelectorAll('.matrix-table th').forEach(h => { h.classList.remove('sorted'); const arr = h.querySelector('.sort-arrow'); if (arr) arr.textContent = '↕'; });
      th.classList.add('sorted');
      const arr = th.querySelector('.sort-arrow'); if (arr) arr.textContent = sortAsc ? '↑' : '↓';
      const tbody = document.querySelector('.matrix-table tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));
      rows.sort((a, b) => {
        const aVal = a.cells[col]?.dataset.val ?? a.cells[col]?.textContent.trim() ?? '';
        const bVal = b.cells[col]?.dataset.val ?? b.cells[col]?.textContent.trim() ?? '';
        const aNum = parseFloat(aVal); const bNum = parseFloat(bVal);
        if (!isNaN(aNum) && !isNaN(bNum)) return sortAsc ? aNum - bNum : bNum - aNum;
        return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      });
      rows.forEach(r => tbody.appendChild(r));
    });
  });
  </script>

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify hero renders with indigo pulse dot, stats bar, and topbar**

Open: `artifacts/model-selection/index.html` in browser

- [ ] **Step 3: Commit**

```bash
git add artifacts/model-selection/index.html
git commit -m "feat: scaffold model-selection artifact with hero and JS"
```

---

## Task 3: Section 01 — Key Terms

**Files:**
- Modify: `artifacts/model-selection/index.html` — add section after `</header>`

- [ ] **Step 1: Insert Section 01 HTML after the closing `</header>` tag and before the `<script>` tag**

```html
  <!-- ── SECTION 01: KEY TERMS ── -->
  <section class="section section-alt" aria-labelledby="terms-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">01 — Key Terms &amp; Concepts</span>
        <h2 class="section-title" id="terms-heading">Jargon Explained</h2>
        <p class="section-desc">Eight foundational concepts used throughout this artifact — from model architecture to selection criteria and optimization techniques.</p>
      </div>

      <div class="concepts-grid">

        <div class="concept-card" data-cat="core">
          <div class="concept-tag">Core Concept</div>
          <div class="concept-name">Parameters</div>
          <div class="concept-short">Learnable model weights</div>
          <p class="concept-body">The individual numerical values a model learns during training — weights and biases inside neurons. Parameter count is the primary proxy for model size: <em>GPT-4o</em> has ~200 billion; <em>MobileNetV3</em> has 5.4 million. More parameters generally means more capacity but higher memory and compute costs.</p>
        </div>

        <div class="concept-card" data-cat="core">
          <div class="concept-tag">Core Concept</div>
          <div class="concept-name">Inference</div>
          <div class="concept-short">Running a trained model on new data</div>
          <p class="concept-body">The act of feeding new, unseen input through a trained model to produce a prediction or output. Inference speed (latency) is critical for production applications — a model that takes 10 seconds to respond is unusable in real-time scenarios regardless of its accuracy.</p>
        </div>

        <div class="concept-card" data-cat="evaluation">
          <div class="concept-tag">Evaluation</div>
          <div class="concept-name">Benchmark</div>
          <div class="concept-short">Standardized performance test</div>
          <p class="concept-body">A publicly agreed-upon dataset and metric for comparing model performance. <em>ImageNet Top-1 accuracy</em> benchmarks vision models; <em>MMLU</em> (Massive Multitask Language Understanding) benchmarks language models across 57 subjects. Benchmarks enable apples-to-apples comparisons across organizations.</p>
        </div>

        <div class="concept-card" data-cat="technique">
          <div class="concept-tag">Technique</div>
          <div class="concept-name">Fine-tuning</div>
          <div class="concept-short">Adapting a pre-trained model to a new task</div>
          <p class="concept-body">Starting with a model already trained on broad data (e.g., <em>BERT</em> on Wikipedia) and continuing training on a smaller, task-specific dataset. Fine-tuning dramatically reduces the data and compute needed compared to training from scratch — it's how most production NLP systems are built.</p>
        </div>

        <div class="concept-card" data-cat="performance">
          <div class="concept-tag">Performance</div>
          <div class="concept-name">Latency</div>
          <div class="concept-short">Time from input to output</div>
          <p class="concept-body">The delay between submitting a request and receiving a response. For real-time applications — chatbots, mobile apps, medical devices — latency is often more important than raw accuracy. A <em>Fast</em> model that answers in 50ms may be preferred over a <em>Slow</em> model that answers in 3 seconds, even if the latter is more accurate.</p>
        </div>

        <div class="concept-card" data-cat="property">
          <div class="concept-tag">Property</div>
          <div class="concept-name">Explainability</div>
          <div class="concept-short">How understandable a model's decisions are</div>
          <p class="concept-body">The degree to which a model's predictions can be traced back to interpretable reasons. Tree-based models like <em>XGBoost</em> are inherently explainable via feature importance scores. Deep neural networks are black boxes — techniques like <em>SHAP</em> are needed to approximate explanations post-hoc. Regulated domains (finance, healthcare) often mandate explainability.</p>
        </div>

        <div class="concept-card" data-cat="technique">
          <div class="concept-tag">Technique</div>
          <div class="concept-name">Transfer Learning</div>
          <div class="concept-short">Reusing knowledge across tasks</div>
          <p class="concept-body">Training a model on one task (e.g., classifying 1.2M ImageNet images) and then reusing its learned representations for a different but related task (e.g., detecting tumors in medical scans). Pre-trained models are the embodiment of transfer learning — they encode general knowledge that can be efficiently specialized.</p>
        </div>

        <div class="concept-card" data-cat="optimization">
          <div class="concept-tag">Optimization</div>
          <div class="concept-name">Quantization</div>
          <div class="concept-short">Shrinking model precision to reduce size &amp; speed</div>
          <p class="concept-body">Reducing the numerical precision of model weights — from 32-bit floating point (FP32) to 8-bit integers (INT8) or lower. Quantization can shrink model size by 4× and double inference speed with minimal accuracy loss. It's a key technique for deploying large models on edge devices or in cost-sensitive environments.</p>
        </div>

      </div>

      <div class="abbr-section">
        <div class="abbr-heading mono">ABBREVIATIONS USED IN THIS ARTIFACT</div>
        <div class="abbr-grid">
          <div class="abbr-item"><span class="abbr-term">NLP</span><span class="abbr-full">Natural Language Processing</span></div>
          <div class="abbr-item"><span class="abbr-term">CV</span><span class="abbr-full">Computer Vision</span></div>
          <div class="abbr-item"><span class="abbr-term">LLM</span><span class="abbr-full">Large Language Model</span></div>
          <div class="abbr-item"><span class="abbr-term">BERT</span><span class="abbr-full">Bidirectional Encoder Representations from Transformers</span></div>
          <div class="abbr-item"><span class="abbr-term">ViT</span><span class="abbr-full">Vision Transformer</span></div>
          <div class="abbr-item"><span class="abbr-term">XGB</span><span class="abbr-full">XGBoost (Extreme Gradient Boosting)</span></div>
          <div class="abbr-item"><span class="abbr-term">LGBM</span><span class="abbr-full">LightGBM (Light Gradient Boosting Machine)</span></div>
          <div class="abbr-item"><span class="abbr-term">Top-1</span><span class="abbr-full">ImageNet Top-1 Accuracy benchmark</span></div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/model-selection/index.html
git commit -m "feat: add section 01 key terms to model-selection artifact"
```

---

## Task 4: Section 02 — Why It Matters

**Files:**
- Modify: `artifacts/model-selection/index.html` — add section after section 01

- [ ] **Step 1: Insert Section 02 HTML after the closing `</section>` of section 01**

```html
  <!-- ── SECTION 02: WHY IT MATTERS ── -->
  <section class="section" aria-labelledby="why-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">02 — Why It Matters</span>
        <h2 class="section-title" id="why-heading">The Model Selection Problem</h2>
        <p class="section-desc">Pre-trained models span orders of magnitude in size, speed, and accuracy. Choosing wrong costs time, money, or trust.</p>
      </div>

      <div class="why-grid">
        <div class="why-def-card">
          <div class="card-eyebrow">Definition</div>
          <div class="card-title">What is Model Selection?</div>
          <p class="card-body">Model selection is the process of identifying the pre-trained model most suitable for a given task — balancing performance, computational cost, deployment constraints, and interpretability requirements. Pre-trained models encode general knowledge learned from massive datasets, making them the practical starting point for nearly all modern AI applications.</p>
          <p class="card-body" style="margin-top:14px;">No single model wins on every criterion. GPT-4o leads on NLP accuracy but requires cloud infrastructure and costs dollars per thousand tokens. XGBoost is fast, explainable, and CPU-friendly — but can't understand a sentence. The right choice depends on your <em>constraints</em>, not just capabilities.</p>
          <div class="tradeoff-triangle" style="margin-top:18px;">
            <span class="tradeoff-pill">Size / Parameters</span>
            <span class="tradeoff-pill">Accuracy / Benchmark</span>
            <span class="tradeoff-pill">Inference Speed</span>
            <span class="tradeoff-pill cyan">Explainability</span>
          </div>
        </div>
        <div class="why-drivers-card">
          <div class="card-eyebrow">Key Drivers</div>
          <div class="card-title">Why Selection Is Hard</div>
          <div class="driver-item">
            <span class="driver-icon">💰</span>
            <div>
              <div class="driver-label">Cost</div>
              <div class="driver-desc">Larger models incur higher compute bills — GPT-4o API costs ~10× more than BERT-base per inference</div>
            </div>
          </div>
          <div class="driver-item">
            <span class="driver-icon">⚡</span>
            <div>
              <div class="driver-label">Latency</div>
              <div class="driver-desc">Edge and mobile apps require sub-100ms responses — MobileNetV3 runs in ~15ms; ViT-B/16 takes ~80ms</div>
            </div>
          </div>
          <div class="driver-item">
            <span class="driver-icon">🎯</span>
            <div>
              <div class="driver-label">Accuracy</div>
              <div class="driver-desc">High-stakes tasks — medical diagnosis, fraud detection — demand benchmark-leading performance</div>
            </div>
          </div>
          <div class="driver-item">
            <span class="driver-icon">🔍</span>
            <div>
              <div class="driver-label">Explainability</div>
              <div class="driver-desc">Regulated industries (finance, healthcare, hiring) require decisions that can be audited and explained</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/model-selection/index.html
git commit -m "feat: add section 02 why it matters to model-selection artifact"
```

---

## Task 5: Section 03 — The Models

**Files:**
- Modify: `artifacts/model-selection/index.html` — add section after section 02

- [ ] **Step 1: Insert Section 03 HTML after the closing `</section>` of section 02**

```html
  <!-- ── SECTION 03: THE MODELS ── -->
  <section class="section section-alt" aria-labelledby="models-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">03 — The Models</span>
        <h2 class="section-title" id="models-heading">What We're Comparing</h2>
        <p class="section-desc">Eight pre-trained models spanning three domains — chosen to represent the spectrum from lightweight edge models to frontier-scale LLMs.</p>
      </div>

      <!-- NLP / GenAI -->
      <div class="domain-section">
        <div class="domain-header">
          <span class="domain-pill nlp">NLP / GenAI</span>
          <div class="domain-divider" aria-hidden="true"></div>
        </div>
        <div class="models-grid">
          <div class="model-card nlp">
            <div class="model-card-header">
              <div class="model-name">GPT-4o</div>
              <div class="model-org">OpenAI</div>
            </div>
            <div class="model-params">Parameters: <span>~200B (est.)</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">OpenAI's flagship multimodal model. Processes text, images, and audio. Sets the benchmark for general-purpose language tasks with frontier-level reasoning and instruction following.</p>
            <div class="model-pills">
              <span class="mpill size-lg">Large</span>
              <span class="mpill speed-slow">Slow</span>
              <span class="mpill acc-high">High Accuracy</span>
            </div>
          </div>
          <div class="model-card nlp">
            <div class="model-card-header">
              <div class="model-name">BERT-base</div>
              <div class="model-org">Google</div>
            </div>
            <div class="model-params">Parameters: <span>110M</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">Encoder-only transformer trained on masked language modeling. Excels at classification, NER, and question answering. Fast and CPU-friendly — the go-to for constrained NLP deployments.</p>
            <div class="model-pills">
              <span class="mpill size-sm">Small</span>
              <span class="mpill speed-fast">Fast</span>
              <span class="mpill acc-medium">Moderate Accuracy</span>
            </div>
          </div>
          <div class="model-card nlp">
            <div class="model-card-header">
              <div class="model-name">LLaMA 3 8B</div>
              <div class="model-org">Meta</div>
            </div>
            <div class="model-params">Parameters: <span>8B</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">Meta's open-weight instruction-tuned model. Deployable on-premise — critical for privacy-sensitive applications. Strong reasoning for its size, quantizable to 4-bit for consumer GPU deployment.</p>
            <div class="model-pills">
              <span class="mpill size-md">Medium</span>
              <span class="mpill speed-medium">Medium</span>
              <span class="mpill acc-high">High Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Computer Vision -->
      <div class="domain-section">
        <div class="domain-header">
          <span class="domain-pill vision">Computer Vision</span>
          <div class="domain-divider" aria-hidden="true"></div>
        </div>
        <div class="models-grid">
          <div class="model-card vision">
            <div class="model-card-header">
              <div class="model-name">EfficientNet-B4</div>
              <div class="model-org">Google</div>
            </div>
            <div class="model-params">Parameters: <span>19M</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">Compound-scaled CNN achieving near-SOTA ImageNet accuracy (83.0% Top-1) at a fraction of the cost of larger models. The best accuracy-per-parameter ratio in its class.</p>
            <div class="model-pills">
              <span class="mpill size-sm">Small</span>
              <span class="mpill speed-medium">Medium</span>
              <span class="mpill acc-high">High Accuracy</span>
            </div>
          </div>
          <div class="model-card vision">
            <div class="model-card-header">
              <div class="model-name">MobileNetV3</div>
              <div class="model-org">Google</div>
            </div>
            <div class="model-params">Parameters: <span>5.4M</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">Optimized for mobile and edge inference using depthwise-separable convolutions and Neural Architecture Search. Achieves 75.2% Top-1 at ~15ms on CPU — a staple of on-device AI.</p>
            <div class="model-pills">
              <span class="mpill size-sm">Tiny</span>
              <span class="mpill speed-fast">Fast</span>
              <span class="mpill acc-medium">Moderate Accuracy</span>
            </div>
          </div>
          <div class="model-card vision">
            <div class="model-card-header">
              <div class="model-name">ViT-B/16</div>
              <div class="model-org">Google</div>
            </div>
            <div class="model-params">Parameters: <span>86M</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">Vision Transformer — applies the self-attention mechanism to image patches. Achieves 81.8% Top-1 on ImageNet and scales exceptionally well with more data. Represents the shift from CNNs to transformers in vision.</p>
            <div class="model-pills">
              <span class="mpill size-md">Medium</span>
              <span class="mpill speed-medium">Medium</span>
              <span class="mpill acc-high">High Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabular -->
      <div class="domain-section">
        <div class="domain-header">
          <span class="domain-pill tabular">Tabular Data</span>
          <div class="domain-divider" aria-hidden="true"></div>
        </div>
        <div class="models-grid">
          <div class="model-card tabular">
            <div class="model-card-header">
              <div class="model-name">XGBoost</div>
              <div class="model-org">DMLC / Chen</div>
            </div>
            <div class="model-params">Parameters: <span>Tree ensemble</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">Gradient-boosted decision tree framework. Won more Kaggle competitions than any other algorithm for structured data. Natively supports SHAP values for feature-level explainability — the gold standard for regulated ML.</p>
            <div class="model-pills">
              <span class="mpill size-sm">Lightweight</span>
              <span class="mpill speed-fast">Fast</span>
              <span class="mpill acc-high">High Accuracy</span>
            </div>
          </div>
          <div class="model-card tabular">
            <div class="model-card-header">
              <div class="model-name">LightGBM</div>
              <div class="model-org">Microsoft</div>
            </div>
            <div class="model-params">Parameters: <span>Tree ensemble</span></div>
            <p style="font-size:.855rem;color:var(--muted);margin-bottom:14px;">Gradient boosting with leaf-wise tree growth and histogram-based binning — up to 10× faster training than XGBoost on large datasets. Near-identical accuracy, significantly lower memory and training time at scale.</p>
            <div class="model-pills">
              <span class="mpill size-sm">Lightweight</span>
              <span class="mpill speed-fast">Very Fast</span>
              <span class="mpill acc-high">High Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/model-selection/index.html
git commit -m "feat: add section 03 models overview to model-selection artifact"
```

---

## Task 6: Section 04 — Decision Matrix HTML

**Files:**
- Modify: `artifacts/model-selection/index.html` — add section after section 03

- [ ] **Step 1: Insert Section 04 HTML after the closing `</section>` of section 03**

```html
  <!-- ── SECTION 04: DECISION MATRIX ── -->
  <section class="section" aria-labelledby="matrix-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">04 — Decision Matrix</span>
        <h2 class="section-title" id="matrix-heading">Interactive Comparison</h2>
        <p class="section-desc">Filter by domain and click any column header to sort. Scores are 1–5 (higher = better). Explainability reflects inherent interpretability, not post-hoc approximations.</p>
      </div>

      <div class="matrix-controls" role="group" aria-label="Filter by domain">
        <span class="filter-label">Filter:</span>
        <button class="filter-btn active" data-domain="all">All Models</button>
        <button class="filter-btn nlp" data-domain="nlp">NLP / GenAI</button>
        <button class="filter-btn vision" data-domain="vision">Computer Vision</button>
        <button class="filter-btn tabular" data-domain="tabular">Tabular</button>
      </div>

      <div class="matrix-wrap" role="region" aria-label="Model comparison matrix" tabindex="0">
        <table class="matrix-table" role="table">
          <thead>
            <tr>
              <th data-col="0">Model <span class="sort-arrow">↕</span></th>
              <th data-col="1">Domain <span class="sort-arrow">↕</span></th>
              <th data-col="2">Size (Params) <span class="sort-arrow">↕</span></th>
              <th data-col="3">Accuracy <span class="sort-arrow">↕</span></th>
              <th data-col="4">Speed <span class="sort-arrow">↕</span></th>
              <th data-col="5">Explainability <span class="sort-arrow">↕</span></th>
              <th data-col="6">Hardware <span class="sort-arrow">↕</span></th>
              <th data-col="7">Best For</th>
            </tr>
          </thead>
          <tbody>

            <tr data-domain="nlp">
              <td><span class="model-dot nlp"></span><span class="model-cell">GPT-4o</span></td>
              <td><span class="domain-badge nlp">NLP / GenAI</span></td>
              <td data-val="200000">~200B</td>
              <td data-val="5">
                <div class="score-dots" aria-label="5 out of 5">
                  <span class="score-dot filled s5"></span><span class="score-dot filled s5"></span><span class="score-dot filled s5"></span><span class="score-dot filled s5"></span><span class="score-dot filled s5"></span>
                </div>
              </td>
              <td data-val="1"><span class="speed-badge slow">Slow</span></td>
              <td data-val="1">
                <div class="score-dots" aria-label="1 out of 5">
                  <span class="score-dot filled s1"></span><span class="score-dot"></span><span class="score-dot"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td><span class="hw-badge">Cloud</span></td>
              <td class="best-for-cell">Complex reasoning, multimodal tasks, content generation</td>
            </tr>

            <tr data-domain="nlp">
              <td><span class="model-dot nlp"></span><span class="model-cell">BERT-base</span></td>
              <td><span class="domain-badge nlp">NLP / GenAI</span></td>
              <td data-val="110">110M</td>
              <td data-val="3">
                <div class="score-dots" aria-label="3 out of 5">
                  <span class="score-dot filled s3"></span><span class="score-dot filled s3"></span><span class="score-dot filled s3"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td data-val="4"><span class="speed-badge fast">Fast</span></td>
              <td data-val="2">
                <div class="score-dots" aria-label="2 out of 5">
                  <span class="score-dot filled s2"></span><span class="score-dot filled s2"></span><span class="score-dot"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td><span class="hw-badge">CPU / GPU</span></td>
              <td class="best-for-cell">Text classification, NER, extractive QA at low cost</td>
            </tr>

            <tr data-domain="nlp">
              <td><span class="model-dot nlp"></span><span class="model-cell">LLaMA 3 8B</span></td>
              <td><span class="domain-badge nlp">NLP / GenAI</span></td>
              <td data-val="8000">8B</td>
              <td data-val="4">
                <div class="score-dots" aria-label="4 out of 5">
                  <span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot"></span>
                </div>
              </td>
              <td data-val="3"><span class="speed-badge medium">Medium</span></td>
              <td data-val="2">
                <div class="score-dots" aria-label="2 out of 5">
                  <span class="score-dot filled s2"></span><span class="score-dot filled s2"></span><span class="score-dot"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td><span class="hw-badge">GPU</span></td>
              <td class="best-for-cell">On-premise LLM, privacy-sensitive text generation</td>
            </tr>

            <tr data-domain="vision">
              <td><span class="model-dot vision"></span><span class="model-cell">EfficientNet-B4</span></td>
              <td><span class="domain-badge vision">Vision</span></td>
              <td data-val="19">19M</td>
              <td data-val="4">
                <div class="score-dots" aria-label="4 out of 5">
                  <span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot"></span>
                </div>
              </td>
              <td data-val="3"><span class="speed-badge medium">Medium</span></td>
              <td data-val="2">
                <div class="score-dots" aria-label="2 out of 5">
                  <span class="score-dot filled s2"></span><span class="score-dot filled s2"></span><span class="score-dot"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td><span class="hw-badge">GPU</span></td>
              <td class="best-for-cell">High-accuracy image classification with efficiency focus</td>
            </tr>

            <tr data-domain="vision">
              <td><span class="model-dot vision"></span><span class="model-cell">MobileNetV3</span></td>
              <td><span class="domain-badge vision">Vision</span></td>
              <td data-val="5">5.4M</td>
              <td data-val="3">
                <div class="score-dots" aria-label="3 out of 5">
                  <span class="score-dot filled s3"></span><span class="score-dot filled s3"></span><span class="score-dot filled s3"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td data-val="5"><span class="speed-badge fast">Fast</span></td>
              <td data-val="2">
                <div class="score-dots" aria-label="2 out of 5">
                  <span class="score-dot filled s2"></span><span class="score-dot filled s2"></span><span class="score-dot"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td><span class="hw-badge">CPU</span></td>
              <td class="best-for-cell">Real-time mobile &amp; edge image classification</td>
            </tr>

            <tr data-domain="vision">
              <td><span class="model-dot vision"></span><span class="model-cell">ViT-B/16</span></td>
              <td><span class="domain-badge vision">Vision</span></td>
              <td data-val="86">86M</td>
              <td data-val="4">
                <div class="score-dots" aria-label="4 out of 5">
                  <span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot"></span>
                </div>
              </td>
              <td data-val="3"><span class="speed-badge medium">Medium</span></td>
              <td data-val="2">
                <div class="score-dots" aria-label="2 out of 5">
                  <span class="score-dot filled s2"></span><span class="score-dot filled s2"></span><span class="score-dot"></span><span class="score-dot"></span><span class="score-dot"></span>
                </div>
              </td>
              <td><span class="hw-badge">GPU</span></td>
              <td class="best-for-cell">Research-grade classification, scales well with data</td>
            </tr>

            <tr data-domain="tabular">
              <td><span class="model-dot tabular"></span><span class="model-cell">XGBoost</span></td>
              <td><span class="domain-badge tabular">Tabular</span></td>
              <td data-val="0">Tree-based</td>
              <td data-val="4">
                <div class="score-dots" aria-label="4 out of 5">
                  <span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot"></span>
                </div>
              </td>
              <td data-val="4"><span class="speed-badge fast">Fast</span></td>
              <td data-val="5">
                <div class="score-dots" aria-label="5 out of 5">
                  <span class="score-dot filled s5"></span><span class="score-dot filled s5"></span><span class="score-dot filled s5"></span><span class="score-dot filled s5"></span><span class="score-dot filled s5"></span>
                </div>
              </td>
              <td><span class="hw-badge">CPU</span></td>
              <td class="best-for-cell">Regulated ML, fraud detection, credit scoring</td>
            </tr>

            <tr data-domain="tabular">
              <td><span class="model-dot tabular"></span><span class="model-cell">LightGBM</span></td>
              <td><span class="domain-badge tabular">Tabular</span></td>
              <td data-val="0">Tree-based</td>
              <td data-val="4">
                <div class="score-dots" aria-label="4 out of 5">
                  <span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot"></span>
                </div>
              </td>
              <td data-val="5"><span class="speed-badge fast">Very Fast</span></td>
              <td data-val="4">
                <div class="score-dots" aria-label="4 out of 5">
                  <span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot filled s4"></span><span class="score-dot"></span>
                </div>
              </td>
              <td><span class="hw-badge">CPU</span></td>
              <td class="best-for-cell">Large-scale tabular ML, recommendation systems</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Open in browser, verify filter buttons work (click NLP → only NLP rows show) and sort works (click Accuracy → rows reorder)**

- [ ] **Step 3: Commit**

```bash
git add artifacts/model-selection/index.html
git commit -m "feat: add section 04 interactive decision matrix to model-selection artifact"
```

---

## Task 7: Section 05 — Trade-off Analysis

**Files:**
- Modify: `artifacts/model-selection/index.html` — add section after section 04

- [ ] **Step 1: Insert Section 05 HTML after the closing `</section>` of section 04**

```html
  <!-- ── SECTION 05: TRADE-OFF ANALYSIS ── -->
  <section class="section section-alt" aria-labelledby="analysis-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">05 — Trade-off Analysis</span>
        <h2 class="section-title" id="analysis-heading">Strengths &amp; Weaknesses</h2>
        <p class="section-desc">Every model excels in its niche and struggles outside it. Understanding the trade-offs informs better deployment decisions.</p>
      </div>

      <!-- NLP Domain -->
      <div class="analysis-domain">
        <div class="analysis-domain-header">
          <span class="domain-pill nlp">NLP / GenAI</span>
          <div class="domain-divider" aria-hidden="true"></div>
        </div>
        <div class="analysis-grid">
          <div class="analysis-card">
            <div class="analysis-model-name">GPT-4o</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>Frontier reasoning:</strong> Leads on complex multi-step tasks, coding, and cross-domain synthesis</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Multimodal:</strong> Processes text, images, and audio in a unified model</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Zero-shot capable:</strong> Performs well without task-specific fine-tuning</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>Cost:</strong> API pricing makes high-volume production use expensive</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Latency:</strong> Typical response time 2–5s — unsuitable for real-time applications</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Black box:</strong> Explainability score 1/5 — decisions are not traceable</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: Maximum capability at maximum cost and opacity — best when accuracy trumps all other constraints.</div>
          </div>
          <div class="analysis-card">
            <div class="analysis-model-name">BERT-base</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>CPU-deployable:</strong> Runs without a GPU — low infrastructure cost</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Fast inference:</strong> ~10ms latency for classification tasks</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Fine-tuning ecosystem:</strong> Thousands of task-specific checkpoints on Hugging Face</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>No generation:</strong> Encoder-only — cannot produce free-form text</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Context limit:</strong> 512 tokens maximum input length</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Moderate accuracy:</strong> Outperformed by larger models on complex reasoning</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: Best speed and cost for classification tasks — but cannot generalize beyond discriminative NLP.</div>
          </div>
          <div class="analysis-card">
            <div class="analysis-model-name">LLaMA 3 8B</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>Open weights:</strong> Self-hostable — data never leaves your infrastructure</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Quantizable:</strong> 4-bit quantization runs on a single consumer GPU (16GB VRAM)</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Strong instruction-following:</strong> Competitive with GPT-3.5 class models</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>GPU required:</strong> FP16 inference needs a dedicated GPU</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Behind frontier:</strong> ~20–30% behind GPT-4o on MMLU benchmarks</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Self-hosting complexity:</strong> Requires MLOps infrastructure to serve reliably</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: Best choice when data privacy or cost control outweigh the need for frontier-level performance.</div>
          </div>
        </div>
      </div>

      <!-- Vision Domain -->
      <div class="analysis-domain">
        <div class="analysis-domain-header">
          <span class="domain-pill vision">Computer Vision</span>
          <div class="domain-divider" aria-hidden="true"></div>
        </div>
        <div class="analysis-grid">
          <div class="analysis-card">
            <div class="analysis-model-name">EfficientNet-B4</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>Best accuracy/params ratio:</strong> 83.0% ImageNet Top-1 with only 19M parameters</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Transfer-friendly:</strong> Pre-trained weights transfer well across image domains</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>GPU needed:</strong> Too slow for real-time CPU inference</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Black box:</strong> CNN activations not human-interpretable without Grad-CAM</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: Best accuracy-per-parameter in vision — optimal when GPU is available and accuracy matters most.</div>
          </div>
          <div class="analysis-card">
            <div class="analysis-model-name">MobileNetV3</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>Edge-optimized:</strong> ~15ms CPU inference — deployable on smartphones and microcontrollers</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Tiny footprint:</strong> 5.4M parameters — minimal memory usage</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>Accuracy trade-off:</strong> 75.2% Top-1 — ~8 points below EfficientNet-B4</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Limited complexity:</strong> Struggles with fine-grained or visually similar categories</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: Sacrifices accuracy for speed and size — the right choice when latency or device constraints are non-negotiable.</div>
          </div>
          <div class="analysis-card">
            <div class="analysis-model-name">ViT-B/16</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>Scales with data:</strong> Performance improves dramatically with more training data</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Attention maps:</strong> Self-attention provides visual interpretability via attention visualization</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>Data-hungry:</strong> Underperforms CNNs with limited training data (&lt;100K images)</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Higher compute:</strong> 86M parameters vs 19M for EfficientNet-B4</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: Best for large-scale research settings; outperformed by EfficientNet-B4 in small-data or resource-limited scenarios.</div>
          </div>
        </div>
      </div>

      <!-- Tabular Domain -->
      <div class="analysis-domain">
        <div class="analysis-domain-header">
          <span class="domain-pill tabular">Tabular Data</span>
          <div class="domain-divider" aria-hidden="true"></div>
        </div>
        <div class="analysis-grid">
          <div class="analysis-card">
            <div class="analysis-model-name">XGBoost</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>Native SHAP support:</strong> Built-in feature importance — explainability score 5/5</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Robustness:</strong> Handles missing values, mixed feature types, and outliers natively</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Audit-ready:</strong> Produces model outputs compatible with regulatory review processes</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>Slower training at scale:</strong> LightGBM is 10× faster on datasets with 1M+ rows</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Tabular-only:</strong> Cannot process text, images, or time series natively</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: The regulated industry standard — best when explainability and audit trails are requirements, not nice-to-haves.</div>
          </div>
          <div class="analysis-card">
            <div class="analysis-model-name">LightGBM</div>
            <ul class="sw-list">
              <li><span class="sw-dot strength"></span><div><strong>Training speed:</strong> Leaf-wise growth trains up to 10× faster than XGBoost</div></li>
              <li><span class="sw-dot strength"></span><div><strong>Memory efficient:</strong> Histogram binning dramatically reduces memory for large datasets</div></li>
              <li><span class="sw-dot strength"></span><div><strong>High explainability:</strong> Supports SHAP — score 4/5 (marginally less stable than XGBoost)</div></li>
            </ul>
            <ul class="sw-list">
              <li><span class="sw-dot weakness"></span><div><strong>Overfitting risk:</strong> Leaf-wise growth can overfit on small datasets without tuning</div></li>
              <li><span class="sw-dot weakness"></span><div><strong>Hyperparameter sensitivity:</strong> More parameters to tune than XGBoost for optimal performance</div></li>
            </ul>
            <div class="tradeoff-summary">Trade-off: Preferred over XGBoost when dataset size exceeds ~500K rows and training speed matters.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/model-selection/index.html
git commit -m "feat: add section 05 trade-off analysis to model-selection artifact"
```

---

## Task 8: Sections 06, 07, 08 + Footer

**Files:**
- Modify: `artifacts/model-selection/index.html` — add sections 06–08 and footer after section 05

- [ ] **Step 1: Insert sections 06, 07, 08, and footer after the closing `</section>` of section 05**

```html
  <!-- ── SECTION 06: RECOMMENDATIONS ── -->
  <section class="section" aria-labelledby="reco-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">06 — Recommendations</span>
        <h2 class="section-title" id="reco-heading">When to Use What</h2>
        <p class="section-desc">Five scenario-based recommendations — each grounded in the trade-offs identified in the matrix.</p>
      </div>

      <div class="reco-grid">
        <div class="reco-card">
          <div class="reco-header">
            <div class="reco-scenario">Real-time mobile image classification</div>
            <span class="domain-badge vision" style="flex-shrink:0;">Vision</span>
          </div>
          <div style="margin-bottom:8px;"><span class="reco-model">MobileNetV3</span></div>
          <p class="reco-rationale">When inference must run on-device in under 50ms with no GPU, MobileNetV3's 5.4M parameters and CPU-optimized architecture make it the only viable choice. Its 75.2% Top-1 accuracy is sufficient for most consumer-facing image tasks. Use EfficientNet-B4 if a GPU is available and accuracy matters more than speed.</p>
        </div>
        <div class="reco-card">
          <div class="reco-header">
            <div class="reco-scenario">Regulated financial or medical prediction</div>
            <span class="domain-badge tabular" style="flex-shrink:0;">Tabular</span>
          </div>
          <div style="margin-bottom:8px;"><span class="reco-model">XGBoost</span></div>
          <p class="reco-rationale">In regulated domains, every prediction must be explainable to auditors and regulators. XGBoost's native SHAP integration provides feature-level attribution out of the box — no post-hoc approximation required. Its robustness to missing values and outliers also reduces data preprocessing burden for messy financial datasets.</p>
        </div>
        <div class="reco-card">
          <div class="reco-header">
            <div class="reco-scenario">On-premise private LLM deployment</div>
            <span class="domain-badge nlp" style="flex-shrink:0;">NLP / GenAI</span>
          </div>
          <div style="margin-bottom:8px;"><span class="reco-model">LLaMA 3 8B</span></div>
          <p class="reco-rationale">When data cannot leave your infrastructure — healthcare records, legal documents, proprietary IP — LLaMA 3 8B is the best open-weight option. Quantized to 4-bit, it runs on a single A100 or consumer RTX 4090. Instruction-following quality is competitive with GPT-3.5 for most enterprise use cases.</p>
        </div>
        <div class="reco-card">
          <div class="reco-header">
            <div class="reco-scenario">Highest-accuracy NLP, budget available</div>
            <span class="domain-badge nlp" style="flex-shrink:0;">NLP / GenAI</span>
          </div>
          <div style="margin-bottom:8px;"><span class="reco-model">GPT-4o</span></div>
          <p class="reco-rationale">When the task requires frontier reasoning — complex code generation, multi-document synthesis, cross-domain reasoning — and latency/cost are acceptable constraints, GPT-4o has no peer. Its multimodal capabilities also future-proof pipelines that may need to process images alongside text.</p>
        </div>
        <div class="reco-card">
          <div class="reco-header">
            <div class="reco-scenario">Research-grade image classification</div>
            <span class="domain-badge vision" style="flex-shrink:0;">Vision</span>
          </div>
          <div style="margin-bottom:8px;"><span class="reco-model">EfficientNet-B4 or ViT-B/16</span></div>
          <p class="reco-rationale">For research benchmarks or production systems with GPU access and large training sets, both are strong choices. EfficientNet-B4 wins on parameter efficiency and small dataset transfer; ViT-B/16 wins on large-scale training and architecture research, where transformer attention maps provide interpretability benefits.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── SECTION 07: FURTHER READING ── -->
  <section class="section section-reading" aria-labelledby="reading-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">07 — Further Reading</span>
        <h2 class="section-title" id="reading-heading">Sources &amp; Depth</h2>
        <p class="section-desc">Key papers, benchmarks, and repositories behind the models compared in this artifact.</p>
      </div>

      <div class="reading-grid">
        <div class="reading-group">
          <div class="reading-group-title">Foundational Papers</div>
          <ul class="reading-list">
            <li>
              <a href="https://arxiv.org/abs/2001.08361" target="_blank" rel="noopener">Scaling Laws for Neural Language Models (Kaplan et al., 2020)</a>
              <span class="reading-desc">OpenAI's seminal paper establishing that model performance scales predictably with parameters, data, and compute — the theoretical foundation for why GPT-4o has ~200B parameters.</span>
            </li>
            <li>
              <a href="https://arxiv.org/abs/1905.11946" target="_blank" rel="noopener">EfficientNet: Rethinking Model Scaling for CNNs (Tan &amp; Le, 2019)</a>
              <span class="reading-desc">Introduces compound scaling — jointly scaling width, depth, and resolution — achieving ImageNet SOTA with dramatically fewer parameters than prior models.</span>
            </li>
            <li>
              <a href="https://arxiv.org/abs/1603.02754" target="_blank" rel="noopener">XGBoost: A Scalable Tree Boosting System (Chen &amp; Guestrin, 2016)</a>
              <span class="reading-desc">The paper behind the most widely-used tabular ML algorithm. Describes the sparsity-aware split finding and cache-aware access patterns that make XGBoost both accurate and fast.</span>
            </li>
          </ul>
        </div>
        <div class="reading-group">
          <div class="reading-group-title">Model Documentation</div>
          <ul class="reading-list">
            <li>
              <a href="https://ai.meta.com/research/publications/meta-llama-3/" target="_blank" rel="noopener">Meta LLaMA 3 Technical Report (Meta AI, 2024)</a>
              <span class="reading-desc">Meta's technical overview of LLaMA 3, covering the instruction-tuning methodology, RLHF process, and benchmark comparisons that position it as the leading open-weight LLM.</span>
            </li>
            <li>
              <a href="https://arxiv.org/abs/2010.11929" target="_blank" rel="noopener">An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale (Dosovitskiy et al., 2020)</a>
              <span class="reading-desc">The ViT paper demonstrating that pure transformer architectures — without convolutions — achieve competitive or superior performance to CNNs when trained at scale.</span>
            </li>
            <li>
              <a href="https://lightgbm.readthedocs.io/en/stable/" target="_blank" rel="noopener">LightGBM Documentation (Microsoft Research)</a>
              <span class="reading-desc">Official documentation covering LightGBM's leaf-wise tree growth algorithm, histogram-based binning, and the experimental results showing 10× training speed improvement over XGBoost.</span>
            </li>
          </ul>
        </div>
        <div class="reading-group">
          <div class="reading-group-title">Benchmarks &amp; Comparisons</div>
          <ul class="reading-list">
            <li>
              <a href="https://paperswithcode.com/sota/image-classification-on-imagenet" target="_blank" rel="noopener">Papers With Code — ImageNet Benchmark</a>
              <span class="reading-desc">Live leaderboard of image classification results on ImageNet — the authoritative source for comparing vision model accuracy, parameter counts, and inference speed across all published models.</span>
            </li>
            <li>
              <a href="https://huggingface.co/models" target="_blank" rel="noopener">Hugging Face Model Hub</a>
              <span class="reading-desc">Repository of 500,000+ pre-trained models with benchmarks, model cards, and usage examples. The practical starting point for finding and deploying NLP and vision pre-trained models.</span>
            </li>
          </ul>
        </div>
        <div class="reading-group">
          <div class="reading-group-title">Explainability Context</div>
          <ul class="reading-list">
            <li>
              <a href="https://arxiv.org/abs/1705.07874" target="_blank" rel="noopener">A Unified Approach to Interpreting Model Predictions — SHAP (Lundberg &amp; Lee, 2017)</a>
              <span class="reading-desc">Introduces SHAP values — the most principled method for explaining why a model produced a specific prediction. Directly relevant to the explainability scores in the decision matrix.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ── SECTION 08: REFLECTION ── -->
  <section class="section" aria-labelledby="reflection-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-tag mono">08 — Reflection</span>
        <h2 class="section-title" id="reflection-heading">Methodology &amp; Insights</h2>
        <p class="section-desc">How this comparison was constructed and what the matrix reveals beyond the numbers.</p>
      </div>
      <div class="reflection-card">
        <p>The eight models in this artifact were selected to represent meaningful diversity across three axes: domain (NLP, Vision, Tabular), scale (5.4M to ~200B parameters), and organizational origin (Google, OpenAI, Meta, Microsoft). Model characteristics were sourced from original research papers, official documentation, and the Papers With Code benchmark leaderboards. Explainability scores reflect <strong>inherent interpretability</strong> — the degree to which a model's decision process is natively traceable — not the quality of post-hoc explanation tools that can be applied on top. A score of 1/5 for GPT-4o is not a failing; it reflects the fundamental opacity of large transformer models, a property shared across the architecture class.</p>
        <p>The most striking pattern the matrix reveals is the <strong>inverse relationship between scale and explainability</strong>. The two highest-explainability models — XGBoost (5/5) and LightGBM (4/5) — are also the smallest and fastest, with no trainable parameters in the neural network sense. This is not coincidental: decision trees produce decisions through explicit, human-readable branching logic, while neural networks distribute reasoning across billions of parameters in ways that resist interpretation. For practitioners in regulated industries, this means the model selection decision is often made before benchmarks are consulted: if explainability is a hard requirement, the answer is a tree-based model. The decision matrix formalizes a framework for making these trade-offs explicit — replacing intuition with structure.</p>
      </div>
    </div>
  </section>

  <!-- ── FOOTER ── -->
  <footer class="artifact-footer">
    <div class="container">
      <span class="footer-copy mono">Artifact 5 &mdash; Atharva Deshpande &mdash; 2026</span>
      <a href="../../index.html#artifacts" class="footer-back">&#8592; Back to Portfolio</a>
    </div>
  </footer>
```

- [ ] **Step 2: Verify full page renders end-to-end in browser — all 8 sections visible, scroll animations trigger, further reading links are present**

- [ ] **Step 3: Commit**

```bash
git add artifacts/model-selection/index.html
git commit -m "feat: add sections 06-08, further reading, and footer to model-selection artifact"
```

---

## Task 9: Update Artifact 4 nav + Portfolio index card

**Files:**
- Modify: `artifacts/xai/index.html` — add right-arrow navigation to Artifact 5
- Modify: `index.html` — add Artifact 5 card to portfolio artifacts grid

- [ ] **Step 1: Read the current artifact-nav in `artifacts/xai/index.html`**

Read lines 18–22 of `artifacts/xai/index.html`. Expected to see:
```html
      <a href="../llm-training/index.html" class="artifact-nav-arrow" title="Artifact 3: How LLMs Are Built">&#8592;</a>
      <span class="topbar-badge">Artifact 4</span>
```

- [ ] **Step 2: Add right-arrow to Artifact 4's topbar pointing to Artifact 5**

Find this in `artifacts/xai/index.html`:
```html
      <span class="topbar-badge">Artifact 4</span>
```
Replace with:
```html
      <span class="topbar-badge">Artifact 4</span>
      <a href="../model-selection/index.html" class="artifact-nav-arrow" title="Artifact 5: Pre-trained Model Selection">&#8594;</a>
```

- [ ] **Step 3: Read the portfolio index `index.html` to find the artifacts grid and identify where to add the Artifact 5 card**

Search for `artifact 4` or the XAI card in `index.html` to understand the card structure.

- [ ] **Step 4: Add the Artifact 5 card after the Artifact 4 card in `index.html`**

The card should follow the same pattern as existing artifact cards. Based on the existing pattern (inspect the Artifact 4 card for exact class names), add:

```html
<a href="artifacts/model-selection/index.html" class="artifact-card">
  <div class="artifact-num">05</div>
  <div class="artifact-info">
    <div class="artifact-title">Pre-trained Model Selection</div>
    <div class="artifact-desc">Decision matrix comparing 8 models across NLP, Vision, and Tabular domains — analyzing size, speed, accuracy, and explainability trade-offs.</div>
    <div class="artifact-tags">
      <span class="atag">Model Selection</span>
      <span class="atag">Decision Matrix</span>
      <span class="atag">Trade-offs</span>
    </div>
  </div>
</a>
```

> Note: Read `index.html` first to confirm the exact class names (`.artifact-card`, `.artifact-num`, `.artifact-title`, `.artifact-desc`, `.atag`) match the existing pattern before inserting.

- [ ] **Step 5: Commit**

```bash
git add artifacts/xai/index.html index.html
git commit -m "feat: add artifact 5 portfolio card and update artifact 4 nav arrow"
```

---

## Self-Review

**Spec coverage check:**

| Spec Requirement | Covered |
|-----------------|---------|
| Dark navy bg + indigo/cyan accent | ✅ Task 1 CSS variables |
| Hero with eyebrow, title, stats bar | ✅ Task 2 |
| 8 concept cards + abbr strip (Section 01) | ✅ Task 3 |
| Two-card why layout with driver items (Section 02) | ✅ Task 4 |
| Domain pills + 8 model cards (Section 03) | ✅ Task 5 |
| Filterable/sortable decision matrix (Section 04) | ✅ Task 6 + Task 2 JS |
| Trade-off analysis cards per domain (Section 05) | ✅ Task 7 |
| 5 recommendation scenario cards (Section 06) | ✅ Task 8 |
| Further reading groups (Section 07) | ✅ Task 8 |
| Reflection + methodology paragraphs (Section 08) | ✅ Task 8 |
| Footer + portfolio nav | ✅ Task 8 + Task 9 |
| Artifact 4 nav arrow → Artifact 5 | ✅ Task 9 |
| Portfolio index card | ✅ Task 9 |

**Placeholder scan:** None found — all content, scores, URLs, and code are fully specified.

**Type consistency:** `data-domain` attributes on `<tr>` rows match the `data-domain` values on filter buttons (`nlp`, `vision`, `tabular`). `data-col` indices on `<th>` elements (0–7) match `cells[col]` access in JS sort. `data-val` attributes are present on sortable cells with numeric values.
