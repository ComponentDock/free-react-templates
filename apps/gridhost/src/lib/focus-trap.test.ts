import { trapTab } from './focus-trap'

function makePanel() {
  const panel = document.createElement('div')
  const first = document.createElement('button')
  const middle = document.createElement('button')
  const last = document.createElement('button')
  first.textContent = 'first'
  middle.textContent = 'middle'
  last.textContent = 'last'
  panel.append(first, middle, last)
  document.body.append(panel)
  return { panel, first, middle, last }
}

describe('trapTab', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('wraps forward from the last element to the first', () => {
    const { first, middle, last } = makePanel()
    last.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [first, middle, last])

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(first)
  })

  it('wraps backwards from the first element to the last', () => {
    const { first, middle, last } = makePanel()
    first.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, cancelable: true })

    trapTab(event, [first, middle, last])

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(last)
  })

  it('leaves the browser alone in the middle of the panel', () => {
    const { first, middle, last } = makePanel()
    middle.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [first, middle, last])

    expect(event.defaultPrevented).toBe(false)
    expect(document.activeElement).toBe(middle)
  })

  it('does nothing when the panel has nothing focusable', () => {
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })

    trapTab(event, [])

    expect(event.defaultPrevented).toBe(false)
  })
})
