import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'

const allCallbacks: IntersectionObserverCallback[] = []
const allElements: Element[][] = []

beforeEach(() => {
  allCallbacks.length = 0
  allElements.length = 0

  vi.stubGlobal(
    'IntersectionObserver',
    class MockIntersectionObserver {
      private elements: Element[] = []
      constructor(cb: IntersectionObserverCallback) {
        allCallbacks.push(cb)
        allElements.push(this.elements)
      }
      observe(el: Element) {
        this.elements.push(el)
      }
      disconnect() {}
      unobserve() {}
    },
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

const { Counter } = await import('./Counter')

describe('Counter', () => {
  it('renders the section heading and counter labels', () => {
    render(<Counter />)
    expect(screen.getByRole('heading', { name: /sprout church/i })).toBeInTheDocument()
    for (const label of ['Members', 'Pastors', 'Donation', 'Churches']) {
      expect(screen.getByText(label, { selector: 'span' })).toBeInTheDocument()
    }
  })

  it('starts counters at zero and animates into view', async () => {
    vi.useFakeTimers()
    render(<Counter />)

    // All counters start at 0
    expect(screen.getByTestId('counter-Members').textContent).toBe('0')

    // Trigger all observers
    act(() => {
      allCallbacks.forEach((cb, i) => {
        const els = allElements[i]
        if (els && els.length > 0) {
          cb(
            [{ isIntersecting: true, target: els[0] } as IntersectionObserverEntry],
            {} as IntersectionObserver,
          )
        }
      })
    })

    // Advance timers past the animation duration (2000ms) to hit the target branch
    act(() => {
      vi.advanceTimersByTime(3000)
    })

    const val = parseInt(screen.getByTestId('counter-Members').textContent!.replace(/,/g, ''), 10)
    expect(val).toBeGreaterThan(0)

    vi.useRealTimers()
  })

  it('does not animate when not intersecting', () => {
    render(<Counter />)

    // Trigger observer with isIntersecting: false
    act(() => {
      allCallbacks.forEach((cb, i) => {
        const els = allElements[i]
        if (els && els.length > 0) {
          cb(
            [{ isIntersecting: false, target: els[0] } as IntersectionObserverEntry],
            {} as IntersectionObserver,
          )
        }
      })
    })

    expect(screen.getByTestId('counter-Members').textContent).toBe('0')
  })
})
