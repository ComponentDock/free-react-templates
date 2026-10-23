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
"""
from __future__ import annotations

import json
import os
import re

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")

_CAT = None                 # slug -> absolute demo URL
_CACHE_PATH = None
_MEMO: dict = {}
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


def demo(fetch, slug, name=None, aliases=None):
    """(url, html) for the slug's live demo, or (None, "").

    Tries: skill alias map -> catalog[slug] -> catalog[name] -> the caller's
    own ladder (`aliases` is a callable taking the slug).
    """
    if os.environ.get("NO_CATALOG"):      # A/B control: the pre-patch ladder only
        return (None, "")
    key = (slug, name)
    if key in _MEMO:
        return _MEMO[key]
    cat = urls(fetch)
    cands = []
    if aliases and name and name in aliases:
        cands.append(aliases[name].get("url") or aliases[name])
    for k in (slug, name):
        if k and k in cat:
            cands.append(cat[k])
    # de-hyphenated spelling the ladder never tries (`faith-2` -> `/theme/faith2/`)
    if slug and "-" in slug:
        cands.append("https://preview.colorlib.com/theme/"
                     + slug.replace("-", "") + "/")
    for url in [c for c in cands if isinstance(c, str)]:
        if not url.startswith("http"):
            url = "https://preview.colorlib.com/theme/" + url.strip("/") + "/"
        code, body = fetch(url)
        if str(code) == "200" and len(body) > MIN_BYTES:
            _MEMO[key] = (url, body.decode("utf-8", "replace"))
            return _MEMO[key]
    _MEMO[key] = (None, "")
    return _MEMO[key]
