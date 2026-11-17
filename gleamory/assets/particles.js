(function () {
  var c = document.getElementById("particles");
  if (!c) return;
  var ctx = c.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var particles = [];
  var COLORS = [
    [59, 130, 246],
    [34, 211, 238],
    [45, 212, 191],
    [96, 165, 250],
    [103, 232, 249],
    [56, 189, 248]
  ];

  function resize() {
    c.width = window.innerWidth * dpr;
    c.height = window.innerHeight * dpr;
    c.style.width = window.innerWidth + "px";
    c.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    var count = Math.min(Math.floor(window.innerWidth * window.innerHeight / 8000), 120);
    particles = [];
    for (var i = 0; i < count; i++) {
      var col = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.5 + 0.6,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.55 + 0.15,
        color: col,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    var t = Date.now() * 0.001;
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < -10) p.x = window.innerWidth + 10;
      if (p.x > window.innerWidth + 10) p.x = -10;
      if (p.y < -10) p.y = window.innerHeight + 10;
      if (p.y > window.innerHeight + 10) p.y = -10;
      var flicker = 0.6 + 0.4 * Math.sin(t * 1.2 + p.phase);
      var a = p.alpha * flicker;

      // Glow halo
      if (p.r > 0.8) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.color[0] + "," + p.color[1] + "," + p.color[2] + "," + (a * 0.12) + ")";
        ctx.fill();
      }

      // Core dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + p.color[0] + "," + p.color[1] + "," + p.color[2] + "," + a + ")";
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", function () { resize(); createParticles(); });
  resize();
  createParticles();
  draw();
})();
