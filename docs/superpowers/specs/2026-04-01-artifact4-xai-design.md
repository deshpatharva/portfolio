# Artifact 4 — Explainable AI & Model Transparency

**Date:** 2026-04-01
**Branch:** iwu_2.4_neural
**Output path:** `artifacts/xai/index.html` + `artifacts/xai/style.css`

---

## Overview

A standalone infographic page (Artifact 4) added to Atharva Deshpande's portfolio. The page covers Explainable AI (XAI) — what it is, why it matters, the core challenges, validation metrics, solution techniques, a model comparison across GPT-4/Claude/Gemini/LLaMA, and a required 1–2 paragraph explanatory document.

Follows the same structure and animation patterns as Artifact 3 (LLM Training). Color identity is **teal/emerald** (`#00c9a7`) on a deep dark background (`#060d12`), distinct from Artifact 3's amber/cyan palette.

---

## Color Palette

| Token        | Value     | Usage                        |
|-------------|-----------|------------------------------|
| `--bg`       | `#060d12` | Page background              |
| `--bg-card`  | `#0a1a18` | Card backgrounds             |
| `--bg-card2` | `#0d2420` | Alternate card / table rows  |
| `--border`   | `#1a3530` | Card borders                 |
| `--text`     | `#e8f5f2` | Primary text                 |
| `--muted`    | `#5a8a80` | Secondary / label text       |
| `--teal`     | `#00c9a7` | Primary accent               |
| `--red`      | `#ff5c5c` | Challenge card 1 accent      |
| `--amber`    | `#f5a623` | Challenge card 2 accent      |
| `--violet`   | `#a78bfa` | Challenge card 3 accent      |

---

## Typography

- **Display/headers:** Syne (same as Artifact 3)
- **Body:** DM Sans
- **Mono labels:** DM Mono

---

## Page Structure

### Topbar
- Back link → `../../index.html#artifacts`
- Center title: "Explainable AI & Model Transparency"
- Right badge: "Artifact 4" (teal border)

### Hero
- Eyebrow: `GENERATIVE AI · EXPLAINABILITY & TRUST` with pulsing dot
- Title: `Opening the` **`Black Box`** (teal accent)
- Subtitle: "Why AI transparency matters — and how the industry is solving it."
- 4 stat tiles: `72%` users don't trust AI · `3` core challenges · `5` solution techniques · `4` LLMs compared

### Section 01 — What is XAI?
- Tag: `01 — WHAT IS XAI?`
- Two-column layout:
  - Left (2/3): Definition card — XAI = methods making AI decisions understandable; covers transparency, interpretability, accountability
  - Right (1/3): Why it matters — EU AI Act, safety-critical domains, bias detection, user trust

### Section 02 — Challenges (alt background)
- Tag: `02 — CHALLENGES`
- 3 cards in a row, each with a left accent border in a distinct color:
  1. **Black Box Opacity** (red border) — distributed non-linear decisions across billions of parameters; no single component explains the output
  2. **Post-Hoc Gap** (amber border) — explanations added after-the-fact may not reflect true reasoning; undermines trust
  3. **Data Bias** (violet border) — models inherit and amplify biases in training data; quality and representativeness are critical

### Section 03 — Validation & Performance Metrics
- Tag: `03 — VALIDATION & METRICS`
- Title: "How We Measure Trust & Reliability"
- 2×2 grid of metric cards (teal accent text for metric name):
  1. **Faithfulness** — does the explanation match actual model behavior?
  2. **Human-Groundedness** — do real users understand and trust the explanation?
  3. **Robustness** — consistent results across similar inputs?
  4. **Completeness** — does it cover all relevant factors?

### Section 04 — Solutions & Techniques (alt background)
- Tag: `04 — SOLUTIONS & TECHNIQUES`
- Title: "5 Industry Approaches"
- 5 technique cards (staggered reveal), each with:
  - Icon (emoji or SVG)
  - Name
  - 1–2 sentence description
  - Which models/organizations use it
  1. **Attention Visualization** — heatmaps showing which tokens influenced the output
  2. **Chain-of-Thought Prompting** — step-by-step reasoning exposes internal logic; users can ask models to explain
  3. **SHAP / LIME** — post-hoc feature importance methods widely used in ML explainability
  4. **Probing Classifiers** — lightweight networks trained on frozen representations to test what models encode
  5. **Constitutional AI** (Anthropic) — explicit principles guide model behavior and make reasoning auditable

### Section 05 — Model Comparison
- Tag: `05 — MODEL COMPARISON`
- Title: "GPT-4 · Claude · Gemini · LLaMA"
- Subtitle: "How leading LLMs approach explainability and transparency"
- Table with scroll-triggered row reveal animation:

| Feature              | GPT-4 | Claude | Gemini | LLaMA |
|---------------------|-------|--------|--------|-------|
| Chain-of-Thought     | ✓     | ✓      | ✓      | Partial |
| Open Weights         | ✗     | ✗      | ✗      | ✓   |
| Constitutional AI    | ✗     | ✓      | ✗      | ✗   |
| Transparency Report  | ✓     | ✓      | ✓      | Partial |
| Attention Tools      | Partial | ✓   | Partial | ✓   |

Cells: `✓` = teal, `✗` = red/muted, `Partial` = amber

### Section 06 — Explanatory Document
- Tag: `06 — EXPLANATORY DOCUMENT`
- Title: "Summary & Design Rationale"
- Two paragraphs of written content covering:
  - Para 1: What XAI is, why transparency is critical (regulatory, safety, trust), the core challenges depicted
  - Para 2: How validation metrics and current techniques address those challenges; design rationale for teal palette and section structure

---

## Animations

Matches Artifact 3's animation system exactly:

- **Hero eyebrow dot:** `dot-pulse` keyframe (2.4s infinite)
- **Scroll-triggered reveal:** `IntersectionObserver` on cards, table rows, metric blocks — fade + translateY(20px) → 0
- **Stagger delays:** nth-child delays (0.05s increments) on card groups
- **Table row reveal:** rows animate in sequentially on scroll
- **Hover transitions:** cards get subtle background lightening on hover

---

## Portfolio Index Update

Add a 4th `<article class="artifact-card">` to `index.html` `#artifacts` section:
- Badge: `New`
- Icon: `🔍` (magnifying glass — inspection/transparency)
- Title: "Explainable AI & Model Transparency"
- Description: "An infographic mapping XAI challenges, validation metrics, and solution techniques — with a side-by-side comparison of how GPT-4, Claude, Gemini, and LLaMA approach transparency."
- Link: `artifacts/xai/index.html`
- Move `New` badge from Artifact 3 to Artifact 4

---

## Files to Create

- `artifacts/xai/index.html`
- `artifacts/xai/style.css`

## Files to Edit

- `index.html` — add Artifact 4 card, move "New" badge from Artifact 3

---

## Out of Scope

- No JavaScript framework — vanilla JS only (consistent with all other artifacts)
- No external charting libraries
- No backend or form processing
