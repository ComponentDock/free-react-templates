import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroCategory, heroSlides, heroTitle } from '../data'

describe('HeroSlider', () => {
  it('shows the first slide with the overlaid title and category tag', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('img', { name: heroSlides[0]!.alt })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: heroSlides[1]!.alt })).not.toBeInTheDocument()
    expect(screen.getByText(heroCategory)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('moves to the following slide when the next control is activated', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('img', { name: heroSlides[1]!.alt })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: heroSlides[0]!.alt })).not.toBeInTheDocument()
  })

  it('wraps to the last slide when previous is activated on the first slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    const last = heroSlides[heroSlides.length - 1]!
    expect(screen.getByRole('img', { name: last.alt })).toBeInTheDocument()
  })

  it('jumps to a slide via the dots and marks the active dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dot = screen.getByRole('button', { name: 'Go to slide 3' })
    expect(dot).toHaveAttribute('aria-current', 'false')
    await user.click(dot)
    expect(dot).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('img', { name: heroSlides[2]!.alt })).toBeInTheDocument()
  })
})
