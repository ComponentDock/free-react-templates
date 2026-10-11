import { describe, expect, it } from 'vitest'
import { trapTab } from './focusTrap'

function button(label: string): HTMLButtonElement {
  const element = document.createElement('button')
  element.textContent = label
  document.body.appendChild(element)
  return element
}

describe('trapTab', () => {
  it('does nothing when the dialog holds no focusable element', () => {
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [])

    expect(event.defaultPrevented).toBe(false)
  })

  it('wraps Tab on the last element round to the first', () => {
    const first = button('first')
    const last = button('last')
    last.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [first, last])

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(first)
    first.remove()
    last.remove()
  })

  it('wraps Shift+Tab on the first element back to the last', () => {
    const first = button('first')
    const last = button('last')
    first.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, cancelable: true })

    trapTab(event, [first, last])

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(last)
    first.remove()
    last.remove()
  })

  it('leaves Tab alone in the middle of the dialog', () => {
    const first = button('first')
    const middle = button('middle')
    const last = button('last')
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
