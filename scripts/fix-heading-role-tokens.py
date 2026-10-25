#!/usr/bin/env python3
"""fix-heading-role-tokens.py — record the HEADING-INK adjudication inside the prep.

The axis (`verify-heading-role-tokens.py`) resolves every heading-ink token row
through the cascade and then checks the answer against the rendered headings of
the live page (`scripts/measure-heading-colours.mjs`). 683 claims were screened and
87 flagged; two rows restate the same claim, so 85 verdicts ship here — one
idempotent block per claim, the shape `-25e`/`-25f` established:

    <!-- heading-role-tokens: <slug>/ink/<spec> -->
    **Heading-ink role (measured 2026-10-25):** ….
    <!-- /heading-role-tokens -->

Rules (house convention, kept deliberately):
  * the token TABLE is never rewritten — a prep is a historical statement and
    another stream may already have read it; the block is the correction;
  * a claim the render SUPPORTS gets nothing;
  * the block states measured facts (what the literal is declared by, and what
    the headings actually paint), never a guessed replacement value;
  * running twice is a byte-level no-op (the key is the idempotency key).

  python3 scripts/fix-heading-role-tokens.py --dry-run
  python3 scripts/fix-heading-role-tokens.py --apply
  python3 scripts/fix-heading-role-tokens.py --apply --only template-sorbet
"""
from __future__ import annotations

import argparse
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, "openspec", "specs")
STAMP = "measured 2026-10-25"

# slug, spec, row label, claim, kind, rendered headings, declaring selectors, top ink
VERDICTS = [
    ('abcbook', 'template-spine', 'headings', '#1a1a1a', 'unsupported',
     'rgb(31, 43, 123) x24, rgb(255, 255, 255) x5', '', 'rgb(31, 43, 123)'),
    ('auction', 'template-bidwell', 'heading text', '#212529', 'role-misplaced',
     'rgb(255, 255, 255) x14, rgb(0, 0, 0) x11, rgb(243, 113, 33) x11', 'body; .dropdown-menu; .dropdown-item', 'rgb(255, 255, 255)'),
    ('bizpro', 'template-bizpulse', 'heading text', '#373a3f', 'role-misplaced',
     'rgb(41, 41, 41) x43, rgb(255, 255, 255) x4, rgb(105, 111, 120) x3', '#team-section .team-member-wrapper .single-team-member .img .opacity p; #team-section .team-member-wrapper .single-team-member .member-name p', 'rgb(41, 41, 41)'),
    ('careers', 'template-hirepath', 'heading text', '#212529', 'role-misplaced',
     'rgb(23, 36, 62) x21, rgb(255, 255, 255) x2', '.text-bg-info; .text-bg-warning; .text-bg-light', 'rgb(23, 36, 62)'),
    ('carries', 'template-vessel', 'headings', '#1a1a1a', 'role-misplaced',
     'rgb(60, 74, 98) x17, rgb(255, 255, 255) x8, rgb(166, 94, 0) x7', '', 'rgb(60, 74, 98)'),
    ('colorlib-wizard-21', 'template-runemark', 'heading color', '#333333', 'unsupported',
     'no heading', '', ''),
    ('colorlib-wizard-7', 'template-platter', 'ink', '#333333', 'unsupported',
     'rgb(255, 255, 255) x1', '', 'rgb(255, 255, 255)'),
    ('complex', 'template-sitecraft', 'ink', '#111827', 'unsupported',
     'rgb(0, 0, 0) x15, rgb(255, 255, 255) x9, rgba(255, 255, 255, 0.7) x4', '', 'rgb(0, 0, 0)'),
    ('consula', 'template-consultly', 'heading color', '#25262a', 'role-misplaced',
     'rgb(128, 128, 128) x15, rgb(70, 221, 176) x7, rgb(0, 123, 255) x7', '.site-navbar .site-navigation .site-menu .has-children .dropdown > li ; .site-navbar .site-navigation .site-menu .has-children .dropdown > li.; .site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close spa', 'rgb(128, 128, 128)'),
    ('counselor', 'template-zenwell', 'heading color', '#1a1a1a', 'role-misplaced',
     'rgba(0, 0, 0, 0.7) x12, rgb(255, 255, 255) x10, rgb(0, 0, 0) x1', '.categories li a,.sidelink li a', 'rgba(0, 0, 0, 0.7)'),
    ('credo', 'template-snapshot', 'heading text', '#212529', 'role-misplaced',
     'rgb(0, 0, 0) x17, rgb(255, 255, 255) x3', 'body; pre; .table', 'rgb(0, 0, 0)'),
    ('directoryads', 'template-catalog', 'ink', '#1a1a1a', 'unsupported',
     'rgb(77, 77, 77) x26, rgb(255, 255, 255) x6, rgb(47, 137, 252) x4', '', 'rgb(77, 77, 77)'),
    ('direngine', 'template-tripforge', 'heading', '#212529', 'role-misplaced',
     'rgb(0, 0, 0) x28, rgb(255, 255, 255) x6', 'body; .btn-primary; .btn-primary:hover', 'rgb(0, 0, 0)'),
    ('ecoho', 'template-leafhaven', 'heading text', '#140c40', 'role-misplaced',
     'rgb(57, 31, 20) x28, rgb(168, 84, 50) x3, rgb(255, 255, 255) x2', '.contact-info .media-body h3 a:hover; b,sup,sub,u,del; .genric-btn.primary:hover', 'rgb(57, 31, 20)'),
    ('eventalk', 'template-confpeak', 'heading color', '#212529', 'role-misplaced',
     'rgba(0, 0, 0, 0.8) x17, rgb(255, 255, 255) x4, rgb(107, 118, 255) x1', 'body; .btn-primary; .btn-primary:hover', 'rgba(0, 0, 0, 0.8)'),
    ('eventro', 'template-galaflow', 'section title', '#fde449', 'role-misplaced',
     'rgb(48, 32, 114) x12, rgb(255, 255, 255) x4, rgba(255, 255, 255, 0.2) x1', '.boxed-btn; .header-btn; .btn_1:hover', 'rgb(48, 32, 114)'),
    ('fastes', 'template-presto', 'section title', '#7a8290', 'role-misplaced',
     'rgb(20, 12, 64) x14, rgb(255, 255, 255) x7, rgb(253, 143, 95) x3', '.section-tittle p', 'rgb(20, 12, 64)'),
    ('finances', 'template-finscape', 'headings', '#343a40', 'role-misplaced',
     'rgb(0, 0, 0) x28, rgb(0, 123, 255) x17, rgb(255, 255, 255) x11', '.filters .btn', 'rgb(0, 0, 0)'),
    ('fotograp', 'template-fotocast', 'headings', '#000000', 'unsupported',
     'rgb(255, 255, 255) x13, rgb(25, 25, 25) x11', '', 'rgb(255, 255, 255)'),
    ('fotograp', 'template-snapvault', 'headings', '#000000', 'unsupported',
     'rgb(255, 255, 255) x13, rgb(25, 25, 25) x11', '', 'rgb(255, 255, 255)'),
    ('fotograp', 'template-snapvault', 'headings', '#25262a', 'unsupported',
     'rgb(255, 255, 255) x13, rgb(25, 25, 25) x11', '', 'rgb(255, 255, 255)'),
    ('gricklo', 'template-locale', 'ink', '#140c40', 'role-misplaced',
     'rgb(26, 33, 61) x47, rgb(0, 0, 0) x5, rgb(255, 255, 255) x4', '.slider-area form.search-box .input-form input; .login-form-area .login-form .login-heading span; .login-form-area .login-form .input-box .single-input-fields label', 'rgb(26, 33, 61)'),
    ('grunt', 'template-mortar', 'ink', '#1a1a2e', 'unsupported',
     'rgb(0, 0, 0) x12, rgb(189, 18, 32) x7, rgb(255, 255, 255) x3', '', 'rgb(0, 0, 0)'),
    ('kindity', 'template-gracewell', 'heading color', '#04091e', 'role-misplaced',
     'rgb(34, 34, 34) x50, rgb(255, 255, 255) x16, rgb(119, 119, 119) x12', '', 'rgb(34, 34, 34)'),
    ('lantern', 'template-endpaper', 'headings', '#f3f4f6', 'role-misplaced',
     'rgb(17, 24, 39) x19, rgb(255, 255, 255) x10', 'body:is(.dark *)', 'rgb(17, 24, 39)'),
    ('lawfirm', 'template-amicus', 'primary ink', '#1d2227', 'role-misplaced',
     'rgb(255, 255, 255) x22, rgba(0, 0, 0, 0.7) x13, rgb(126, 105, 57) x4', '.ftco-navbar-light.scrolled .navbar-brand; .ftco-navbar-light.scrolled .navbar-brand:hover; .btn.btn-primary', 'rgb(255, 255, 255)'),
    ('lawfirm', 'template-amicus', 'heading text', '#212529', 'role-misplaced',
     'rgb(255, 255, 255) x22, rgba(0, 0, 0, 0.7) x13, rgb(126, 105, 57) x4', '.kit-map__placeholder; body; mark,.mark', 'rgb(255, 255, 255)'),
    ('listed2', 'template-placecraft', 'heading-color', '#000000', 'unsupported',
     'rgb(255, 255, 255) x10, rgb(121, 113, 234) x6, rgb(77, 77, 77) x3', '', 'rgb(255, 255, 255)'),
    ('listio', 'template-listhub', 'heading-color', '#1f2b7b', 'role-misplaced',
     'rgb(20, 12, 64) x29, rgb(7, 35, 102) x6, rgb(0, 31, 56) x3', '.contact-info .media-body h3 a:hover; b,sup,sub,u,del; .genric-btn.primary:hover', 'rgb(20, 12, 64)'),
    ('musico', 'template-largo', '--color-heading', '#1f1f1f', 'role-misplaced',
     'rgb(0, 29, 56) x6, rgb(255, 255, 255) x5', 'a:focus,a:hover,.portfolio-cat a:hover,.footer -menu li a:hover; a,button', 'rgb(0, 29, 56)'),
    ('notary', 'template-oathsworn', '--color-ink', '#999999', 'unsupported',
     'rgb(54, 77, 89) x8, rgb(255, 255, 255) x6, rgb(0, 0, 0) x6', '', 'rgb(54, 77, 89)'),
    ('onemusic', 'template-melodia', 'heading color', '#000000', 'unsupported',
     'rgb(17, 17, 17) x43, rgb(255, 255, 255) x5', '', 'rgb(17, 17, 17)'),
    ('reopen', 'template-curator', '--color-ink', '#222222', 'unsupported',
     'rgb(51, 51, 51) x5', '', 'rgb(51, 51, 51)'),
    ('revive', 'template-rekindle', 'headings', '#000000', 'role-misplaced',
     'rgb(19, 17, 58) x17, rgb(255, 255, 255) x12', '.close; .close:not(:disabled):not(.disabled):focus; .datepicker table tr td.today, .datepicker table tr td.today:hover', 'rgb(19, 17, 58)'),
    ('roofing', 'template-shingle', 'ink', '#212529', 'role-misplaced',
     'rgb(255, 255, 255) x13, rgba(0, 0, 0, 0.8) x10, rgb(217, 186, 43) x4', 'body; mark,.mark; caption', 'rgb(255, 255, 255)'),
    ('schmidt', 'template-clearpoint', '--color-ink', '#1a1a1a', 'unsupported',
     'rgb(34, 34, 34) x1', '', 'rgb(34, 34, 34)'),
    ('schmidt', 'template-craftwork', '--color-ink', '#1a1a1a', 'unsupported',
     'rgb(34, 34, 34) x1', '', 'rgb(34, 34, 34)'),
    ('sharespace', 'template-commune', 'heading ink', '#101a31', 'role-misplaced',
     'rgb(0, 0, 0) x13, rgb(7, 35, 102) x4, rgb(255, 255, 255) x1', '.feature-area .single-offers .offers-cap p', 'rgb(0, 0, 0)'),
    ('skater', 'template-kickflip', 'heading color', '#222222', 'unsupported',
     'rgb(255, 139, 0) x21, rgb(255, 255, 255) x18, rgb(147, 147, 147) x2', '', 'rgb(255, 139, 0)'),
    ('smash', 'template-sorbet', 'heading text', '#212529', 'role-misplaced',
     'rgb(44, 44, 44) x38, rgb(255, 255, 255) x3, rgb(119, 119, 119) x1', 'body; pre; .table', 'rgb(44, 44, 44)'),
    ('specer', 'template-pitchside', 'section title', '#f2f2f2', 'role-misplaced',
     'rgb(255, 255, 255) x38, rgb(17, 17, 17) x19, rgb(21, 22, 24) x6', '', 'rgb(255, 255, 255)'),
    ('spring', 'template-sprout', 'ink', '#212529', 'role-misplaced',
     'rgba(0, 0, 0, 0.8) x16, rgb(255, 255, 255) x7, rgb(0, 0, 0) x6', '.kit-map__placeholder; body; mark,.mark', 'rgba(0, 0, 0, 0.8)'),
    ('store', 'template-bodega', 'heading text', '#333333', 'unsupported',
     'rgb(0, 0, 0) x26, rgb(34, 34, 34) x12, rgb(118, 86, 0) x1', '', 'rgb(0, 0, 0)'),
    ('suites', 'template-regent', 'ink', '#333333', 'unsupported',
     'rgb(0, 0, 0) x48, rgb(255, 255, 255) x19', '', 'rgb(0, 0, 0)'),
    ('switchover', 'template-balancepoint', 'h1', '#5d861b', 'role-misplaced',
     'rgb(31, 38, 44) x11, rgb(255, 255, 255) x6', '.text-primary-600; .hover\\:text-primary-600:hover', 'rgb(31, 38, 44)'),
    ('tasteit', 'template-zing', 'ink', '#333333', 'unsupported',
     'rgba(0, 0, 0, 0.8) x36, rgb(255, 255, 255) x10', '', 'rgba(0, 0, 0, 0.8)'),
    ('tastyrecipes', 'template-flavorhub', 'heading text', '#1f1f1f', 'role-misplaced',
     'rgb(0, 0, 0) x24, rgb(255, 255, 255) x6', 'a, button', 'rgb(0, 0, 0)'),
    ('theinterior', 'template-studiohaus', 'heading color', '#0b1c39', 'unsupported',
     'rgb(255, 255, 255) x19, rgb(0, 0, 0) x1, rgb(255, 19, 19) x1', '', 'rgb(255, 255, 255)'),
    ('unicare', 'template-mercy', 'ink', '#333333', 'role-misplaced',
     'rgb(255, 255, 255) x30, rgba(0, 0, 0, 0.8) x9, rgb(253, 100, 91) x3', '.mfp-close-btn-in .mfp-close; .datepicker.dropdown-menu; .blog-entry .meta > div a:hover', 'rgb(255, 255, 255)'),
    ('virtualassistant', 'template-virtuoso', 'heading text', '#212529', 'role-misplaced',
     'rgba(0, 0, 0, 0.8) x13, rgb(0, 0, 0) x9, rgb(255, 255, 255) x7', 'body; .btn; .btn:hover', 'rgba(0, 0, 0, 0.8)'),
    ('wilcon', 'template-ironclad', 'heading text', '#1b1b1b', 'unsupported',
     'rgba(0, 0, 0, 0.9) x18, rgb(255, 255, 255) x10, rgb(4, 14, 38) x1', '', 'rgba(0, 0, 0, 0.9)'),
    ('yogabest', 'template-flexpose', 'heading text', '#212529', 'role-misplaced',
     'rgba(0, 0, 0, 0.8) x24, rgb(255, 255, 255) x5, rgb(0, 0, 0) x1', 'body; pre; .table', 'rgba(0, 0, 0, 0.8)'),
    ('zephyr', 'template-airshed', 'h1', '#7247dc', 'role-misplaced',
     'rgb(39, 39, 51) x17, rgb(255, 255, 255) x5', '.text-primary-600; .hover\\:text-primary-600:hover', 'rgb(39, 39, 51)'),
    ('author', 'template-byliner', 'heading color', '#000000', 'loses',
     'rgb(38, 59, 94) x26, rgb(255, 255, 255) x5', '.ftco-footer .ftco-heading-2', 'rgb(38, 59, 94)'),
    ('burger', 'template-griddle', 'heading', '#1f1f1f', 'loses',
     'rgb(26, 13, 1) x14, rgb(255, 255, 255) x9, rgb(4, 14, 39) x7', 'h1, h2, h3, h4, h5', 'rgb(26, 13, 1)'),
    ('careers', 'template-jobcraft', 'heading color', '#000000', 'loses',
     'rgb(23, 36, 62) x21, rgb(255, 255, 255) x2', 'h1,.h1,h2,.h2,h3,.h3,h4,.h4', 'rgb(23, 36, 62)'),
    ('careers', 'template-talently', 'heading color', '#000000', 'loses',
     'rgb(23, 36, 62) x21, rgb(255, 255, 255) x2', 'h1,.h1,h2,.h2,h3,.h3,h4,.h4', 'rgb(23, 36, 62)'),
    ('classic', 'template-evergreen', 'heading color', '#4f4f4f', 'loses',
     'rgb(39, 55, 70) x50, rgb(255, 255, 255) x1', 'h1, h2, h3, h4, h5, h6', 'rgb(39, 55, 70)'),
    ('classic', 'template-timeless', 'heading text', '#4f4f4f', 'loses',
     'rgb(39, 55, 70) x50, rgb(255, 255, 255) x1', 'h1, h2, h3, h4, h5, h6', 'rgb(39, 55, 70)'),
    ('cleanex', 'template-polish', 'heading-color', '#000000', 'loses',
     'rgb(22, 22, 85) x15, rgb(255, 255, 255) x7, rgb(34, 90, 225) x1', '.ftco-footer .ftco-heading-2', 'rgb(22, 22, 85)'),
    ('cocoon', 'template-pupa', 'heading color', '#18181c', 'loses',
     'rgb(153, 137, 110) x1', 'h3, h4, h5', 'rgb(153, 137, 110)'),
    ('cocoon', 'template-weft', '--color-heading', '#18181c', 'loses',
     'rgb(153, 137, 110) x1', 'h3, h4, h5', 'rgb(153, 137, 110)'),
    ('consto', 'template-buildex', 'heading text', '#1a1a1a', 'loses',
     'rgb(23, 23, 23) x13, rgb(255, 255, 255) x6', '.footer-area .footer-tittle h4', 'rgb(23, 23, 23)'),
    ('consto', 'template-structa', 'heading', '#000000', 'loses',
     'rgb(23, 23, 23) x13, rgb(255, 255, 255) x6', 'h1,h2,h3,h4,h5,h6', 'rgb(23, 23, 23)'),
    ('dealers', 'template-flagship', '--color-heading', '#25262a', 'loses',
     'rgb(0, 0, 0) x28', '.site-section-heading', 'rgb(0, 0, 0)'),
    ('dealers', 'template-vendue', '--color-heading', '#25262a', 'loses',
     'rgb(0, 0, 0) x28', '.site-section-heading', 'rgb(0, 0, 0)'),
    ('medart', 'template-medcanvas', 'heading text', '#262626', 'loses',
     'rgb(64, 64, 64) x19, rgb(255, 255, 255) x11', '.elements-page .elements-heading .entry-title', 'rgb(64, 64, 64)'),
    ('medart', 'template-medcraft', 'heading text', '#262626', 'loses',
     'rgb(64, 64, 64) x19, rgb(255, 255, 255) x11', '.elements-page .elements-heading .entry-title', 'rgb(64, 64, 64)'),
    ('megapod', 'template-podvault', 'heading text', '#111111', 'loses',
     'rgb(255, 255, 255) x11, rgb(53, 53, 53) x6', 'h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6', 'rgb(255, 255, 255)'),
    ('persuit', 'template-modista', 'text-heading', '#333333', 'loses',
     'rgb(217, 21, 34) x47, rgb(11, 16, 51) x34, rgb(0, 0, 0) x28', '.tp-caption.miami_title_60px_dark,.miami_title_60px_dark', 'rgb(217, 21, 34)'),
    ('pixel', 'template-pixelforge', 'heading color', '#000000', 'loses',
     'rgb(255, 255, 255) x4, rgb(33, 33, 33) x2', 'h1, h2, h3, h4, h5, h6', 'rgb(255, 255, 255)'),
    ('ponigym', 'template-ironshed', 'heading color', '#111111', 'loses',
     'rgb(25, 25, 25) x16, rgb(255, 255, 255) x9, rgb(243, 78, 58) x9', 'h1, h2, h3, h4, h5, h6', 'rgb(25, 25, 25)'),
    ('portfolio', 'template-vitrine', 'headings', '#222222', 'loses',
     'rgb(4, 9, 30) x21, rgb(255, 255, 255) x5', 'h1,h2,h3,h4,h5,h6', 'rgb(4, 9, 30)'),
    ('specer', 'template-pitchside', 'section title', '#dd1515', 'loses',
     'rgb(255, 255, 255) x38, rgb(17, 17, 17) x19, rgb(21, 22, 24) x6', '.schedule-text .st-table table tbody tr td.st-option h4', 'rgb(255, 255, 255)'),
    ('coloshop', 'template-shoplane', 'heading text', '#1e1e27', 'body-ink',
     'rgb(40, 40, 40) x31', '', 'rgb(40, 40, 40)'),
    ('mainline', 'template-standpipe', 'headings', '#111827', 'body-ink',
     'rgb(15, 34, 55) x16, rgb(255, 255, 255) x5', '', 'rgb(15, 34, 55)'),
    ('zephyr', 'template-airshed', 'h2', '#111827', 'body-ink',
     'rgb(39, 39, 51) x17, rgb(255, 255, 255) x5', '', 'rgb(39, 39, 51)'),
    ('eiser', 'template-cartly', 'heading text', '#2a2a2a', 'earlier',
     'rgb(74, 74, 74) x17, rgb(42, 42, 42) x14, rgb(255, 255, 255) x7', 'h1,h2,h3,h4,h5,h6', 'rgb(74, 74, 74)'),
    ('eiser', 'template-velour', '--color-heading', '#2a2a2a', 'earlier',
     'rgb(74, 74, 74) x17, rgb(42, 42, 42) x14, rgb(255, 255, 255) x7', 'h1,h2,h3,h4,h5,h6', 'rgb(74, 74, 74)'),
    ('karma', 'template-loomwell', 'heading color', '#222222', 'earlier',
     'rgb(34, 34, 34) x138, rgb(204, 204, 204) x63, rgb(255, 255, 255) x5', 'h1, h2, h3, h4, h5, h6', 'rgb(34, 34, 34)'),
    ('karma', 'template-sunburst', 'headings', '#222222', 'earlier',
     'rgb(34, 34, 34) x138, rgb(204, 204, 204) x63, rgb(255, 255, 255) x5', 'h1, h2, h3, h4, h5, h6', 'rgb(34, 34, 34)'),
    ('listashop', 'template-shopvibe', 'heading text', '#222222', 'earlier',
     'rgb(34, 34, 34) x48, rgb(119, 119, 119) x36', '.main_title h2', 'rgb(34, 34, 34)'),
    ('stayhome', 'template-roost', 'ink', '#000000', 'earlier',
     'no heading', 'h1, h2, h3, h4, .h1, .h2, .h3, .h4', ''),
    ('tasteit', 'template-zing', 'ink', '#000000', 'earlier',
     'rgba(0, 0, 0, 0.8) x36, rgb(255, 255, 255) x10', 'h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5', 'rgba(0, 0, 0, 0.8)'),
    ('zacson', 'template-justly', 'heading ink', '#2c234d', 'earlier',
     'rgb(255, 255, 255) x16, rgb(44, 35, 77) x5', 'h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6', 'rgb(255, 255, 255)'),
]


DUPS = {k for k, n in __import__("collections").Counter(
    (v[0], v[1]) for v in VERDICTS).items() if n > 1}


def block(v) -> str:
    slug, spec, label, claim, kind, renders, ev, top = v
    key = (f"{slug}/ink/{spec}/{claim}" if (slug, spec) in DUPS
           else f"{slug}/ink/{spec}")
    row = f"the `{label}` row" if label else "its ink row"
    if kind == "unsupported":
        head = (f"**Heading-ink role ({STAMP}):** {row} states `{claim}`, which is declared "
                f"by no rule in this page's stylesheets and appears in no inline style or "
                f"style attribute. The rendered headings paint {renders}"
                + (f"; the most-painted heading colour is `{top}`" if top else "") + ".")
    elif kind == "role-misplaced":
        head = (f"**Heading-ink role ({STAMP}):** {row} states `{claim}`, but the page "
                f"declares it only for non-heading elements ({ev}) — no heading rule "
                f"carries it. The rendered headings paint {renders}.")
    elif kind == "loses":
        head = (f"**Heading-ink role ({STAMP}):** {row} states `{claim}`, declared on "
                f"`{ev}`; that rule does not win anywhere the headings render — they paint "
                f"{renders}.")
    elif kind == "body-ink":
        head = (f"**Heading-ink role ({STAMP}):** {row} states `{claim}`, which is the "
                f"page's paragraph/body colour, not an ink: no heading paints it (headings "
                f"render {renders}).")
    else:  # earlier
        head = (f"**Heading-ink role ({STAMP}):** {row} states `{claim}`, the FIRST colour "
                f"declared in that declaration block (`{ev}`); a later `color` in the same "
                f"block wins, and the rendered headings paint {renders}.")
    return (f"<!-- heading-role-tokens: {key} -->\n{head}\n"
            f"<!-- /heading-role-tokens -->")


def insert(text: str, blk: str) -> str:
    """Insert after the Design Tokens table (the block belongs with the tokens)."""
    lines = text.splitlines()
    idx = None
    for i, line in enumerate(lines):
        if re.match(r"^#{2,4}\s+.*(design\s*tokens?|tokens?\s*\()", line, re.I):
            idx = i
            break
    if idx is None:
        return text.rstrip() + "\n\n" + blk + "\n"
    end = idx
    started = False
    for i in range(idx + 1, len(lines)):
        s = lines[i].strip()
        if s.startswith("|"):
            started = True
            end = i
        elif started and s == "":
            end = i
            break
        elif started and not s.startswith("|"):
            break
        elif not started and s.startswith("#") and i > idx + 1:
            break
    tail = lines[end + 1:]
    while tail and tail[0].strip() == "":
        tail = tail[1:]
    out_lines = lines[: end + 1] + ["", blk, ""] + tail
    return "\n".join(out_lines).rstrip() + "\n"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only")
    args = ap.parse_args()
    only = {x.strip() for x in args.only.split(",")} if args.only else None

    writes = 0
    for v in VERDICTS:
        slug, spec, label, claim, kind = v[0], v[1], v[2], v[3], v[4]
        if only and spec not in only and slug not in only:
            continue
        path = os.path.join(SPECS, spec, "spec.md")
        if not os.path.exists(path):
            print("MISSING", path)
            continue
        text = open(path).read()
        if f"heading-role-tokens: {slug}/ink/{spec}" in text:
            print(f"already-recorded {spec} ({slug})")
            continue
        print(f"write {spec:26} {slug:20} {claim:9} {kind}")
        writes += 1
        if args.apply:
            open(path, "w").write(insert(text, block(v)))
    print(f"writes {writes}" + ("" if args.apply else " (dry run)"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
