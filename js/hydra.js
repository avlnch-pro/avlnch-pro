// "Rainbow Framing" - avlnch.pro

src(o0);
osc(10, 0.05, 2)
  .rotate(1.55)
  .modulate(noise(3, 0))
  .diff(shape(4, 1, 0.01).luma(0.5).scale(1.59, 0.5, 1, 0.5, 1))
  .out(o0);

render(o0);
