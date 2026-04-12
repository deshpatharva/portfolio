# Artifact 5 — Pre-trained Model Selection & Decision Matrix

**Date:** 2026-04-09  
**Branch:** iwu_2.4_neural  
**Directory:** `artifacts/model-selection/` (index.html + style.css)

---

## Overview

An interactive portfolio artifact analyzing trade-offs between pre-trained models across three domains — NLP/GenAI, Computer Vision, and Tabular Data. The centerpiece is a filterable, sortable decision matrix. Rubric deliverables (introduction, methodology, decision matrix, analysis, recommendations, conclusion) are all covered within the portfolio-native numbered section format.

---

## Visual Identity

- **Background:** Dark navy `#05080f` with indigo-tinted grid pattern
- **Accent:** Indigo/violet `#7c6ff7` (primary), electric cyan `#00d4ff` (highlight)
- **Fonts:** Syne (headings), DM Mono (labels/tags), DM Sans (body) — same as all artifacts
- **Score colors:** Green `#22c55e` (strong) → Amber `#f59e0b` (moderate) → Red `#ef4444` (weak)
- **Distinct from Artifact 4:** Teal → Indigo/Cyan shift

---

## Hero

- **Eyebrow:** `Generative AI • Model Selection & Trade-offs`
- **Title:** `Choosing the Right` / `<accent>Model</accent>`
- **Sub:** Why model selection is never one-size-fits-all — and how to navigate size, speed, accuracy, and explainability trade-offs.
- **Stats bar:** 3 Domains · 7 Models Compared · 6 Selection Criteria · ~1.5T Parameters Spanned

---

## Sections

### 01 — Key Terms & Concepts
7–8 concept cards (same `.concept-card` pattern as artifact 4):

| Term | Category | Definition focus |
|------|----------|-----------------|
| Parameters | Core | Count of learnable weights; proxy for model capacity and size |
| Inference | Core | The act of running a trained model on new input to produce output |
| Benchmark | Evaluation | Standardized test dataset used to compare model performance (e.g., ImageNet, MMLU) |
| Fine-tuning | Technique | Adapting a pre-trained model to a specific task with additional training |
| Latency | Performance | Time from input to output; critical for real-time applications |
| Explainability | Property | Degree to which a model's decisions can be understood by humans |
| Transfer Learning | Technique | Reusing a model trained on one task as a starting point for another |
| Quantization | Optimization | Reducing model precision (e.g., FP32→INT8) to shrink size and speed up inference |

Abbreviation strip below: NLP, CV, LLM, BERT, ViT, XGB, LGBM, Top-1

---

### 02 — Why It Matters (The Model Selection Problem)
Two-card layout (definition + drivers), mirrors artifact 4's `xai-grid`:

- **Left card:** What is model selection? Why pre-trained models? The trade-off triangle (size ↔ accuracy ↔ speed) with explainability as a fourth axis.
- **Right card:** 4 driver items with icons:
  - 💰 Cost — larger models = higher compute bills
  - ⚡ Latency — edge/mobile apps need fast inference
  - 🎯 Accuracy — some tasks demand benchmark-leading performance
  - 🔍 Explainability — regulated domains require auditable decisions

---

### 03 — The Models (What We're Comparing)
3 domain pill headers (NLP/GenAI · Computer Vision · Tabular), each followed by model cards in a grid.

**7 model cards**, each showing:
- Model name + organization badge
- Domain tag
- Parameter count
- 3 quick-stat pills: Size tier · Speed tier · Accuracy tier

| Model | Domain | Params | Notes |
|-------|--------|--------|-------|
| GPT-4o | NLP/GenAI | ~200B (est.) | OpenAI flagship; multimodal |
| BERT-base | NLP/GenAI | 110M | Google; encoder-only; fast for classification |
| LLaMA 3 8B | NLP/GenAI | 8B | Meta; open-weight; deployable on-prem |
| EfficientNet-B4 | Vision | 19M | Google; ImageNet SOTA-class; balanced |
| MobileNetV3 | Vision | 5.4M | Google; designed for mobile/edge |
| ViT-B/16 | Vision | 86M | Google; transformer-based vision |
| XGBoost | Tabular | N/A (tree ensemble) | Gradient boosting; competition standard |
| LightGBM | Tabular | N/A (tree ensemble) | Microsoft; faster XGBoost alternative |

> Note: 8 models total (assignment says "at least 4"; 8 is well within scope and adds depth)

---

### 04 — Decision Matrix (Interactive Comparison)

**Filter bar:** All | NLP/GenAI | Computer Vision | Tabular  
**Sort:** Click any column header to sort ascending/descending (JS)

**Columns:**

| Column | Type | Notes |
|--------|------|-------|
| Model | Text | Name + domain color dot |
| Domain | Badge | Color-coded pill |
| Size (Params) | Text | Numeric or "Tree-based" |
| Accuracy | Score bar | Benchmark % or qualitative 1–5 |
| Speed | Tier badge | Fast / Medium / Slow |
| Explainability | Score 1–5 | Color-coded dots |
| Hardware | Badge | CPU · GPU · Cloud |
| Best For | Text | One-line use case |

**Score data:**

| Model | Accuracy | Speed | Explainability | Hardware |
|-------|----------|-------|---------------|----------|
| GPT-4o | 5/5 | Slow | 1/5 | Cloud |
| BERT-base | 3/5 | Fast | 2/5 | CPU/GPU |
| LLaMA 3 8B | 4/5 | Medium | 2/5 | GPU |
| EfficientNet-B4 | 4/5 | Medium | 2/5 | GPU |
| MobileNetV3 | 3/5 | Fast | 2/5 | CPU |
| ViT-B/16 | 4/5 | Medium | 2/5 | GPU |
| XGBoost | 4/5 | Fast | 5/5 | CPU |
| LightGBM | 4/5 | Fast | 4/5 | CPU |

Row fade-in animation on scroll (IntersectionObserver, same as artifact 4).

---

### 05 — Trade-off Analysis (Strengths & Weaknesses)

3 domain subsections, each with 2–3 model cards. Each card has:
- Strengths list (green dots)
- Weaknesses list (red dots)
- Trade-off summary sentence

Focus content:
- **NLP:** GPT-4o (capability vs. cost/opacity), BERT (speed vs. task breadth), LLaMA 3 (openness vs. hardware needs)
- **Vision:** EfficientNet (accuracy/efficiency balance), MobileNetV3 (edge-optimized, accuracy trade-off), ViT (strong accuracy, needs more data)
- **Tabular:** XGBoost vs. LightGBM (speed vs. robustness trade-off; both highly explainable via SHAP)

---

### 06 — Recommendations (When to Use What)

5 scenario cards, each with:
- Use-case title
- Domain badge
- Recommended model
- Rationale (2–3 sentences)

| Scenario | Recommended |
|----------|-------------|
| Real-time mobile image classification | MobileNetV3 |
| Regulated financial/medical tabular prediction | XGBoost |
| On-premise private LLM deployment | LLaMA 3 8B |
| Highest-accuracy NLP with budget | GPT-4o |
| Research-grade image classification | EfficientNet-B4 or ViT-B/16 |

---

### 07 — Further Reading

Same `.reading-item` pattern as artifact 4. 5–6 sources:
- Papers With Code (benchmarks)
- Hugging Face Model Hub
- "Scaling Laws for Neural Language Models" (Kaplan et al., 2020)
- EfficientNet paper (Tan & Le, 2019)
- XGBoost paper (Chen & Guestrin, 2016)
- LLaMA 3 technical report (Meta, 2024)

---

### 08 — Reflection

Two paragraphs:
1. Methodology — how models were selected, what sources informed the data, why these 3 domains.
2. Personal insight — what the decision matrix reveals about the explainability-performance trade-off; tabular models' underrated strengths; LLM cost vs. capability considerations.

---

## Artifact Navigation (Topbar)

- Back: `← Portfolio`
- Title: `Pre-trained Model Selection`
- Left arrow: `← Artifact 4: Explainable AI` → `../xai/index.html`
- Badge: `Artifact 5`
- Right arrow: reserved for future artifact

---

## JS Behavior

- **Filter buttons:** Toggle `.active` class, hide/show rows by `data-domain` attribute
- **Sort:** Click `<th>` → sort table by that column; toggle asc/desc; update sort indicator arrow
- **Scroll animations:** IntersectionObserver on section headers, model cards, matrix rows
- **No external JS libraries** — vanilla JS only

---

## Files

```
artifacts/model-selection/
  index.html
  style.css
```

No images. All visuals via CSS (score dots, tier badges, color-coded cells).

---

## Rubric Coverage

| Rubric Item | Covered In |
|-------------|-----------|
| Research & summarize model characteristics | Section 03 model cards |
| Analyze size/accuracy/speed/explainability trade-offs | Section 05 |
| Decision matrix with ≥4 models | Section 04 (8 models) |
| Visual enhancements (colors, icons) | Color-coded scores, domain badges throughout |
| Introduction | Section 02 |
| Methodology | Section 08 Reflection |
| Analysis & Recommendations | Sections 05 + 06 |
| Conclusion | Section 08 Reflection |
