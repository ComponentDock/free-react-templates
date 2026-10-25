/**
 * measure-paragraph-colours.mjs — the render side of the BODY-TEXT axis.
 *
 * `verify-body-role-tokens.py` resolves a claim through the cascade; this
 * script supplies the fact the cascade is checked against: the computed colour
 * of every `<p>` the browser actually paints, plus the body colour every
 * paragraph inherits from. Output shape (consumed by `--measured`):
 *
 *   { "<slug>": { "paraColours": { "rgb(119, 119, 119)": 2 },
 *                 "body": { "color": "rgb(33, 37, 41)", ... }, … } }
 *
 * Playwright lives in /root/free-templates-firebase/node_modules (the Python
 * package is not installed in this container) and networkidle hangs on the
 * preview host — hence domcontentloaded + a fixed wait.
 *
 *   cat > /tmp/urls.json <<'EOF'
 *   [{"slug":"academica","url":"https://preview.colorlib.com/theme/academica/"}]
 *   EOF
 *   node scripts/measure-paragraph-colours.mjs /tmp/urls.json /tmp/m.json
 */
import { chromium } from '/root/free-templates-firebase/node_modules/playwright/index.mjs';
import fs from 'fs';

const urls = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const out = process.argv[3];

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1440, height: 900 } });

const probe = () => {
  const cs = (el, p) => getComputedStyle(el).getPropertyValue(p);
  const rec = (el) => ({
    tag: el.tagName.toLowerCase(),
    cls: (el.className && String(el.className).slice(0, 50)) || '',
    color: cs(el, 'color'),
    bg: cs(el, 'background-color'),
    bgImg: cs(el, 'background-image').slice(0, 70),
    font: cs(el, 'font-family').slice(0, 60),
  });
  const paras = Array.from(document.querySelectorAll('p')).slice(0, 12).map(rec);
  const paraColours = {};
  for (const p of paras) paraColours[p.color] = (paraColours[p.color] || 0) + 1;
  const footSel = 'footer, .footer-area, .site-footer, .footer-section, .colorlib-footer, #footer';
  return {
    paras,
    paraColours,
    body: rec(document.body),
    footers: Array.from(document.querySelectorAll(footSel)).slice(0, 4).map(rec),
    footerTexts: Array.from(document.querySelectorAll(footSel + ' p, ' + footSel + ' li, ' + footSel + ' a'))
      .slice(0, 5).map(rec),
  };
};

const res = {};
for (const { slug, url } of urls) {
  try {
    await pg.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await pg.waitForTimeout(600);
    res[slug] = await pg.evaluate(probe);
  } catch (e) {
    res[slug] = { error: String(e).slice(0, 140) };
  }
  process.stderr.write(slug + ' ');
}
await b.close();
fs.writeFileSync(out, JSON.stringify(res, null, 1));
console.log('\nwrote ' + out + ' (' + Object.keys(res).length + ' slugs)');
