import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroSlides, nextSlideLabel, previousSlideLabel } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with chip, title and byline', () => {
    render(<HeroSlider />)

    expect(screen.getByText(heroSlides[0]!.title)).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0]!.chipLabel)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(heroSlides[0]!.author))).toBeInTheDocument()
    expect(screen.getByRole('button', { name: previousSlideLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: nextSlideLabel })).toBeInTheDocument()
  })

  it('cycles forward and backward with the circular controls', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByText(heroSlides[1]!.title)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByText(heroSlides[0]!.title)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByText(heroSlides[1]!.title)).toBeInTheDocument()
  })
})
