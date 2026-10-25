/**
 * measure-heading-colours.mjs — the render side of the HEADING-INK axis.
 *
 * `verify-heading-role-tokens.py` resolves an ink claim through the cascade;
 * this script supplies the fact the cascade is checked against: the computed
 * `color` of every heading the browser actually PAINTS (a heading with no box,
 * a `0`-height hidden one, or one inside a `display:none` menu is not ink), plus
 * the body colour a colourless heading inherits from.
 *
 * Output shape (consumed by `--measured`):
 *
 *   { "<slug>": { "headingColours": { "rgb(0, 0, 0)": 6 },
 *                 "headings": [ { tag, cls, color, size, w, h } … ],
 *                 "body": { "color": "rgb(33, 37, 41)" }, … } }
 *
 * Playwright lives in /root/free-templates-firebase/node_modules (the Python
 * package is not installed in this container) and `networkidle` hangs on the
 * preview host — hence domcontentloaded + a fixed wait.
 *
 *   cat > /tmp/urls.json <<'EOF'
 *   [{"slug":"dropdown-07","url":"https://preview.colorlib.com/theme/bootstrap/dropdown-07/"}]
 *   EOF
 *   node scripts/measure-heading-colours.mjs /tmp/urls.json /tmp/hm.json
 */
import { chromium } from '/root/free-templates-firebase/node_modules/playwright/index.mjs';
import fs from 'fs';

const urls = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const out = process.argv[3];

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1440, height: 900 } });

const probe = () => {
  const cs = (el, p) => getComputedStyle(el).getPropertyValue(p);
  const rec = (el) => {
    const r = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(),
      cls: (el.className && String(el.className).slice(0, 50)) || '',
      text: (el.textContent || '').trim().slice(0, 40),
      color: cs(el, 'color'),
      size: cs(el, 'font-size'),
      family: cs(el, 'font-family').slice(0, 40),
      w: Math.round(r.width),
      h: Math.round(r.height),
    };
  };
  // only headings with a painted box count as ink: hidden menus, 0-height
  // headings and `display:none` siblings are structure, not colour.
  const all = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
  const painted = all.filter((el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return r.height > 0 && r.width > 0 && s.visibility !== 'hidden' &&
           s.opacity !== '0' && (el.textContent || '').trim().length > 0;
  });
  const headingColours = {};
  for (const h of painted) {
    const c = cs(h, 'color');
    headingColours[c] = (headingColours[c] || 0) + 1;
  }
  return {
    headings: painted.slice(0, 24).map(rec),
    headingColours,
    headingTotal: all.length,
    paintedTotal: painted.length,
    body: { color: cs(document.body, 'color'), bg: cs(document.body, 'background-color') },
  };
};

const res = {};
for (const { slug, url } of urls) {
  try {
    await pg.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await pg.waitForTimeout(700);
    // lazy hero/section imagery below the fold can leave headings unlaid-out
    await pg.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await pg.waitForTimeout(300);
    res[slug] = await pg.evaluate(probe);
  } catch (e) {
    res[slug] = { error: String(e).slice(0, 140) };
  }
  process.stderr.write(slug + ' ');
}
await b.close();
fs.writeFileSync(out, JSON.stringify(res, null, 1));
console.log('\nwrote ' + out + ' (' + Object.keys(res).length + ' slugs)');
