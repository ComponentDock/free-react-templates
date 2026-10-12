/**
 * Keyboard trap for the open mobile panel: wraps Tab from the last focusable
 * element back to the first, and Shift+Tab from the first back to the last.
 * Anything else — including a panel with nothing focusable — is left to the
 * browser.
 */
export function trapTab(event: KeyboardEvent, focusable: HTMLElement[]): void {
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (!first || !last) return

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
    return
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}
