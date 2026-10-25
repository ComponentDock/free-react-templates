import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { HERO_FACTS, HERO_IMAGE, HERO_PHRASES } from '../data'
import { resetMedia, stubMedia } from './helpers'

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  resetMedia()
})

function setScroll(scrollY: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('Hero', () => {
  it('renders the eyebrow, the two-line headline and the lede', () => {
    render(<Hero />)

    expect(screen.getByText('RCVS registered · Shrewsbury · Independent since 2009')).toHaveClass(
      'text-primary-700',
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Your vet should tell you')
    expect(heading).toHaveTextContent(HERO_PHRASES[0]!)
    expect(heading).toHaveClass('lg:text-6xl')
    expect(heading.querySelector('[data-testid="typewriter"]')).toHaveClass('text-gradient')
    expect(screen.getByText(/An independent small animal practice in Shrewsbury/)).toBeVisible()
  })

  it('puts the gradient ground and the two parallax blobs behind the copy', () => {
    render(<Hero />)

    const section = screen.getByRole('heading', { level: 1 }).closest('section')
    expect(section).toHaveAttribute('id', 'top')
    expect(section).toHaveClass('bg-gradient-to-b', 'from-primary-50', 'to-white')

    const blobs = document.querySelectorAll('[data-parallax]')
    expect(blobs).toHaveLength(2)
    expect(blobs[0]).toHaveAttribute('data-parallax', '0.15')
    expect(blobs[1]).toHaveAttribute('data-parallax', '-0.1')
  })

  it('drags the blobs by the absolute scroll offset, times each factor', () => {
    render(<Hero />)

    setScroll(400)

    const blobs = document.querySelectorAll<HTMLElement>('[data-parallax]')
    expect(blobs[0]!.style.transform).toBe('translateY(60px)')
    expect(blobs[1]!.style.transform).toBe('translateY(-40px)')
  })

  it('leaves an off-screen blob alone', () => {
    render(<Hero />)
    const blob = document.querySelector<HTMLElement>('[data-parallax="0.15"]')!

    expect(blob.style.transform).toBe('translateY(0px)')

    blob.getBoundingClientRect = () =>
      ({ bottom: -12, top: -300, left: 0, right: 0, width: 0, height: 0 }) as DOMRect
    setScroll(900)

    // Off-screen: the mount-time transform stands, it is not advanced further.
    expect(blob.style.transform).toBe('translateY(0px)')
  })

  it('shows the two CTAs and the four static facts in order', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Register your pet' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'See the fee guide' })).toHaveAttribute('href', '#fees')

    HERO_FACTS.forEach((fact) => {
      expect(screen.getAllByText(fact.value).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(fact.label).length).toBeGreaterThanOrEqual(1)
    })
    expect(screen.getAllByText('Registered pets').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the page photograph from a deterministic seed', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: HERO_IMAGE.alt })
    expect(image).toHaveAttribute('src', HERO_IMAGE.src)
    expect(image).toHaveAttribute('width', '1024')
    expect(image.parentElement).toHaveClass('rounded-2xl', 'shadow-2xl', 'ring-1')
  })

  it('cycles the three phrases every 3 s, fading out first', () => {
    vi.useFakeTimers()
    render(<Hero />)
    const span = screen.getByTestId('typewriter')

    expect(span).toHaveTextContent(HERO_PHRASES[0]!)

    act(() => {
      vi.advanceTimersByTime(2700)
    })
    expect(span).toHaveClass('opacity-0', 'translate-y-2.5')

    act(() => {
      vi.advanceTimersByTime(300)
    })
    expect(span).toHaveTextContent(HERO_PHRASES[1]!)
    expect(span).toHaveClass('opacity-100')

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(span).toHaveTextContent(HERO_PHRASES[2]!)

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(span).toHaveTextContent(HERO_PHRASES[0]!)
  })

  it('holds the first phrase and never animates under reduced motion', () => {
    vi.useFakeTimers()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(9000)
    })

    expect(screen.getByTestId('typewriter')).toHaveTextContent(HERO_PHRASES[0]!)
    expect(screen.getByTestId('typewriter')).toHaveClass('opacity-100')
  })
})
