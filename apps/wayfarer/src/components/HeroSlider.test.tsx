import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  heroExploreLabel,
  heroSlides,
  nextSlideLabel,
  previousSlideLabel,
  slideLabelPrefix,
} from '../data'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide with its headline, text, and Explore Now button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[0].name })).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0].text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroExploreLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: previousSlideLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: nextSlideLabel })).toBeInTheDocument()
  })

  it('navigates forward, wraps around, and navigates back', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[1].name })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 1, name: heroSlides[0].name }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[2].name })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[0].name })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[2].name })).toBeInTheDocument()
  })

  it('jumps to a slide via the pagination dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: `${slideLabelPrefix} 3` }))
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[2].name })).toBeInTheDocument()
  })
})
