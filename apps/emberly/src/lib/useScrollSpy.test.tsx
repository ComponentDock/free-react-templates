import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useScrollSpy } from './useScrollSpy'

type Entry = { isIntersecting: boolean; target: { id: string }; intersectionRatio: number }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly callback: (entries: Entry[]) => void
  readonly observedIds: string[] = []
  disconnected = false

  constructor(callback: (entries: Entry[]) => void) {
    this.callback = callback
    FakeObserver.instances.push(this)
  }

  observe(element: { id: string }) {
    this.observedIds.push(element.id)
  }

  disconnect() {
    this.disconnected = true
  }
}

function Probe({ ids }: { ids: readonly string[] }) {
  const active = useScrollSpy(ids)
  return <output data-testid="active">{active}</output>
}

afterEach(() => {
  vi.unstubAllGlobals()
  FakeObserver.instances = []
})

describe('useScrollSpy', () => {
  it('observes only the bands that exist and marks the most visible one', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    const { unmount } = render(
      <>
        <div id="alpha" />
        <div id="beta" />
        <Probe ids={['alpha', 'beta', 'missing']} />
      </>,
    )

    const observer = FakeObserver.instances[0]!
    expect(observer.observedIds).toEqual(['alpha', 'beta'])

    act(() => {
      observer.callback([{ isIntersecting: false, target: { id: 'alpha' }, intersectionRatio: 1 }])
    })
    expect(screen.getByTestId('active').textContent).toBe('')

    act(() => {
      observer.callback([
        { isIntersecting: true, target: { id: 'alpha' }, intersectionRatio: 0.4 },
        { isIntersecting: true, target: { id: 'beta' }, intersectionRatio: 0.6 },
      ])
    })
    expect(screen.getByTestId('active').textContent).toBe('beta')

    act(() => {
      observer.callback([
        { isIntersecting: true, target: { id: 'alpha' }, intersectionRatio: 0.8 },
        { isIntersecting: true, target: { id: 'beta' }, intersectionRatio: 0.3 },
      ])
    })
    expect(screen.getByTestId('active').textContent).toBe('alpha')

    unmount()
    expect(observer.disconnected).toBe(true)
  })

  it('marks nothing where the browser has no observer (jsdom)', () => {
    render(<Probe ids={['alpha']} />)
    expect(screen.getByTestId('active').textContent).toBe('')
  })
})
