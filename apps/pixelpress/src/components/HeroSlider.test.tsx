import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroSubtext, heroTitle, nextSlideLabel, previousSlideLabel, readMoreLabel } from '../data'

function activeSlide(): string | null {
  return document.querySelector('[data-slide]')?.getAttribute('data-slide') ?? null
}

describe('HeroSlider', () => {
  it('renders the headline, subtext, CTA and controls', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { name: heroTitle })).toBeInTheDocument()
    expect(screen.getByText(heroSubtext)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(readMoreLabel) })).toHaveAttribute(
      'href',
      '#latest-news',
    )
    expect(screen.getByRole('button', { name: previousSlideLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: nextSlideLabel })).toBeInTheDocument()
    expect(activeSlide()).toBe('pixelpress-hero-1')
  })

  it('advances to the next slide and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(activeSlide()).toBe('pixelpress-hero-2')
    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(activeSlide()).toBe('pixelpress-hero-1')
  })

  it('moves back to the previous slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(activeSlide()).toBe('pixelpress-hero-2')
  })
})
