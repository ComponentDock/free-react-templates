import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { hero } from '../content'
import { resetMedia, setScroll, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  resetMedia()
})

describe('Hero', () => {
  it('renders the badge, the two-part headline, the lede and both CTAs', () => {
    render(<Hero />)

    expect(screen.getByText(hero.badge)).toHaveClass('rounded-full', 'border-primary-200')
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('A garden is a')
    expect(heading).toHaveTextContent('ten-year conversation')
    expect(screen.getByText(hero.lede)).toHaveClass('text-lg', 'text-gray-600')

    expect(screen.getByRole('link', { name: hero.primary.label })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: hero.secondary.label })).toHaveAttribute(
      'href',
      '#work',
    )

    const image = screen.getByAltText(hero.imageAlt)
    expect(image).toHaveAttribute('src', hero.image)
    expect(image).toHaveClass('aspect-[2/1]', 'max-w-5xl', 'rounded-2xl')
  })

  it('paints the gradient line and the four static stats', () => {
    const { container } = render(<Hero />)

    const accent = container.querySelector('[data-typewriter]')
    expect(accent).toHaveClass('text-gradient')
    expect(accent).toHaveTextContent(hero.phrases[0] as string)

    hero.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toHaveClass('text-3xl', 'font-bold')
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    })
    expect(screen.getByText('Gardens planted').closest('dl')).toHaveAttribute('id', 'about')
  })

  it('cycles the three phrases every three seconds', () => {
    vi.useFakeTimers()
    const { container } = render(<Hero />)
    const line = container.querySelector('[data-typewriter]')

    act(() => vi.advanceTimersByTime(3000))
    expect(line).toHaveClass('opacity-0')

    act(() => vi.advanceTimersByTime(300))
    expect(line).toHaveTextContent(hero.phrases[1] as string)
    expect(line).toHaveClass('opacity-100')

    act(() => vi.advanceTimersByTime(3300))
    expect(line).toHaveTextContent(hero.phrases[2] as string)

    act(() => vi.advanceTimersByTime(3300))
    expect(line).toHaveTextContent(hero.phrases[0] as string)
  })

  it('clears a pending fade when it unmounts mid-swap', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)

    act(() => vi.advanceTimersByTime(3000))
    unmount()

    expect(() => act(() => vi.advanceTimersByTime(1000))).not.toThrow()
  })

  it('keeps the first phrase under reduced motion', () => {
    vi.useFakeTimers()
    stubMedia(true)
    const { container } = render(<Hero />)
    const line = container.querySelector('[data-typewriter]')

    act(() => vi.advanceTimersByTime(9000))
    expect(line).toHaveTextContent(hero.phrases[0] as string)
  })

  it('drifts the two blobs at their own rates on scroll', () => {
    const { container } = render(<Hero />)
    const blobs = container.querySelectorAll('[data-parallax]')
    expect(blobs).toHaveLength(2)

    act(() => setScroll(200, 4000, 800))
    expect(blobs[0]).toHaveStyle({ transform: 'translate3d(0, 30px, 0)' })
    expect(blobs[1]).toHaveStyle({ transform: 'translate3d(0, -20px, 0)' })
  })

  it('leaves the blobs still under reduced motion', () => {
    stubMedia(true)
    const { container } = render(<Hero />)
    const blobs = container.querySelectorAll('[data-parallax]')

    act(() => setScroll(200, 4000, 800))
    expect(blobs[0]).toHaveStyle({ transform: 'translate3d(0, 0px, 0)' })
  })
})
