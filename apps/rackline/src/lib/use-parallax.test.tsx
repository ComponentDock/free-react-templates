import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useParallax } from './use-parallax'

function Probe({ ratio }: { ratio?: number }) {
  const offset = useParallax(ratio)
  return <span data-testid="offset">{offset}</span>
}

function scrollTo(position: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: position })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('useParallax', () => {
  it('drifts with the scroll position using the default ratio', () => {
    render(<Probe />)

    scrollTo(100)

    expect(screen.getByTestId('offset')).toHaveTextContent('20')
  })

  it('honours a custom ratio and tracks the offset downwards too', () => {
    render(<Probe ratio={0.5} />)

    scrollTo(120)
    expect(screen.getByTestId('offset')).toHaveTextContent('60')

    scrollTo(40)
    expect(screen.getByTestId('offset')).toHaveTextContent('20')
  })

  it('rounds the offset to whole pixels', () => {
    render(<Probe ratio={0.15} />)

    scrollTo(37)

    expect(screen.getByTestId('offset')).toHaveTextContent('6')
  })

  it('stops listening once the band unmounts', () => {
    const removeListener = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Probe />)

    unmount()

    expect(removeListener).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('stays still and never listens when the visitor reduces motion', () => {
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: true, media: query }))
    const addListener = vi.spyOn(window, 'addEventListener')

    render(<Probe />)
    scrollTo(300)

    expect(screen.getByTestId('offset')).toHaveTextContent('0')
    expect(addListener).not.toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
