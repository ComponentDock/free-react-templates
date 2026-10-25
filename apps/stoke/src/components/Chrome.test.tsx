import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './Chrome'

function setMetrics(scrollY: number, scrollHeight: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: scrollHeight,
  })
}

function setReadyState(state: DocumentReadyState) {
  Object.defineProperty(document, 'readyState', { configurable: true, get: () => state })
}

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  setReadyState('complete')
  setMetrics(0, 0)
})

describe('SkipLink', () => {
  it('is the first focusable stop and targets the content', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: 'Skip to content' })
    expect(link).toHaveAttribute('href', '#main-content')
    expect(link).toHaveClass('sr-only')
  })
})

describe('ScrollProgress', () => {
  it('paints the ratio of the document already scrolled', () => {
    setMetrics(500, 2000)
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector('[data-scroll-progress]')
    expect(bar).toHaveStyle({ width: '50%' })
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })
})

describe('Preloader', () => {
  it('is absent from a document that already finished loading', () => {
    render(<Preloader />)
    expect(screen.queryByTestId('preloader')).toBeNull()
    expect(document.querySelector('[data-preloader]')).toBeNull()
  })

  it('covers a still-loading document and clears itself on load', () => {
    setReadyState('loading')
    render(<Preloader />)
    expect(document.querySelector('[data-preloader]')).not.toBeNull()

    act(() => {
      window.dispatchEvent(new Event('load'))
    })
    expect(document.querySelector('[data-preloader]')).toBeNull()
  })

  it('removes the load listener when it unmounts before the load event', () => {
    setReadyState('loading')
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Preloader />)
    unmount()
    expect(remove).toHaveBeenCalledWith('load', expect.any(Function))
  })
})

describe('CookieStrip', () => {
  it('slides up 1.5 s after load and declines into state', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    const strip = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(strip).toHaveClass('translate-y-full')

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(strip).toHaveClass('translate-y-0')

    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).toBeNull()
  })

  it('accepts into state', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)
    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).toBeNull()
  })

  it('clears its slide timer when it unmounts early', () => {
    vi.useFakeTimers()
    const clear = vi.spyOn(globalThis, 'clearTimeout')
    const { unmount } = render(<CookieStrip />)
    unmount()
    expect(clear).toHaveBeenCalled()
  })
})

describe('BackToTop', () => {
  it('stays inert at the top and returns the page from 300 px down', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    setMetrics(0, 4000)
    render(<BackToTop />)

    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0')
    expect(button).toHaveClass('pointer-events-none')

    setMetrics(900, 4000)
    act(() => {
      fireEvent.scroll(window)
    })
    expect(button).toHaveClass('opacity-100')

    fireEvent.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
