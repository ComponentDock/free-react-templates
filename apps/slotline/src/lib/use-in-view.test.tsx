import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useInView } from './use-in-view'

function Probe() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5)
  return (
    <div ref={ref} data-testid="probe">
      {String(inView)}
    </div>
  )
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useInView', () => {
  it('reports true where there is no observer at all', () => {
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveTextContent('true')
  })

  it('flips once the element intersects and then stops observing', () => {
    let callback: IntersectionObserverCallback = () => {}
    const disconnect = vi.fn()
    class FakeObserver {
      constructor(handler: IntersectionObserverCallback) {
        callback = handler
      }
      observe = vi.fn()
      disconnect = disconnect
    }
    vi.stubGlobal('IntersectionObserver', FakeObserver)

    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveTextContent('false')

    act(() => {
      callback([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver)
    })
    expect(screen.getByTestId('probe')).toHaveTextContent('false')

    act(() => {
      callback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
    })
    expect(screen.getByTestId('probe')).toHaveTextContent('true')
    expect(disconnect).toHaveBeenCalled()
  })
})
