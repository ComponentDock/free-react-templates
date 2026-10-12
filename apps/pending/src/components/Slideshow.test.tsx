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

  it('lays four cover photographs on a viewport-fixed black backdrop, the first one shown', () => {
    render(<Slideshow />)

    const backdrop = screen.getByTestId('slideshow')

    expect(backdrop).toHaveClass('fixed', 'inset-0', 'z-0', 'h-full', 'w-full', 'bg-black')
    expect(backdrop).toHaveAttribute('aria-hidden', 'true')

    const slides = [0, 1, 2, 3].map((index) => screen.getByTestId(`slide-${index}`))

    for (const slide of slides) {
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

    expect(slides[0]?.style.backgroundImage).toContain('pending-bg1')
    expect(slides[1]?.style.backgroundImage).toContain('pending-bg2')
    expect(slides[2]?.style.backgroundImage).toContain('pending-bg3')
    expect(slides[3]?.style.backgroundImage).toContain('pending-bg4')
    expect(slides[0]).toHaveAttribute('data-active', 'true')
    expect(slides[0]).toHaveClass('opacity-100')
    expect(slides[1]).toHaveAttribute('data-active', 'false')
    expect(slides[1]).toHaveClass('opacity-0')
    expect(slides[2]).toHaveClass('opacity-0')
    expect(slides[3]).toHaveClass('opacity-0')
  })

  it('cross-fades every seven seconds and wraps around after the fourth photograph', () => {
    render(<Slideshow />)

    act(() => {
      vi.advanceTimersByTime(HOLD)
    })
    expect(screen.getByTestId('slide-1')).toHaveAttribute('data-active', 'true')
    expect(screen.getByTestId('slide-0')).toHaveAttribute('data-active', 'false')

    act(() => {
      vi.advanceTimersByTime(HOLD)
    })
    expect(screen.getByTestId('slide-2')).toHaveAttribute('data-active', 'true')

    act(() => {
      vi.advanceTimersByTime(HOLD)
    })
    expect(screen.getByTestId('slide-3')).toHaveAttribute('data-active', 'true')

    act(() => {
      vi.advanceTimersByTime(HOLD)
    })
    expect(screen.getByTestId('slide-0')).toHaveAttribute('data-active', 'true')
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
    render(<Slideshow photos={['https://picsum.photos/seed/pending-solo/1900/900']} />)

    expect(screen.getByTestId('slide-0').style.backgroundImage).toContain('pending-solo')
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
