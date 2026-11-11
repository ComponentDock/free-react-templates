/**
 * jsdom ships no `HTMLDialogElement.showModal`/`close` at all, so the dialog
 * tests install a minimal pair on the prototype and take them away again. The
 * pair behaves like the browser's: `showModal` sets the `open` attribute and
 * `close` removes it and fires the `close` event the component listens for.
 */

type Proto = Record<string, unknown>

const proto = window.HTMLDialogElement.prototype as unknown as Proto
let saved: { showModal?: unknown; close?: unknown } | null = null

function showModal(this: HTMLDialogElement) {
  this.setAttribute('open', '')
}

function close(this: HTMLDialogElement) {
  if (!this.hasAttribute('open')) return
  this.removeAttribute('open')
  this.dispatchEvent(new Event('close'))
}

export function stubDialogMethods() {
  saved = { showModal: proto.showModal, close: proto.close }
  proto.showModal = showModal
  proto.close = close
}

export function removeDialogMethods() {
  if (!saved) return
  if (saved.showModal === undefined) delete proto.showModal
  else proto.showModal = saved.showModal
  if (saved.close === undefined) delete proto.close
  else proto.close = saved.close
  saved = null
}
