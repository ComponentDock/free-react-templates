import { useRef } from 'react'
import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useParallax, usePrefersReducedMotion, useReveal, useScrollSpy } from '../lib/motion'
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

function NoNodeReveal() {
  const { visible } = useReveal()
  return <p data-testid="no-node">{String(visible)}</p>
}

function RevealHarness() {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} data-testid="reveal-box" data-visible={String(visible)}>
      box
    </div>
  )
}

describe('useReveal', () => {
  it('is visible immediately when the browser has no IntersectionObserver', () => {
    expect(typeof IntersectionObserver).toBe('undefined')
    render(<RevealHarness />)
    expect(screen.getByTestId('reveal-box')).toHaveAttribute('data-visible', 'true')
  })

  it('starts hidden, then stays visible once it intersects', () => {
    const io = installMockIntersectionObserver()
    render(<RevealHarness />)

    const box = screen.getByTestId('reveal-box')
    expect(box).toHaveAttribute('data-visible', 'false')
    expect(io.observers).toHaveLength(1)
    expect(io.observers[0]?.options).toMatchObject({
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    })

    act(() => io.observers[0]?.trigger([{ isIntersecting: false, target: box }]))
    expect(box).toHaveAttribute('data-visible', 'false')

    act(() => io.observers[0]?.trigger([{ isIntersecting: true, target: box }]))
    expect(box).toHaveAttribute('data-visible', 'true')
    expect(io.observers[0]?.disconnected).toBe(true)
  })

  it('never starts an observer under reduced motion', () => {
    installMedia({ reduce: true })
    const io = installMockIntersectionObserver()
    render(<RevealHarness />)

    expect(io.observers).toHaveLength(0)
    expect(screen.getByTestId('reveal-box')).toHaveAttribute('data-visible', 'true')
  })

  it('survives a component that never attaches its ref', () => {
    installMedia({ reduce: false })
    installMockIntersectionObserver()
    render(<NoNodeReveal />)
    expect(screen.getByTestId('no-node')).toHaveTextContent('false')
  })
})

function ParallaxHarness({ factor, withNode = true }: { factor: number; withNode?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const offset = useParallax(ref, factor)
  return (
    <div
      ref={withNode ? ref : null}
      data-testid="blob"
      style={{ transform: `translateY(${offset}px)` }}
    >
      blob
    </div>
  )
}

describe('useParallax', () => {
  it('drifts by the scroll distance while the element is on screen', () => {
    installMedia({ reduce: false })
    render(<ParallaxHarness factor={0.15} />)
    const blob = screen.getByTestId('blob')

    setRect(blob, { top: 100, bottom: 500 })
    act(() => setScroll(400, 4000, 900))

    expect(blob).toHaveStyle({ transform: 'translateY(60px)' })

    setRect(blob, { top: 2000, bottom: 2400 })
    act(() => setScroll(500, 4000, 900))
    expect(blob).toHaveStyle({ transform: 'translateY(0px)' })
  })

  it('does nothing without a node, or under reduced motion', () => {
    const ioFree = installMedia({ reduce: false })
    render(<ParallaxHarness factor={-0.1} withNode={false} />)
    act(() => setScroll(400, 4000, 900))
    expect(screen.getByTestId('blob')).toHaveStyle({ transform: 'translateY(0px)' })
    expect(ioFree.listeners()).toBeGreaterThanOrEqual(0)

    removeMockIntersectionObserver()
    installMedia({ reduce: true })
    render(<ParallaxHarness factor={0.15} />)
    act(() => setScroll(400, 4000, 900))
    expect(screen.getAllByTestId('blob')[1]).toHaveStyle({ transform: 'translateY(0px)' })
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
  })
})

function SpyHarness({ ids }: { ids: readonly string[] }) {
  const active = useScrollSpy(ids)
  return <p data-testid="active">{active ?? 'none'}</p>
}

describe('useScrollSpy', () => {
  it('lights the band that crosses the middle of the viewport', () => {
    const io = installMockIntersectionObserver()
    render(
      <>
        <section id="alpha" />
        <section id="beta" />
        <SpyHarness ids={['alpha', 'missing', 'beta']} />
      </>,
    )

    expect(io.observers).toHaveLength(1)
    expect(io.observers[0]?.observed).toHaveLength(2)
    expect(screen.getByTestId('active')).toHaveTextContent('none')

    act(() => io.observers[0]?.trigger([{ isIntersecting: false }]))
    expect(screen.getByTestId('active')).toHaveTextContent('none')

    act(() =>
      io.observers[0]?.trigger([{ isIntersecting: true, target: { id: 'beta' } as Element }]),
    )
    expect(screen.getByTestId('active')).toHaveTextContent('beta')
  })

  it('does nothing when the browser has no IntersectionObserver', () => {
    render(<SpyHarness ids={['alpha']} />)
    expect(screen.getByTestId('active')).toHaveTextContent('none')
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
