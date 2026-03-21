/* Neural Network Diagram — connections, hover, and animated forward pass */
(function () {
  const svg     = document.getElementById('nnSvg');
  const diagram = document.getElementById('nnDiagram');
  const playBtn = document.getElementById('playBtn');
  const stepBar = document.getElementById('stepBar');
  if (!svg || !diagram) return;

  /* ── Helpers ── */
  function getCenter(el) {
    const elR = el.getBoundingClientRect();
    const cR  = diagram.getBoundingClientRect();
    return {
      x: elR.left - cR.left + elR.width  / 2,
      y: elR.top  - cR.top  + elR.height / 2,
    };
  }

  function neurons(layer) {
    return Array.from(document.querySelectorAll(`[data-layer="${layer}"]`));
  }

  /* ── Draw static / hover connection lines ── */
  function drawLines(highlightLayer, highlightIdx) {
    svg.innerHTML = '';
    for (let li = 0; li < 3; li++) {
      neurons(li).forEach((from, fi) => {
        neurons(li + 1).forEach((to) => {
          const a = getCenter(from);
          const b = getCenter(to);
          const highlighted =
            (highlightLayer === li     && highlightIdx === fi) ||
            (highlightLayer === li + 1);
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
          line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
          if (highlightLayer === null) {
            line.setAttribute('stroke', 'rgba(37,42,69,0.9)');
            line.setAttribute('stroke-width', '1');
          } else if (highlighted) {
            line.setAttribute('stroke', 'rgba(108,99,255,0.7)');
            line.setAttribute('stroke-width', '2');
          } else {
            line.setAttribute('stroke', 'rgba(37,42,69,0.3)');
            line.setAttribute('stroke-width', '0.8');
          }
          svg.appendChild(line);
        });
      });
    }
  }

  /* ── Signal dot: travels from point a to point b over `dur` ms ── */
  function fireSignal(a, b, dur, color) {
    return new Promise((resolve) => {
      const dot = document.createElement('div');
      dot.className = 'signal-dot';
      dot.style.setProperty('--dur', dur + 'ms');
      dot.style.background = color;
      dot.style.boxShadow  = `0 0 8px ${color}, 0 0 18px ${color}55`;
      dot.style.left = a.x + 'px';
      dot.style.top  = a.y + 'px';
      diagram.appendChild(dot);
      // Force reflow so the transition fires
      dot.getBoundingClientRect();
      dot.style.left = b.x + 'px';
      dot.style.top  = b.y + 'px';
      setTimeout(() => { dot.remove(); resolve(); }, dur + 80);
    });
  }

  /* ── Activate neuron (glow + pop) ── */
  function activateNeuron(el) {
    el.classList.remove('activated');
    void el.offsetWidth; // reflow
    el.classList.add('activated');
    setTimeout(() => el.classList.remove('activated'), 600);
  }

  /* ── Show step text ── */
  function setStep(text) {
    stepBar.textContent = text;
    stepBar.classList.add('visible');
  }
  function clearStep() {
    stepBar.classList.remove('visible');
  }

  /* ── Layer-to-layer signal wave ── */
  async function fireLayer(fromLayer, toLayer, color, dur) {
    const from = neurons(fromLayer);
    const to   = neurons(toLayer);
    const promises = [];
    from.forEach((f) => {
      to.forEach((t) => {
        promises.push(fireSignal(getCenter(f), getCenter(t), dur, color));
      });
    });
    return Promise.all(promises);
  }

  /* ── Main animation sequence ── */
  async function runForwardPass() {
    if (playBtn) { playBtn.disabled = true; playBtn.textContent = '⏳ Running…'; }

    // Show legend
    const legend = document.getElementById('exampleLegend');
    if (legend) legend.classList.add('visible');

    // Reset output values
    const v0 = document.getElementById('exVal0');
    const v1 = document.getElementById('exVal1');
    if (v0) v0.textContent = '—';
    if (v1) v1.textContent = '—';

    // Phase 0 — activate inputs
    setStep('Step 1 of 4 — Input features loaded');
    neurons(0).forEach((n) => activateNeuron(n));
    await delay(700);

    // Phase 1 — input → hidden 1
    setStep('Step 2 of 4 — Forward pass through Hidden Layer 1');
    drawLines(null, null); // dim hover state during animation
    await fireLayer(0, 1, '#6c63ff', 550);
    neurons(1).forEach((n) => activateNeuron(n));
    await delay(500);

    // Phase 2 — hidden 1 → hidden 2
    setStep('Step 3 of 4 — Forward pass through Hidden Layer 2');
    await fireLayer(1, 2, '#c471ed', 550);
    neurons(2).forEach((n) => activateNeuron(n));
    await delay(500);

    // Phase 3 — hidden 2 → output
    setStep('Step 4 of 4 — Output computed');
    await fireLayer(2, 3, '#f953c6', 550);
    neurons(3).forEach((n) => activateNeuron(n));
    await delay(400);

    // Reveal predictions
    if (v0) {
      v0.textContent = '94%';
      v0.classList.add('value-revealed');
    }
    if (v1) {
      v1.textContent = '6%';
      v1.classList.add('value-revealed');
    }

    setStep('✓ Prediction complete — Transaction classified as Normal (94%)');

    await delay(3000);
    clearStep();

    if (playBtn) {
      playBtn.disabled = false;
      playBtn.textContent = '↺ Replay';
    }
  }

  function delay(ms) { return new Promise((r) => setTimeout(r, ms)); }

  /* ── Init ── */
  function init() {
    drawLines(null, null);

    // Hover interactions (disabled during animation)
    document.querySelectorAll('.neuron').forEach((n) => {
      n.addEventListener('mouseenter', () => {
        if (playBtn && playBtn.disabled) return;
        drawLines(parseInt(n.dataset.layer), parseInt(n.dataset.idx));
      });
      n.addEventListener('mouseleave', () => {
        if (playBtn && playBtn.disabled) return;
        drawLines(null, null);
      });
    });

    if (playBtn) {
      playBtn.addEventListener('click', runForwardPass);
    }
  }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  window.addEventListener('resize', () => drawLines(null, null));
})();
