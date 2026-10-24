#!/usr/bin/env python3
"""verify-app-live-tokens-controls.py — control harness for the APP↔LIVE axis.

Mutation-based, fully offline: every case builds a synthetic prep root (one app
with a `src/index.css`, its spec, and a PRE-SEEDED fetch cache for one demo page
+ one theme sheet) in a tmpdir, runs the axis in-process and asserts the bucket.

A control that cannot fail proves nothing, so the GATE cases disable ONE guard
in the verifier and assert that the payload then fires:

  c02 the flag itself           (the app repaints the design's lead colour)
  c03 `.no-scaffold`            (a colour 67 of 594 previews paint is excluded)
  c04 `selector_in_markup`      (a kit block the page never instantiates)
  c05 `SELECTION_RX`            (`::selection` is a state, not a surface)
  c06 `st["wid"]`               (painted only by a library widget)
  c07 `POSITIONAL_RX`           (a share row paints by nth-child)
  c08 `MODERN_BUILD_RX`         (a rebuilt demo is drift, not debt)
  c09 `kit_variants`/`KIT_MIN`  (a colour-variant button kit has no brand)
  c10 `FRAMEWORK`               (the app's brand is a library default)
  c11 `lead_covered`            (the app paints the design AND an extra hue)
  c12 `HUE_TOL`                 (a shade of the lead hue is not a foreign colour)
  c13 the `strong` bar          (an `li a:before` dot is not a palette)

Run: python3 scripts/verify-app-live-tokens-controls.py   # expects 25/25 (15 GATE)
"""
from __future__ import annotations

import contextlib
import hashlib
import importlib.util
import io
import json
import os
import sys
import tempfile
import types
import urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, "verify-app-live-tokens.py")


def _load(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:                 # pragma: no cover
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    sys.modules[name] = mod
    spec.loader.exec_module(mod)
    return mod


V = _load(VER, "val_controls")
os.environ["NO_CATALOG"] = "1"        # the ladder only: one seeded URL per case

def app_css(brand: str) -> str:
    """The app's own palette declaration (`@theme` token, the house pattern)."""
    return ("@import 'tailwindcss';\n@theme {\n  --color-brand: " + brand + ";\n}\n")


def seed(cache: str, url: str, body: str, code: str = "200") -> None:
    """Write one URL into `verify-live-tokens.Fetcher`'s on-disk cache."""
    p = os.path.join(cache, hashlib.sha1(url.encode()).hexdigest())
    with open(p, "w", encoding="utf-8") as fh:
        fh.write(body)
    json.dump({"code": code, "url": url, "bytes": len(body)}, open(p + ".json", "w"))


def build(slug: str, app_css: str, sheet_css: str, *, markup: str | None = None,
          sheet_name: str = "css/style.css", spec: bool = True,
          app: str = "alpha", title: str = "Demo",
          category: str = "Business"):
    """A synthetic root with an app, its spec, and one cached demo + sheet."""
    root = tempfile.mkdtemp(prefix="applive-")
    src = os.path.join(root, "apps", app, "src")
    os.makedirs(src)
    open(os.path.join(src, "index.css"), "w").write(app_css)
    if spec:
        d = os.path.join(root, "openspec", "specs", "template-" + app)
        os.makedirs(d)
        open(os.path.join(d, "spec.md"), "w").write(
            f"# Template: Alpha ({category})\n\n## Purpose\n\nRecreation of the source\n"
            f"design (preview https://preview.colorlib.com/theme/{slug}/).\n\n"
            f"- **Source slug:** `{slug}`\n\n## Requirements\n")
    cache = os.path.join(root, "cache")
    os.makedirs(cache)
    demo = f"https://preview.colorlib.com/theme/{slug}/"
    body = markup if markup is not None else '<div class="hero"><a class="btn">Go</a></div>'
    # the ladder treats a page under 1,200 B as "dead" (a real demo is 20–100 kB)
    pad = "<!-- " + ("demo page padding. " * 80) + "-->"
    seed(cache, demo, f'<html><head><title>{title}</title>'
                      f'<link rel="stylesheet" href="{sheet_name}"></head>'
                      f'<body>{body}{pad}</body></html>')
    seed(cache, urllib.parse.urljoin(demo, sheet_name), sheet_css)
    return root, cache


def args_for(cache: str):
    return types.SimpleNamespace(jobs=1, cache=cache, no_scaffold=False,
                                 slug=None, limit=None)


def audit(root: str, cache: str, app: str = "alpha", scaffold=frozenset()):
    f = V.VT.Fetcher(cache, False)          # --no-net: cache only
    bucket, row, notes = V.audit_app(root, app, f, args_for(cache), scaffold)
    return bucket, row, notes


# ---------------------------------------------------------------- sheet pieces
def btn_rule(hexes, sel=".btn", n=3):
    """`n` background rules on a design selector — the shape of a real brand."""
    return "\n".join(f"{sel}{'' if i == 0 else '-x' + str(i)}{{background:{h};}}"
                     for i, h in enumerate([hexes] * n)) if isinstance(hexes, str) else \
           "\n".join(f"{sel}{'' if i == 0 else '-x' + str(i)}{{background:{hexes[i % len(hexes)]};}}"
                     for i in range(n))


def hero(hexcode, n=3):
    return "\n".join(f".hero-{i}{{background:{hexcode};}}" for i in range(n)) + \
           "\n.nav a{background:" + hexcode + ";}\n.btn{background:" + hexcode + ";color:#fff;}"


LEAD = "#d6a04c"


# ---------------------------------------------------------------------- cases
def c01():  # the app paints the design's lead colour: MATCH
    root, cache = build("alpha-match", app_css(LEAD), hero(LEAD))
    b, row, _n = audit(root, cache)
    assert b == "MATCH", (b, row)


def c02():  # GATE — the app repaints the lead: LIVE-UNPAINTED
    root, cache = build("alpha-repaint", app_css("#1464cc"), hero(LEAD))
    b, row, _n = audit(root, cache)
    assert b == "LIVE-UNPAINTED", (b, row)
    assert row["unpainted"][0]["hex"] == LEAD, row["unpainted"]


def c03():  # GATE — the LEAD is a SCAFFOLD colour (67 of 594 previews paint it)
    scaff = "#38a4ff"
    wide = "\n".join(f".s{i}{{background:{scaff};}}" for i in range(6))
    root, cache = build("alpha-scaffold", app_css(LEAD), hero(LEAD) + "\n" + wide)
    b1, r1, _n = audit(root, cache)
    assert b1 == "LIVE-UNPAINTED", (b1, r1["live_core"])   # the scaffold leads
    b2, r2, _n = audit(root, cache, scaffold=frozenset({scaff}))
    assert b2 != "LIVE-UNPAINTED", (b2, r2["live_core"])  # excluded → the design leads
    assert b2 == "MATCH", (b2, r2["live_core"])


def c04():  # GATE — the colour is in a kit block the page never instantiates
    css = ".genric-btn.primary{background:#ff5e13;}\n" * 3
    root, cache = build("alpha-kit", app_css("#1464cc"), css,
                        markup='<div class="hero">x</div>')
    b, _r, _n = audit(root, cache)
    assert b == "NO-DESIGN-COLOUR", b


def c05():  # GATE — a `::selection` colour is not a surface
    css = "::selection{background:#cce2ff;}\n::-moz-selection{background:#cce2ff;}"
    root, cache = build("alpha-sel", app_css("#1464cc"), css)
    b, _r, _n = audit(root, cache)
    assert b == "NO-DESIGN-COLOUR", b


def c06():  # GATE — painted only by a library widget's own chrome
    css = ".nice-select .list .option.selected{background:#8e24aa;}\n" * 3
    root, cache = build("alpha-widget", app_css("#1464cc"), css,
                        markup='<div class="nice-select"><div class="list">x</div></div>')
    b, _r, _n = audit(root, cache)
    assert b != "LIVE-UNPAINTED", b


def c07():  # GATE — a share row paints its icons by position
    css = ("footer ul li:nth-child(4) a{background:#007ab9;}\n"
           ".share-icon li:nth-child(4) a:hover{background:#007ab9;}\n"
           "footer ul li:nth-child(4) a:hover{background:#007ab9;}")
    root, cache = build("alpha-share", app_css("#1464cc"), css,
                        markup='<footer><ul><li><a>in</a></li></ul></footer>')
    b, _r, _n = audit(root, cache)
    assert b != "LIVE-UNPAINTED", b


def c08():  # GATE — a rebuilt demo (`Base.xxxxxxxx.css`) is drift, not debt
    sheet = ".btn{background:#5635ea;}\n" * 3
    root, cache = build("alpha-reskin", app_css("#d73e4d"), sheet,
                        sheet_name="Base.DSJ9xNgp.css")
    b, _r, _n = audit(root, cache)
    assert b in ("RESKIN", "RESKIN-KEPT"), b


def c09():  # GATE — a colour-variant BUTTON kit has no single brand
    # two non-state design selectors per variant: that is what makes the colour
    # "strong" enough to be a palette subject in the first place
    css = "\n".join(f".cl-btn.cl-btn-{k}{{background:{h};}}\n"
                    f".cl-btn.cl-btn-{k}.cl-btn-lg{{background:{h};}}\n"
                    f".cl-btn.cl-btn-{k}:hover{{background:{h};}}"
                    for k, h in (("secondary", "#bd83ce"), ("tertiary", "#8105d8"),
                                 ("quarternary", "#52de97"), ("primary", "#3e64ff")))
    root, cache = build("alpha-btnkit", app_css("#1464cc"), css,
                        markup='<div class="cl-btn cl-btn-secondary">x</div>')
    b, _r, notes = audit(root, cache)
    assert b == "NO-DESIGN-COLOUR", b
    assert any(k == "KIT-SHEET" for k, *_ in notes), notes


def c10():  # GATE — the app's brand is a FRAMEWORK default, not a design hue
    root, cache = build("alpha-framework", app_css("#007bff"), hero(LEAD))
    # the app also paints the lead, so only direction 2 could fire
    open(os.path.join(root, "apps", "alpha", "src", "extra.css"), "w").write(
        f".hero-0{{background:{LEAD};}}")
    b, _r, notes = audit(root, cache)
    assert b == "MATCH", b
    assert any(k == "FRAMEWORK-BRAND" for k, *_ in notes), notes


def c11():  # GATE — the app paints the design's lead AND an extra hue
    css = hero(LEAD) + f"\n.tag{{background:{LEAD};}}"
    root, cache = build("alpha-extra", app_css("#6dab3c"), css)
    open(os.path.join(root, "apps", "alpha", "src", "extra.css"), "w").write(
        f".lead-paint{{background:{LEAD};}}")
    b, _r, notes = audit(root, cache)
    # the design's lead IS painted, so this is never the flag; the app's own
    # brand is a foreign hue, which is what EXTRA-HUE records (`SHADE-DRIFT`
    # is the honest bucket: the app's brand is not a live hue)
    assert b != "LIVE-UNPAINTED", b
    assert any(k == "EXTRA-HUE" for k, *_ in notes), notes


def c12():  # GATE — a shade of the lead hue (Δ > TOL, same hue) is not foreign
    shade = "#b98a3c"                    # Δ 29 from #d6a04c, same hue family
    css = hero(LEAD) + f"\n.tag{{background:{shade};}}"
    root, cache = build("alpha-shade", app_css(shade), css)
    open(os.path.join(root, "apps", "alpha", "src", "extra.css"), "w").write(
        f".lead-paint{{background:{LEAD};}}")
    b, _r, _n = audit(root, cache)
    assert b != "LIVE-UNPAINTED", b


def c13():  # GATE — a single `li a:before` dot is not a palette
    css = ".custom-menu li a:before{background:#f16947;}"
    root, cache = build("alpha-accent", app_css("#28a745"), css,
                        markup='<ul class="custom-menu"><li><a>x</a></li></ul>')
    b, _r, _n = audit(root, cache)
    assert b == "NO-DESIGN-COLOUR", b


def c14():  # every linked sheet is a vendor bundle
    root, cache = build("alpha-vendor", app_css(LEAD), ".btn{background:%s;}" % LEAD,
                        sheet_name="css/bootstrap.css")
    b, _r, _n = audit(root, cache)
    assert b == "NO-THEME-SHEET", b


def c15():  # no demo in the cache at all
    root, cache = build("alpha-dead", app_css(LEAD), hero(LEAD))
    os.remove(os.path.join(cache, hashlib.sha1(
        "https://preview.colorlib.com/theme/alpha-dead/".encode()).hexdigest() + ".json"))
    b, _r, _n = audit(root, cache)
    assert b == "REF-DEAD", b


def c16():  # an app with no prep spec
    root, cache = build("alpha-nospec", app_css(LEAD), hero(LEAD), spec=False)
    b, _r, _n = audit(root, cache)
    assert b == "NO-SPEC", b


def c17():  # an alias prep (`prep-status: shipped-as=`) is never built from
    root, cache = build("alpha-alias", app_css(LEAD), hero(LEAD))
    p = os.path.join(root, "openspec", "specs", "template-alpha", "spec.md")
    open(p, "a").write("\nprep-status: shipped-as=beta\n")
    b, _r, _n = audit(root, cache)
    assert b == "ALIAS-SKIP", b


def c18():  # demo resolved on the INVENTED name only: identity unproven
    root, cache = build("alpha-ambig", app_css(LEAD), hero(LEAD))
    real = V.VT.resolve_preview
    V.VT.resolve_preview = lambda f, slug, name="": (
        f"https://preview.colorlib.com/theme/{slug}/",
        f'<html><head><link rel="stylesheet" href="css/style.css"></head></html>',
        [], "name")
    try:
        b, _r, _n = audit(root, cache)
    finally:
        V.VT.resolve_preview = real
    assert b == "DEMO-AMBIGUOUS", b


def c19():  # determinism: two cold runs are byte-identical (no hash-order leaks)
    root, cache = build("alpha-det", app_css("#1464cc"),
                        hero(LEAD) + hero("#6d5ce7"))
    a = json.dumps(audit(root, cache)[1], sort_keys=True)
    b = json.dumps(audit(root, cache)[1], sort_keys=True)
    assert a == b, "row is not reproducible"


def c20():  # exit code: a flag exits 1, a clean corpus exits 0
    def code_for(root, cache):
        out = os.path.join(root, "out.json")
        sys.argv = ["x", "--prep-root", root, "--cache", cache, "--no-net",
                    "--json", out]
        buf = io.StringIO()
        with contextlib.redirect_stdout(buf):
            try:
                return V.main()
            except SystemExit as e:
                return e.code

    flagged, fcache = build("alpha-exit1", app_css("#1464cc"), hero(LEAD))
    assert code_for(flagged, fcache) == 1
    clean, ccache = build("alpha-exit0", app_css(LEAD), hero(LEAD))
    assert code_for(clean, ccache) == 0


def c21():  # the SCAFFOLD census reads the whole run, not one app
    root, cache = build("alpha-sc", app_css(LEAD), hero(LEAD))
    f = V.VT.Fetcher(cache, False)
    names = ["alpha"]
    got = V.scaffold_colours(root, f, args_for(cache), names)
    assert isinstance(got, frozenset), got


def c22():  # GATE — the preps OWN category says widget demo: not a page design
    root, cache = build("alpha-kitdemo", app_css("#1464cc"), hero(LEAD),
                        category="Accordion UI Component")
    b, _r, _n = audit(root, cache)
    assert b == "KIT-DEMO", b
    root2, cache2 = build("alpha-kitdemo2", app_css("#1464cc"), hero(LEAD),
                          category="Pizza Restaurant Landing")
    b2, _r, _n = audit(root2, cache2)
    assert b2 == "LIVE-UNPAINTED", b2


def c23():  # GATE — the library's own STATE ramp is not a design surface
    # Bootstrap 5 paints `#0b5ed7` for `.btn-primary:hover`/`:focus`, Δ13 from
    # its own `#0d6efd`.  With the guard the faithful app is a MATCH; without it
    # the ramp becomes a design colour the app "omits" — a LIVE-ACCENT-MISSING
    # note against an app that is right (`meadow`/`medair`/`terra`, 2026-10-24).
    ramp = ("\n.btn-primary:hover{background:#0b5ed7;}\n"
            ".btn-primary:focus{background:#0b5ed7;}\n"
            ".btn-primary:active{background:#0b5ed7;}\n"
            ".btn-outline-primary:hover{background:#0b5ed7;}")
    # the page has to INSTANTIATE the framework class, or `selector_in_markup`
    # drops it for a different reason and the case proves nothing (c04)
    root, cache = build("alpha-ramp", app_css(LEAD), hero(LEAD) + ramp,
                        markup='<div class="hero"><a class="btn btn-primary">Go</a></div>')
    b1, r1, _n = audit(root, cache)
    assert b1 == "MATCH", (b1, r1["live_core"])
    assert "#0b5ed7" not in r1["live_core"], r1["live_core"]
    keep = getattr(V, "FW_SHADE")
    try:
        setattr(V, "FW_SHADE", False)
        b2, r2, _n = audit(root, cache)
    finally:
        setattr(V, "FW_SHADE", keep)
    assert b2 == "LIVE-ACCENT-MISSING", (b2, r2["live_core"])
    assert r2["unpainted"][0]["hex"] == "#0b5ed7", r2["unpainted"]


def c24():  # the SAME hex on a design selector is the design's, not the library's
    # a theme overriding `.hero-btn:hover` with `#0b5ed7` has chosen it: the
    # guard must not drop a colour just because it is near a framework default
    own = "\n.hero-btn:hover{background:#0b5ed7;}\n.hero-btn:focus{background:#0b5ed7;}\n"
    assert V.framework_shade("#0b5ed7") is True
    assert V.state_ramp([".hero-btn:hover", ".hero-btn:focus"]) is False
    assert V.state_ramp([".btn-primary:hover", ".btn-primary:focus"]) is True
    root, cache = build("alpha-own", app_css(LEAD), hero(LEAD) + own)
    b, r, _n = audit(root, cache)
    assert b == "MATCH", (b, r["live_core"])


def c25():  # GATE — a re-skinned app is REHUE (note) + LIVE-UNPAINTED, not a bucket
    # removed bucket: APP-FOREIGN read 0 over 1,703 apps because a missing lead
    # colour was reported first, so "the app paints another design entirely"
    # had no reachable label.  It is a NOTE on the flag, and this case proves
    # the note fires exactly when no design family is painted.
    root, cache = build("alpha-rehue", app_css("#1464cc"), hero(LEAD))
    b, _r, notes = audit(root, cache)
    assert b == "LIVE-UNPAINTED", b
    assert any(k == "REHUE" for k, *_ in notes), notes
    assert not any(k == "EXTRA-HUE" for k, *_ in notes), notes
    assert "APP-FOREIGN" not in V.BUCKETS, V.BUCKETS
    root2, cache2 = build("alpha-notrehue", app_css("#6dab3c"), hero(LEAD))
    open(os.path.join(root2, "apps", "alpha", "src", "extra.css"), "w").write(
        f".lead-paint{{background:{LEAD};}}")
    b2, _r2, notes2 = audit(root2, cache2)
    assert b2 != "LIVE-UNPAINTED", b2
    assert any(k == "EXTRA-HUE" for k, *_ in notes2), notes2


CASES = [(n, f) for n, f in sorted(globals().items())
         if n.startswith("c") and len(n) == 3 and callable(f)]
GATE = {"c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "c11",
        "c12", "c13", "c22", "c23", "c25"}


def main() -> int:
    bad = []
    for name, fn in CASES:
        try:
            fn()
            print(f"{name} ok{' (GATE)' if name in GATE else ''}")
        except AssertionError as exc:
            bad.append((name, exc))
            print(f"{name} FAIL {exc}")
        except Exception as exc:                          # noqa: BLE001
            bad.append((name, exc))
            print(f"{name} ERROR {type(exc).__name__}: {exc}")
    print(f"\n{len(CASES) - len(bad)}/{len(CASES)} "
          f"({len(GATE)} GATE)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
