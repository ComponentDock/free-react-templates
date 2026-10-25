import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useScrollSpy } from './useScrollSpy'

class Observer {
  static last: Observer | null = null
  static observed: string[] = []
  callback: IntersectionObserverCallback
  disconnected = false

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    Observer.last = this
  }

  observe(element: Element) {
    Observer.observed.push(element.id)
  }
  unobserve() {}
  disconnect() {
    this.disconnected = true
  }
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

function Spy({ ids }: { ids: readonly string[] }) {
  const active = useScrollSpy(ids)
  return <p data-testid="active">{active || 'none'}</p>
}

const IDS = ['response', 'services', 'missing'] as const

function addBands() {
  for (const id of ['response', 'services']) {
    const section = document.createElement('section')
    section.id = id
    document.body.append(section)
  }
}

afterEach(() => {
  Observer.last = null
  Observer.observed = []
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

describe('useScrollSpy', () => {
  it('emphasises nothing without an IntersectionObserver', () => {
    render(<Spy ids={IDS} />)
    expect(screen.getByTestId('active')).toHaveTextContent('none')
  })

  it('observes the bands that exist and skips the ids that do not', () => {
    addBands()
    vi.stubGlobal('IntersectionObserver', Observer)
    render(<Spy ids={IDS} />)
    expect(Observer.observed).toEqual(['response', 'services'])
  })

  it('ignores a callback with nothing intersecting', () => {
    addBands()
    vi.stubGlobal('IntersectionObserver', Observer)
    render(<Spy ids={IDS} />)

    act(() => {
      Observer.last!.callback(
        [
          { isIntersecting: false, target: { id: 'response' }, intersectionRatio: 0.9 },
        ] as unknown as IntersectionObserverEntry[],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(screen.getByTestId('active')).toHaveTextContent('none')
  })

  it('picks the most visible intersecting band', () => {
    addBands()
    vi.stubGlobal('IntersectionObserver', Observer)
    render(<Spy ids={IDS} />)

    act(() => {
      Observer.last!.callback(
        [
          { isIntersecting: true, target: { id: 'response' }, intersectionRatio: 0.2 },
          { isIntersecting: true, target: { id: 'services' }, intersectionRatio: 0.6 },
        ] as unknown as IntersectionObserverEntry[],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(screen.getByTestId('active')).toHaveTextContent('services')

    act(() => {
      Observer.last!.callback(
        [
          { isIntersecting: true, target: { id: 'response' }, intersectionRatio: 0.7 },
          { isIntersecting: true, target: { id: 'services' }, intersectionRatio: 0.4 },
        ] as unknown as IntersectionObserverEntry[],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(screen.getByTestId('active')).toHaveTextContent('response')
  })

  it('disconnects on unmount', () => {
    addBands()
    vi.stubGlobal('IntersectionObserver', Observer)
    const { unmount } = render(<Spy ids={IDS} />)
    unmount()
    expect(Observer.last!.disconnected).toBe(true)
  })
})
