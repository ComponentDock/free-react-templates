import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroCarousel } from './HeroCarousel'
import { heroSlides, previousSlideLabel, nextSlideLabel } from '../data'

describe('HeroCarousel', () => {
  it('renders the first slide with image and overlay card', () => {
    render(<HeroCarousel />)
    const slide = heroSlides[0]!
    expect(screen.getByRole('img', { name: slide.title })).toBeInTheDocument()
    expect(screen.getByText(slide.title)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(slide.author))).toBeInTheDocument()
  })

  it('navigates to next slide', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<HeroCarousel />)

    expect(screen.getByText(heroSlides[0]!.title)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByText(heroSlides[1]!.title)).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<HeroCarousel />)

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByText(heroSlides[heroSlides.length - 1]!.title)).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<HeroCarousel />)

    const dot = screen.getByRole('button', { name: 'Go to slide 2' })
    await user.click(dot)
    expect(screen.getByText(heroSlides[1]!.title)).toBeInTheDocument()
  })
})
