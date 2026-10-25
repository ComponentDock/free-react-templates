import { render, screen, waitFor } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useCounter } from './use-counter'

function Probe({ target, active }: { target: number; active: boolean }) {
  const value = useCounter(target, active)
  return <p data-testid="value">{value}</p>
}

function stubObserver() {
  class FakeObserver {
    observe() {}
    disconnect() {}
  }
  vi.stubGlobal('IntersectionObserver', FakeObserver)
}

function stubReducedMotion(reduce: boolean) {
  vi.stubGlobal('matchMedia', () => ({
    matches: reduce,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useCounter', () => {
  it('renders the final figure when no observer exists', () => {
    render(<Probe target={9400} active />
    )
    expect(screen.getByTestId('value')).toHaveTextContent('9400')
  })

  it('stays at zero until the band is in view', () => {
    stubObserver()
    render(<Probe target={31} active={false} />)
    expect(screen.getByTestId('value')).toHaveTextContent('0')
  })

  it('counts up over two seconds once active', async () => {
    stubObserver()
    let clock = 0
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      clock += 1000
      callback(clock)
      return 1
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    render(
      <div>
        <Probe target={100} active />
      </div>,
    )
    await waitFor(() => expect(screen.getByTestId('value')).toHaveTextContent('100'))
  })

  it('skips the animation under reduced motion', () => {
    stubObserver()
    stubReducedMotion(true)
    render(<Probe target={6} active />)
    expect(screen.getByTestId('value')).toHaveTextContent('6')
  })

  it('cancels the frame when it unmounts mid-animation', () => {
    stubObserver()
    const cancel = vi.fn()
    vi.stubGlobal('requestAnimationFrame', () => 7)
    vi.stubGlobal('cancelAnimationFrame', cancel)

    const { unmount } = render(<Probe target={9} active />)
    act(() => {
      unmount()
    })
    expect(cancel).toHaveBeenCalledWith(7)
  })
})
