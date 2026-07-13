// Interactive flexbox playground.
// Usage: <div class="flex-playground"></div> then <script src="../assets/flex-playground.js"></script>
document.querySelectorAll(".flex-playground").forEach((root) => {
  const props = {
    "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
    "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    "align-items": ["stretch", "flex-start", "flex-end", "center", "baseline"],
    "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  };
  const controls = document.createElement("div");
  controls.style.cssText = "display:flex;flex-wrap:wrap;gap:0.8rem;margin-bottom:0.8rem;font-family:monospace;font-size:0.85rem";
  const stage = document.createElement("div");
  stage.style.cssText = "display:flex;gap:6px;background:var(--code-bg);border:1px solid var(--rule);border-radius:8px;min-height:180px;padding:8px";
  for (let i = 1; i <= 5; i++) {
    const box = document.createElement("div");
    box.textContent = i;
    box.style.cssText = "background:var(--accent);color:#fff;padding:0.7rem 1rem;border-radius:6px;font:bold 1.1rem monospace";
    if (i === 3) box.style.padding = "1.4rem 1rem"; // one taller item makes align-items visible
    stage.appendChild(box);
  }
  const css = document.createElement("pre");
  const update = () => {
    let text = ".container {\n  display: flex;\n";
    controls.querySelectorAll("select").forEach((s) => {
      stage.style.setProperty(s.dataset.prop, s.value);
      text += `  ${s.dataset.prop}: ${s.value};\n`;
    });
    css.textContent = text + "}";
  };
  Object.entries(props).forEach(([prop, values]) => {
    const label = document.createElement("label");
    label.textContent = prop + " ";
    const sel = document.createElement("select");
    sel.dataset.prop = prop;
    values.forEach((v) => sel.appendChild(new Option(v, v)));
    sel.addEventListener("change", update);
    label.appendChild(sel);
    controls.appendChild(label);
  });
  root.append(controls, stage, css);
  update();
});
