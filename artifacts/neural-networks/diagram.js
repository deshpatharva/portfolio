/* Neural Network Diagram — SVG connections + hover interactions */
(function () {
  const svg = document.getElementById('nnSvg');
  const diagram = document.getElementById('nnDiagram');
  if (!svg || !diagram) return;

  function getCenter(el, container) {
    const elR = el.getBoundingClientRect();
    const cR  = container.getBoundingClientRect();
    return {
      x: elR.left - cR.left + elR.width / 2,
      y: elR.top  - cR.top  + elR.height / 2,
    };
  }

  const layerIds = ['layer0', 'layer1', 'layer2', 'layer3'];

  function drawLines(highlightLayer, highlightIdx) {
    svg.innerHTML = '';

    for (let li = 0; li < layerIds.length - 1; li++) {
      const fromEls = document.querySelectorAll(`[data-layer="${li}"]`);
      const toEls   = document.querySelectorAll(`[data-layer="${li + 1}"]`);

      fromEls.forEach((from, fi) => {
        toEls.forEach((to) => {
          const a = getCenter(from, diagram);
          const b = getCenter(to, diagram);

          const isHighlighted =
            (highlightLayer === li   && highlightIdx === fi) ||
            (highlightLayer === li + 1);

          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', a.x);
          line.setAttribute('y1', a.y);
          line.setAttribute('x2', b.x);
          line.setAttribute('y2', b.y);

          if (highlightLayer === null) {
            line.setAttribute('stroke', 'rgba(37,42,69,0.9)');
            line.setAttribute('stroke-width', '1');
          } else if (isHighlighted) {
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

  function init() {
    drawLines(null, null);

    document.querySelectorAll('.neuron').forEach((n) => {
      n.addEventListener('mouseenter', () => {
        const l = parseInt(n.dataset.layer);
        const i = parseInt(n.dataset.idx);
        drawLines(l, i);
      });
      n.addEventListener('mouseleave', () => {
        drawLines(null, null);
      });
    });
  }

  // Wait for fonts/layout then draw
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  window.addEventListener('resize', () => drawLines(null, null));
})();
