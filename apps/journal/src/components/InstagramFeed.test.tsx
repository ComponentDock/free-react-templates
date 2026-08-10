import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { instagramAutoAdvanceMs, instagramSeeds, instagramTitle } from '../data'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the title and all seven square images', () => {
    const { container } = render(<InstagramFeed />)

    expect(screen.getByRole('region', { name: instagramTitle })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(instagramSeeds.length)
  })

  it('shows the indigo overlay with the Instagram icon while hovering', () => {
    const { container } = render(<InstagramFeed />)

    const images = container.querySelectorAll('img')
    expect(screen.queryByTestId('insta-overlay-0')).not.toBeInTheDocument()

    fireEvent.mouseEnter(images[0]!)
    expect(screen.getByTestId('insta-overlay-0')).toBeInTheDocument()

    fireEvent.mouseLeave(images[0]!)
    expect(screen.queryByTestId('insta-overlay-0')).not.toBeInTheDocument()
  })

  it('moves forward with the next control and back with the previous control', () => {
    const { container } = render(<InstagramFeed />)

    const track = container.querySelector('[data-testid="insta-track"]')!
    fireEvent.click(screen.getByRole('button', { name: 'Next photos' }))
    expect(track.getAttribute('style')).toContain('translateX(-25%)')

    fireEvent.click(screen.getByRole('button', { name: 'Previous photos' }))
    expect(track.getAttribute('style')).toContain('translateX(-0%)')
  })

  it('wraps from the first view back to the last via the previous control', () => {
    const { container } = render(<InstagramFeed />)

    const track = container.querySelector('[data-testid="insta-track"]')!
    fireEvent.click(screen.getByRole('button', { name: 'Previous photos' }))
    expect(track.getAttribute('style')).toContain('translateX(-75%)')
  })

  it('auto-advances and wraps around the four views', () => {
    const { container } = render(<InstagramFeed />)

    const track = container.querySelector('[data-testid="insta-track"]')!
    act(() => {
      vi.advanceTimersByTime(instagramAutoAdvanceMs)
    })
    expect(track.getAttribute('style')).toContain('translateX(-25%)')

    act(() => {
      vi.advanceTimersByTime(instagramAutoAdvanceMs * 3)
    })
    expect(track.getAttribute('style')).toContain('translateX(-0%)')
  })

  it('clears the auto-advance timer on unmount', () => {
    const { container, unmount } = render(<InstagramFeed />)
    unmount()

    const track = container.querySelector('[data-testid="insta-track"]')
    expect(track).not.toBeInTheDocument()
  })
})
