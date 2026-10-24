#!/usr/bin/env python3
"""catalog_resolve.py — resolve a ColorLib source slug to its LIVE demo URL.

The preview host publishes its own authoritative slug -> demo map in
`assets/js/catalog-products-*.js` (`Object.assign($products, {…})` and
`colorlibPreviewAliases`). The token-layer verifiers historically walked a
three-prefix ladder (`/theme/<slug>/`, `/theme/bootstrap/<slug>/`,
`/etc/<slug>/`), which misses every family whose demo lives elsewhere
(`/etc/bwiz/…`, `/etc/bforms/…`, `/etc/lf/Login_v17/index.html`,
`/theme/<slug without hyphen>/`). Measured 2026-10-23 on verify-margin-tokens:
158 of 486 specs were reported "dead" when the demo was live and reachable.

Usage from a verifier:

    import catalog_resolve as CR
    CR.configure(fetch, cache_dir)          # once, after the Fetcher exists
    url, html = CR.demo(fetch, slug, name)  # catalog first, then the caller's ladder

`demo()` returns (None, "") when nothing resolves, so the caller keeps its own
"dead" bucket. Resolution is cached per slug for the life of the process.

COLLISION-AWARE (2026-10-24y). The map can key TWO different posts to ONE demo
directory (8 such directories — see `docs/catalog-collisions.md`). Resolving
catalogue-first then measures a spec against its SIBLING's page. When the
resolved URL is claimed by more than one PRODUCT entry, the slug's own
`/theme/<slug>/` is probed and preferred if it answers 200 with a DIFFERENT
body (`via="slug-own"`). A 200 alone never adjudicates identity, so the body
digest is the deciding fact; when the slug owns the directory (`theme/listed/`
for `listed`) the bodies match and nothing changes.
"""
from __future__ import annotations

import hashlib
import json
import os
import re

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")

_CAT = None                 # slug -> absolute demo URL
_CACHE_PATH = None
_MEMO: dict = {}
_COLLIDE = None             # absolute demo URL -> # of PRODUCT entries claiming it
MIN_BYTES = 500             # thin `/theme/bootstrap/*` demos are real (1,051 B)


def load_catalog(fetch, cache_path=None):
    """slug -> raw catalog entry. Cached to `cache_path` when given."""
    global _CAT, _CACHE_PATH
    if _CAT is not None:
        return _CAT
    _CACHE_PATH = cache_path
    if cache_path and os.path.exists(cache_path):
        try:
            _CAT = json.load(open(cache_path))
            return _CAT
        except Exception:
            pass
    out = {}
    code, body = fetch("https://preview.colorlib.com/")
    if str(code) != "200" or not body:
        _CAT = out
        return out
    root = body.decode("utf-8", "replace")
    names = sorted(set(re.findall(
        r"assets/js/catalog-products-[A-Za-z0-9._-]+\.js", root)))
    for name in names:
        code, js = fetch("https://preview.colorlib.com/" + name)
        if str(code) != "200" or not js:
            continue
        blob = js.decode("utf-8", "replace")
        for rx in (r"Object\.assign\(\s*\$products\s*,\s*(\{.*?\})\s*\)",
                   r"colorlibPreviewAliases\s*=\s*(\{.*?\})\s*;"):
            m = re.search(rx, blob, re.S)
            if not m:
                continue
            try:
                out.update(json.loads(m.group(1)))
            except Exception:
                pass
    _CAT = out
    if cache_path and out:
        try:
            os.makedirs(os.path.dirname(cache_path), exist_ok=True)
            json.dump(out, open(cache_path, "w"))
        except Exception:
            pass
    return out


def urls(fetch, cache_path=None):
    """slug -> absolute demo URL (a relative entry is a demo DIRECTORY)."""
    cat = load_catalog(fetch, cache_path)
    out = {}
    for k, v in cat.items():
        url = v.get("url") if isinstance(v, dict) else v
        if not isinstance(url, str):
            continue
        if url.startswith("http"):
            out.setdefault(k, url)
        elif re.match(r"^[\w./-]+$", url):
            out.setdefault(k, "https://preview.colorlib.com/theme/"
                           + url.strip("/") + "/")
    return out


def configure(fetch, cache_dir=None):
    """Warm the map (and persist it under `cache_dir`) — call once."""
    if cache_dir is None:
        return {}
    return urls(fetch, os.path.join(cache_dir, "catalog-map.json"))


def _abs(url):
    """Normalise a catalogue `url` value to the absolute demo directory."""
    if not isinstance(url, str) or not url:
        return None
    if not url.startswith("http"):
        url = "https://preview.colorlib.com/theme/" + url.strip("/") + "/"
    return url


def claim_counts(fetch):
    """absolute demo URL -> how many catalogue PRODUCT entries claim it.

    Alias entries (`colorlibPreviewAliases`, stored as plain strings) are
    excluded: an alias is one post's other spelling, not a second post.
    """
    global _COLLIDE
    if _COLLIDE is None:
        counts: dict = {}
        for _k, v in load_catalog(fetch).items():
            if not isinstance(v, dict):
                continue
            a = _abs(v.get("url"))
            if a:
                counts[a] = counts.get(a, 0) + 1
        _COLLIDE = counts
    return _COLLIDE


def is_colliding(fetch, url):
    """True when the catalogue keys TWO designs to this one directory."""
    return claim_counts(fetch).get(url, 0) > 1


def _digest(body):
    return hashlib.sha256(body or b"").hexdigest()


def _reset():
    """Drop every memo (used by the self-test; verifiers never need it)."""
    global _CAT, _COLLIDE
    _CAT = None
    _COLLIDE = None
    _MEMO.clear()


def _fixture_fetch(pages):
    """A `fetch` over a dict of absolute URL -> (code, body) + a hit counter."""

    class _Fetch:
        def __init__(self):
            self.hits: list = []

        def __call__(self, url):
            self.hits.append(url)
            return pages.get(url, (404, b""))

    return _Fetch()


def _self_test():
    """Controls for the collision-aware path. Exit 0 = pass."""
    import sys

    def page(tag, pad=600):
        return ("<html><title>%s</title>%s</html>" % (tag, "x" * pad)).encode()

    root = ("<html><script src=\"assets/js/catalog-products-test.js\"></script>"
            "</html>").encode()
    js = ('Object.assign($products, {"alpha":{"url":"one"},'
          '"beta":{"url":"shared"},"gamma":{"url":"shared"},'
          '"delta":{"url":"shared2"},"eps":{"url":"shared2"},'
          '"zeta":{"url":"dead"}});'
          'colorlibPreviewAliases = {"gamma-2":"gamma"};').encode()
    P = "https://preview.colorlib.com/"
    base = {P: (200, root), P + "assets/js/catalog-products-test.js": (200, js),
            P + "theme/one/": (200, page("one")),
            P + "theme/shared/": (200, page("sibling")),
            P + "theme/shared2/": (200, page("delta page")),
            P + "theme/beta/": (200, page("beta page")),   # the map never records it
            P + "theme/delta/": (200, page("delta page")),  # same document
            P + "theme/dead/": (200, page("dead page"))}
    got = []

    def check(label, want, pages=None):
        _reset()
        os.environ.pop("NO_CATALOG", None)
        f = _fixture_fetch(pages or base)
        url, html, via = demo_via(f, label[0], None, None)
        ok = (url, via) == want
        got.append(ok)
        print("%s %-34s -> %s via=%s (want %s via=%s)"
              % ("PASS" if ok else "FAIL", label[0], url, via, want[0], want[1]))
        return f

    # 1. no collision: the map entry is used, and the slug's own dir is NOT probed
    f = check(("alpha",), (P + "theme/one/", "slug"))
    extra = [h for h in f.hits if h.endswith("/theme/alpha/")]
    ok = not extra
    got.append(ok)
    print("%s non-colliding slug makes no own-dir probe (%d extra)"
          % ("PASS" if ok else "FAIL", len(extra)))

    # 2. colliding dir, slug's own dir exists with a DIFFERENT body -> slug-own
    check(("beta",), (P + "theme/beta/", "slug-own"))

    # 3. the slug that OWNS the colliding dir: same body -> unchanged
    check(("delta",), (P + "theme/shared2/", "slug"))

    # 4. colliding dir, slug's own dir 404s -> sibling (unchanged behaviour)
    check(("gamma",), (P + "theme/shared/", "slug"))

    # 5. a non-colliding map entry resolves as before even when the slug's own
    #    dir does not exist (no probe fires, no behaviour change)
    _reset()
    f = _fixture_fetch(base)
    url, _html, via = demo_via(f, "zeta", None, {"zeta": "dead"})
    ok = (url, via) == (P + "theme/dead/", "slug")
    got.append(ok)
    print("%s non-colliding entry, dead own dir: unchanged     -> %s via=%s"
          % ("PASS" if ok else "FAIL", url, via))

    # 6. NO_CATALOG=1 stays the A/B control
    _reset()
    os.environ["NO_CATALOG"] = "1"
    try:
        f = _fixture_fetch(base)
        url, html, via = demo_via(f, "beta")
    finally:
        os.environ.pop("NO_CATALOG", None)
    ok = (url, html, via) == (None, "", None) and not f.hits
    got.append(ok)
    print("%s NO_CATALOG=1 short-circuits with no fetch       -> %r"
          % ("PASS" if ok else "FAIL", (url, via)))

    print("\n%d/%d controls" % (sum(got), len(got)))
    return 0 if all(got) else 1


def demo(fetch, slug, name=None, aliases=None):
    """(url, html) for the slug's live demo, or (None, "")."""
    url, html, _via = demo_via(fetch, slug, name, aliases)
    return url, html


def demo_via(fetch, slug, name=None, aliases=None):
    """(url, html, via) — `via` names the entry that matched.

    `via` matters for identity: a demo matched on the INVENTED app name
    (`catalog[name]`) is not proof that this slug resolves there — the name can
    collide with a different ColorLib design.  Callers that make a
    reference-identity claim must not treat `via == "name"` as proof.
    """
    if os.environ.get("NO_CATALOG"):      # A/B control: the pre-patch ladder only
        return (None, "", None)
    key = (slug, name)
    if key in _MEMO:
        return _MEMO[key]
    cat = urls(fetch)
    cands = []
    if aliases and name and name in aliases:
        cands.append(aliases[name].get("url") or aliases[name])
    for k in (slug, name):
        if k and k in cat:
            cands.append((cat[k], "slug" if k == slug else "name"))
    # de-hyphenated spelling the ladder never tries (`faith-2` -> `/theme/faith2/`)
    if slug and "-" in slug:
        cands.append(("https://preview.colorlib.com/theme/"
                      + slug.replace("-", "") + "/", "dehyphenated"))
    # the alias map entry is a caller-supplied skill table: identity-proven
    cands = [c if isinstance(c, tuple) else (c, "alias") for c in cands]
    for url, via in cands:
        if not isinstance(url, str):
            continue
        if not url.startswith("http"):
            url = "https://preview.colorlib.com/theme/" + url.strip("/") + "/"
        code, body = fetch(url)
        if str(code) == "200" and len(body) > MIN_BYTES:
            html = body.decode("utf-8", "replace")
            # COLLISION: two posts claim this directory → this slug may have its
            # own live directory that the map never records. Prefer it only when
            # the page is a DIFFERENT document (a 200 proves existence, never
            # identity).
            if slug and is_colliding(fetch, url):
                own = ("https://preview.colorlib.com/theme/"
                       + slug.strip("/") + "/")
                if own != url:
                    code2, body2 = fetch(own)
                    if (str(code2) == "200" and len(body2) > MIN_BYTES
                            and _digest(body2) != _digest(body)):
                        _MEMO[key] = (own,
                                      body2.decode("utf-8", "replace"),
                                      "slug-own")
                        return _MEMO[key]
            _MEMO[key] = (url, html, via)
            return _MEMO[key]
    _MEMO[key] = (None, "", None)
    return _MEMO[key]


if __name__ == "__main__":
    import sys
    sys.exit(_self_test() if "--self-test" in sys.argv else
             print(__doc__) or 0)
