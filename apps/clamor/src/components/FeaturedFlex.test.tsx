import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { FeaturedFlex } from './FeaturedFlex'
import {
  featuredSlides,
  introHeadline,
  introSubline,
  nextSlideLabel,
  prevSlideLabel,
  sliderAutoplayMs,
} from '../data'

function activeSlideTitle(container: HTMLElement): string | null {
  return container.querySelector('[data-active="true"]')?.textContent ?? null
}

describe('FeaturedFlex', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the pink intro panel with headline and sub-line', () => {
    render(<FeaturedFlex />)
    expect(screen.getByRole('heading', { level: 1, name: introHeadline })).toBeInTheDocument()
    expect(screen.getByText(introSubline)).toBeInTheDocument()
  })

  it('renders all five slides with titles and meta, the first one active', () => {
    const { container } = render(<FeaturedFlex />)
    for (const slide of featuredSlides) {
      expect(screen.getByText(slide.title)).toBeInTheDocument()
    }
    // All slides share the same meta line.
    expect(screen.getAllByText(featuredSlides[0]!.meta)).toHaveLength(featuredSlides.length)
    expect(activeSlideTitle(container)).toContain(featuredSlides[0]!.title)
  })

  it('advances with the next button and wraps around with prev', async () => {
    const user = userEvent.setup()
    const { container } = render(<FeaturedFlex />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(activeSlideTitle(container)).toContain(featuredSlides[1]!.title)

    await user.click(screen.getByRole('button', { name: prevSlideLabel }))
    expect(activeSlideTitle(container)).toContain(featuredSlides[0]!.title)

    // Prev on the first slide wraps to the last one.
    await user.click(screen.getByRole('button', { name: prevSlideLabel }))
    expect(activeSlideTitle(container)).toContain(featuredSlides[featuredSlides.length - 1]!.title)
  })

  it('auto-advances to the next slide after the autoplay interval', () => {
    vi.useFakeTimers()
    const { container } = render(<FeaturedFlex />)

    act(() => {
      vi.advanceTimersByTime(sliderAutoplayMs)
    })

    expect(activeSlideTitle(container)).toContain(featuredSlides[1]!.title)
  })
})
