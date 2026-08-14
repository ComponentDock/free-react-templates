import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { HeroWall, photos, tilesPerView } from './HeroWall'

describe('tilesPerView', () => {
  it('maps viewport widths to tile counts per the original breakpoints', () => {
    expect(tilesPerView(480)).toBe(1)
    expect(tilesPerView(768)).toBe(2)
    expect(tilesPerView(991)).toBe(3)
    expect(tilesPerView(1200)).toBe(4)
    expect(tilesPerView(1400)).toBe(5)
    expect(tilesPerView(1600)).toBe(7)
  })

  it('provides 21 seeded photos', () => {
    expect(photos).toHaveLength(21)
    expect(photos[0]!.src).toContain('seed/photofolio-1/')
  })
})

describe('HeroWall', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders an auto-advancing window of photo tiles with hover captions', () => {
    render(<HeroWall />)

    // jsdom default width 1024 -> 4 tiles per view.
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(4)
    expect(imgs[0]).toHaveAttribute('alt', 'Portfolio photograph 1')
    expect(screen.getAllByText('Take a look at my Portfolio').length).toBe(4)

    // Auto-advance slides the window forward.
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('alt', 'Portfolio photograph 2')
  })

  it('updates the tile count on resize', () => {
    render(<HeroWall />)
    expect(screen.getAllByRole('img')).toHaveLength(4)

    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 480 })
    act(() => {
      fireEvent(window, new Event('resize'))
    })
    expect(screen.getAllByRole('img')).toHaveLength(1)
  })

  it('renders the social sidebar with five links', () => {
    render(<HeroWall />)
    const socials = screen.getAllByLabelText(/Pinterest|Facebook|Twitter|Dribbble|Behance/)
    expect(socials).toHaveLength(10) // 5 vertical + 5 mobile bar
  })
})
