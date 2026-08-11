import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Banner } from './Banner'
import { bannerAutoplayMs, bannerHeadline, bannerSlides, shareStripLabel } from '../data'

const slideWrapper = (alt: string) => screen.getByAltText(alt).parentElement as HTMLElement

describe('Banner', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all four slides with their images', () => {
    render(<Banner />)
    for (const slide of bannerSlides) {
      expect(screen.getByAltText(slide.alt)).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${slide.seed}/1600/900`,
      )
    }
  })

  it('overlays the white serif headline on the banner', () => {
    render(<Banner />)
    const heading = screen.getByRole('heading', { level: 1, name: bannerHeadline })
    expect(heading).toHaveClass('font-serif', 'text-white')
  })

  it('shows the rotated share strip with three social links and the label', () => {
    render(<Banner />)
    expect(screen.getByRole('link', { name: 'Share on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on Pinterest' })).toBeInTheDocument()
    expect(screen.getByText(shareStripLabel)).toBeInTheDocument()
  })

  it('renders one indicator per slide with the first active', () => {
    render(<Banner />)
    const indicators = bannerSlides.map((_, index) =>
      screen.getByRole('button', { name: `Go to slide ${index + 1}` }),
    )
    expect(indicators).toHaveLength(bannerSlides.length)
    expect(indicators[0]!).toHaveAttribute('aria-current', 'true')
    expect(indicators[1]!).not.toHaveAttribute('aria-current')
  })

  it('switches the visible slide when an indicator is clicked', () => {
    render(<Banner />)
    expect(slideWrapper(bannerSlides[0]!.alt)).toHaveClass('opacity-100')
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(slideWrapper(bannerSlides[2]!.alt)).toHaveClass('opacity-100')
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('autoplays through the slides and wraps around', () => {
    vi.useFakeTimers()
    render(<Banner />)
    expect(slideWrapper(bannerSlides[0]!.alt)).toHaveClass('opacity-100')

    act(() => {
      vi.advanceTimersByTime(bannerAutoplayMs)
    })
    expect(slideWrapper(bannerSlides[1]!.alt)).toHaveClass('opacity-100')
    expect(slideWrapper(bannerSlides[0]!.alt)).toHaveClass('opacity-0')

    act(() => {
      vi.advanceTimersByTime(bannerAutoplayMs * (bannerSlides.length - 1))
    })
    expect(slideWrapper(bannerSlides[0]!.alt)).toHaveClass('opacity-100')
  })

  it('clears the autoplay timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Banner />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(bannerAutoplayMs * 2)
    })
    expect(screen.queryByAltText(bannerSlides[1]!.alt)).not.toBeInTheDocument()
  })
})
