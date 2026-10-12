import { act, renderHook } from '@testing-library/react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { useDropdown } from './use-dropdown'

const COUNT = 4

/** A trigger-shaped node with the one piece of geometry the placement guard reads. */
function nodeAt(right: number): HTMLElement {
  const node = document.createElement('a')

  node.getBoundingClientRect = () => ({ right }) as DOMRect

  return node
}

/** An anchor that is in the document and carries an href, so focus can actually land on it. */
function anchor(): HTMLAnchorElement {
  const node = document.createElement('a')

  node.href = '#destination'
  document.body.append(node)

  return node
}

/** A key event shaped like the one React hands the trigger's own handler. */
function keyEvent(key: string, currentTarget: HTMLElement): ReactKeyboardEvent<HTMLAnchorElement> {
  return {
    key,
    preventDefault: vi.fn(),
    currentTarget,
  } as unknown as ReactKeyboardEvent<HTMLAnchorElement>
}

/** A press shaped like the one the document sees. */
function press(target: EventTarget): void {
  target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('useDropdown — one disclosure, both of its paths and its placement', () => {
  it('starts shut and unflipped', () => {
    const { result } = renderHook(() => useDropdown(COUNT))

    expect(result.current.isOpen).toBe(false)
    expect(result.current.flip).toBe(false)
  })

  it('opens on its row, and flips only when the panel would leave the viewport', () => {
    const { result } = renderHook(() => useDropdown(COUNT))

    act(() => {
      result.current.open(nodeAt(100))
    })

    expect(result.current.isOpen).toBe(true)
    expect(result.current.flip).toBe(false)

    act(() => {
      result.current.open(nodeAt(window.innerWidth - 10))
    })

    expect(result.current.flip).toBe(true)

    act(() => {
      result.current.open(nodeAt(100))
    })

    expect(result.current.flip).toBe(false)
  })

  it('toggles shut and open again, clearing the placement with it', () => {
    const { result } = renderHook(() => useDropdown(COUNT))

    act(() => {
      result.current.toggle(nodeAt(window.innerWidth - 10))
    })

    expect(result.current.isOpen).toBe(true)
    expect(result.current.flip).toBe(true)

    act(() => {
      result.current.toggle(nodeAt(100))
    })

    expect(result.current.isOpen).toBe(false)
    expect(result.current.flip).toBe(false)
  })

  it('opens on ArrowDown from the trigger and ignores every other key', () => {
    const { result } = renderHook(() => useDropdown(COUNT))
    const ignored = keyEvent('Tab', nodeAt(100))

    act(() => {
      result.current.onTriggerKeyDown(ignored)
    })

    expect(result.current.isOpen).toBe(false)
    expect(ignored.preventDefault).not.toHaveBeenCalled()

    const opening = keyEvent('ArrowDown', nodeAt(100))

    act(() => {
      result.current.onTriggerKeyDown(opening)
    })

    expect(opening.preventDefault).toHaveBeenCalled()
    expect(result.current.isOpen).toBe(true)
  })

  it('lands focus on the row a key asked for, and only on that row', () => {
    const { result } = renderHook(() => useDropdown(COUNT))
    const first = anchor()
    const second = anchor()

    act(() => {
      result.current.onTriggerKeyDown(keyEvent('ArrowDown', nodeAt(100)))
    })

    act(() => {
      result.current.registerItem(first, 0)
    })

    expect(document.activeElement).toBe(first)

    act(() => {
      result.current.registerItem(second, 1)
    })

    expect(document.activeElement).toBe(first)
  })

  it('steps through the panel rows and wraps at both ends', () => {
    const { result } = renderHook(() => useDropdown(COUNT))
    const items = [0, 1, 2, 3].map(() => anchor())
    const [first, second, , last] = items as [
      HTMLAnchorElement,
      HTMLAnchorElement,
      HTMLAnchorElement,
      HTMLAnchorElement,
    ]

    act(() => {
      result.current.open(nodeAt(100))
    })

    act(() => {
      items.forEach((item, index) => {
        result.current.registerItem(item, index)
      })
    })

    const down = keyEvent('ArrowDown', first)

    act(() => {
      result.current.onItemKeyDown(down, 0)
    })

    expect(down.preventDefault).toHaveBeenCalled()
    expect(document.activeElement).toBe(second)

    act(() => {
      result.current.onItemKeyDown(keyEvent('ArrowUp', first), 0)
    })

    expect(document.activeElement).toBe(last)

    const other = keyEvent('a', first)

    act(() => {
      result.current.onItemKeyDown(other, 0)
    })

    expect(other.preventDefault).not.toHaveBeenCalled()
    expect(document.activeElement).toBe(last)
  })

  it('dismisses itself on Escape from a row, and gives focus back to the trigger', () => {
    const { result } = renderHook(() => useDropdown(COUNT))
    const trigger = anchor()
    const item = anchor()
    const escape = keyEvent('Escape', item)

    act(() => {
      result.current.triggerRef.current = trigger
    })

    act(() => {
      result.current.open(nodeAt(100))
    })

    act(() => {
      result.current.onItemKeyDown(escape, 0)
    })

    expect(escape.preventDefault).toHaveBeenCalled()
    expect(result.current.isOpen).toBe(false)
    expect(document.activeElement).toBe(trigger)
  })

  it('closes on a press outside its row and stays open on one inside it', () => {
    const { result } = renderHook(() => useDropdown(COUNT))
    const row = document.createElement('li')
    const inside = anchor()

    row.append(inside)
    document.body.append(row)

    act(() => {
      result.current.rowRef.current = row
    })

    act(() => {
      result.current.open(nodeAt(100))
    })

    act(() => {
      press(document.body)
    })

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.open(nodeAt(100))
    })

    act(() => {
      press(inside)
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('takes a row that is not there yet without asking for focus on it', () => {
    const { result } = renderHook(() => useDropdown(COUNT))

    act(() => {
      result.current.onTriggerKeyDown(keyEvent('ArrowDown', nodeAt(100)))
    })

    act(() => {
      result.current.registerItem(null, 0)
    })

    expect(document.activeElement).toBe(document.body)

    act(() => {
      result.current.onItemKeyDown(keyEvent('ArrowDown', nodeAt(100)), 0)
    })

    expect(document.activeElement).toBe(document.body)
  })
})
