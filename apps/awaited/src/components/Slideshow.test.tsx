import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Slideshow } from './Slideshow'

const HOLD = 7000

function stubMotion(reduced: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      matches: reduced,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  )
}

describe('Slideshow', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('lays two full-screen cover photographs out, the first one shown', () => {
    render(<Slideshow />)

    const slideshow = screen.getByTestId('slideshow')
    const first = screen.getByTestId('slide-0')
    const second = screen.getByTestId('slide-1')

    expect(slideshow).toHaveClass('fixed', 'inset-0', 'z-0', 'h-full', 'w-full')
    expect(slideshow).toHaveAttribute('aria-hidden', 'true')

    for (const slide of [first, second]) {
      expect(slide).toHaveClass(
        'absolute',
        'inset-0',
        'bg-cover',
        'bg-center',
        'bg-no-repeat',
        'transition-opacity',
      )
      expect(slide.style.transitionDuration).toBe('1000ms')
    }

    expect(first.style.backgroundImage).toContain('awaited-bg1')
    expect(second.style.backgroundImage).toContain('awaited-bg2')
    expect(first).toHaveAttribute('data-active', 'true')
    expect(first).toHaveClass('opacity-100')
    expect(second).toHaveAttribute('data-active', 'false')
    expect(second).toHaveClass('opacity-0')
  })

  it('cross-fades to the next photograph every seven seconds and wraps around', () => {
    render(<Slideshow />)

    act(() => {
      vi.advanceTimersByTime(HOLD)
    })

    expect(screen.getByTestId('slide-1')).toHaveAttribute('data-active', 'true')
    expect(screen.getByTestId('slide-0')).toHaveAttribute('data-active', 'false')

    act(() => {
      vi.advanceTimersByTime(HOLD)
    })

    expect(screen.getByTestId('slide-0')).toHaveAttribute('data-active', 'true')
    expect(screen.getByTestId('slide-1')).toHaveAttribute('data-active', 'false')
  })

  it('stays on the first photograph when the visitor asks for reduced motion', () => {
    stubMotion(true)

    render(<Slideshow />)

    act(() => {
      vi.advanceTimersByTime(3 * HOLD)
    })

    expect(screen.getByTestId('slide-0')).toHaveAttribute('data-active', 'true')
    expect(screen.getByTestId('slide-1')).toHaveAttribute('data-active', 'false')
  })

  it('stays on the first photograph when it is the only one', () => {
    render(<Slideshow photos={['https://picsum.photos/seed/awaited-solo/1900/900']} />)

    expect(screen.getByTestId('slide-0').style.backgroundImage).toContain('awaited-solo')
    expect(screen.queryByTestId('slide-1')).toBeNull()

    act(() => {
      vi.advanceTimersByTime(2 * HOLD)
    })

    expect(screen.getByTestId('slide-0')).toHaveAttribute('data-active', 'true')
  })

  it('cycles when the environment cannot report a motion preference', () => {
    vi.stubGlobal('matchMedia', undefined)

    render(<Slideshow className="extra" />)

    expect(screen.getByTestId('slideshow')).toHaveClass('extra')

    act(() => {
      vi.advanceTimersByTime(HOLD)
    })

    expect(screen.getByTestId('slide-1')).toHaveAttribute('data-active', 'true')
  })

  it('clears the cross-fade interval when it unmounts', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Slideshow />)

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
  })
})
