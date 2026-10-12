import { describe, expect, it } from 'vitest'
import { trapTab } from './focus-trap'

function control(label: string): HTMLButtonElement {
  const element = document.createElement('button')
  element.textContent = label
  document.body.appendChild(element)
  return element
}

describe('trapTab', () => {
  it('leaves the panel alone when nothing inside is focusable', () => {
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [])

    expect(event.defaultPrevented).toBe(false)
  })

  it('wraps Tab on the last control round to the first', () => {
    const first = control('first')
    const last = control('last')
    last.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [first, last])

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(first)
    first.remove()
    last.remove()
  })

  it('wraps Shift+Tab on the first control back to the last', () => {
    const first = control('first')
    const last = control('last')
    first.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, cancelable: true })

    trapTab(event, [first, last])

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(last)
    first.remove()
    last.remove()
  })

  it('leaves Tab in the middle of the panel to the browser', () => {
    const first = control('first')
    const middle = control('middle')
    const last = control('last')
    middle.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [first, middle, last])

    expect(event.defaultPrevented).toBe(false)
    expect(document.activeElement).toBe(middle)
    first.remove()
    middle.remove()
    last.remove()
  })
})
