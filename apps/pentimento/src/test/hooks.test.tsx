import { useRef } from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useParallax, usePrefersReducedMotion, useReveal, useScrollSpy } from '../lib/motion'
import { useScrollMetrics } from '../lib/scroll'
import { THEME_KEY, useTheme } from '../lib/theme'
import { useTypewriter } from '../lib/typewriter'
import {
  installMedia,
  installMockIntersectionObserver,
  removeMockIntersectionObserver,
  setRect,
  setScroll,
} from './helpers'

afterEach(() => {
  vi.useRealTimers()
  removeMockIntersectionObserver()
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

function ScrollHarness() {
  const { progress, shadow, top } = useScrollMetrics()
  return (
    <p data-testid="metrics" data-shadow={shadow} data-top={top}>
      {progress}
    </p>
  )
}

describe('useScrollMetrics', () => {
  it('follows the scroll position', () => {
    render(<ScrollHarness />)
    act(() => setScroll(500, 2000, 1000))

    const metrics = screen.getByTestId('metrics')
    expect(metrics).toHaveTextContent('50')
    expect(metrics).toHaveAttribute('data-shadow', 'true')
    expect(metrics).toHaveAttribute('data-top', 'true')

    act(() => setScroll(0, 2000, 1000))
    expect(metrics).toHaveAttribute('data-shadow', 'false')
  })
})

function ReducedHarness() {
  const reduced = usePrefersReducedMotion()
  return <p data-testid="reduced">{String(reduced)}</p>
}

describe('usePrefersReducedMotion', () => {
  it('reads the query on mount and follows a change', () => {
    const media = installMedia({ reduce: false })
    render(<ReducedHarness />)
    expect(screen.getByTestId('reduced')).toHaveTextContent('false')
    expect(media.listeners()).toBe(1)

    media.emit(true)
    expect(screen.getByTestId('reduced')).toHaveTextContent('true')

    media.emit(false)
    expect(screen.getByTestId('reduced')).toHaveTextContent('false')
  })
})

function TypewriterHarness({ phrases }: { phrases: readonly string[] }) {
  const { text, fading } = useTypewriter(phrases, 1000, 100)
  return (
    <p data-testid="tw" data-fading={String(fading)}>
      {text}
    </p>
  )
}

describe('useTypewriter', () => {
  it('cycles the phrases with a fade on either side', () => {
    vi.useFakeTimers()
    installMedia({ reduce: false })
    render(<TypewriterHarness phrases={['one', 'two']} />)

    expect(screen.getByTestId('tw')).toHaveTextContent('one')

    act(() => vi.advanceTimersByTime(1000))
    expect(screen.getByTestId('tw')).toHaveAttribute('data-fading', 'true')

    act(() => vi.advanceTimersByTime(100))
    expect(screen.getByTestId('tw')).toHaveTextContent('two')
    expect(screen.getByTestId('tw')).toHaveAttribute('data-fading', 'false')

    act(() => vi.advanceTimersByTime(1100))
    expect(screen.getByTestId('tw')).toHaveTextContent('one')
  })

  it('does not cycle a single phrase, and falls back to empty text', () => {
    vi.useFakeTimers()
    installMedia({ reduce: false })
    const { rerender } = render(<TypewriterHarness phrases={['only']} />)

    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getByTestId('tw')).toHaveTextContent('only')

    rerender(<TypewriterHarness phrases={[]} />)
    expect(screen.getByTestId('tw')).toHaveTextContent('')
  })

  it('stays on the first phrase under reduced motion', () => {
    vi.useFakeTimers()
    installMedia({ reduce: true })
    render(<TypewriterHarness phrases={['one', 'two']} />)

    act(() => vi.advanceTimersByTime(6000))
    expect(screen.getByTestId('tw')).toHaveTextContent('one')
    expect(screen.getByTestId('tw')).toHaveAttribute('data-fading', 'false')
  })
})

function ParallaxHarness({ factor, withNode = true }: { factor: number; withNode?: boolean }) {
  const blobRef = useRef<HTMLDivElement | null>(null)
  const offset = useParallax(blobRef, factor)
  return <div data-testid="blob" ref={withNode ? blobRef : undefined} data-offset={offset} />
}

describe('useParallax', () => {
  it('translates by the factor while the element is near the viewport', () => {
    installMedia({ reduce: false })
    render(<ParallaxHarness factor={0.15} />)
    const blob = screen.getByTestId('blob')
    setRect(blob, { top: 100, bottom: 600 })

    act(() => setScroll(400, 3000, 900))
    expect(blob).toHaveAttribute('data-offset', '60')

    setRect(blob, { top: 2000, bottom: 2400 })
    act(() => setScroll(400, 3000, 900))
    expect(blob).toHaveAttribute('data-offset', '0')
  })

  it('does nothing without a node, or under reduced motion', () => {
    installMedia({ reduce: false })
    const { unmount } = render(<ParallaxHarness factor={0.15} withNode={false} />)
    act(() => setScroll(400, 3000, 900))
    expect(screen.getByTestId('blob')).toHaveAttribute('data-offset', '0')
    unmount()

    installMedia({ reduce: true })
    render(<ParallaxHarness factor={-0.1} />)
    const blob = screen.getByTestId('blob')
    setRect(blob, { top: 100, bottom: 600 })
    act(() => setScroll(400, 3000, 900))
    expect(blob).toHaveAttribute('data-offset', '0')
  })
})

function SpyHarness({ ids }: { ids: string[] }) {
  const active = useScrollSpy(ids)
  return <p data-testid="spy">{active ?? 'none'}</p>
}

describe('useScrollSpy', () => {
  it('stays quiet in an environment without IntersectionObserver', () => {
    render(<SpyHarness ids={['works']} />)
    expect(screen.getByTestId('spy')).toHaveTextContent('none')
  })

  it('marks the band that is in view, and skips ids that do not exist', () => {
    const io = installMockIntersectionObserver()
    const band = document.createElement('section')
    band.id = 'works'
    document.body.append(band)

    render(<SpyHarness ids={['works', 'missing']} />)
    expect(io.observers).toHaveLength(1)
    expect(io.observers[0]!.observed).toEqual([band])

    io.observers[0]!.trigger([{ isIntersecting: false, target: band }])
    expect(screen.getByTestId('spy')).toHaveTextContent('none')

    io.observers[0]!.trigger([{ isIntersecting: true, target: band }])
    expect(screen.getByTestId('spy')).toHaveTextContent('works')

    band.remove()
  })
})

function RevealHarness({ withNode = true }: { withNode?: boolean }) {
  const { ref, visible } = useReveal()
  return (
    <div data-testid="reveal-harness" data-visible={String(visible)} ref={withNode ? ref : undefined} />
  )
}

describe('useReveal', () => {
  it('is visible when IntersectionObserver is missing', () => {
    render(<RevealHarness />)
    expect(screen.getByTestId('reveal-harness')).toHaveAttribute('data-visible', 'true')
  })

  it('waits for the element to cross into view', () => {
    installMedia({ reduce: false })
    const io = installMockIntersectionObserver()
    render(<RevealHarness />)
    const node = screen.getByTestId('reveal-harness')

    expect(node).toHaveAttribute('data-visible', 'false')
    expect(io.observers).toHaveLength(1)
    // Every rootMargin value needs a unit, or the browser refuses to construct the observer.
    expect(io.observers[0]!.options?.rootMargin).toBe('0px 0px -10% 0px')

    io.observers[0]!.trigger([{ isIntersecting: false, target: node }])
    expect(node).toHaveAttribute('data-visible', 'false')

    io.observers[0]!.trigger([{ isIntersecting: true, target: node }])
    expect(node).toHaveAttribute('data-visible', 'true')
    expect(io.observers[0]!.disconnected).toBe(true)
  })

  it('bails out without a node and under reduced motion', () => {
    installMedia({ reduce: false })
    installMockIntersectionObserver()
    const { unmount } = render(<RevealHarness withNode={false} />)
    expect(screen.getByTestId('reveal-harness')).toHaveAttribute('data-visible', 'false')
    unmount()

    installMockIntersectionObserver()
    installMedia({ reduce: true })
    render(<RevealHarness />)
    expect(screen.getByTestId('reveal-harness')).toHaveAttribute('data-visible', 'true')
  })
})

function ThemeHarness() {
  const { theme, toggle } = useTheme()
  return (
    <button type="button" onClick={toggle} data-testid="theme">
      {theme}
    </button>
  )
}

describe('useTheme', () => {
  it('toggles the theme, the class and the stored choice', async () => {
    const user = userEvent.setup()
    localStorage.setItem(THEME_KEY, 'light')
    render(<ThemeHarness />)

    const button = screen.getByTestId('theme')
    expect(button).toHaveTextContent('light')

    await user.click(button)
    expect(button).toHaveTextContent('dark')
    expect(localStorage.getItem(THEME_KEY)).toBe('dark')
    expect(document.documentElement).toHaveClass('dark')

    await user.click(button)
    expect(button).toHaveTextContent('light')
    expect(localStorage.getItem(THEME_KEY)).toBe('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
