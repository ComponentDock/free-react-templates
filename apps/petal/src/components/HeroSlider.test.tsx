import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with category tag, headline, date and Read More', () => {
    render(<HeroSlider />)
    const first = heroSlides[0]!
    expect(screen.getByRole('heading', { level: 2, name: first.title })).toBeInTheDocument()
    expect(screen.getByText(first.category)).toBeInTheDocument()
    expect(screen.getByText(first.date)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: first.alt })).toBeInTheDocument()
  })

  it('moves to the next slide and wraps back to the first', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const next = screen.getByRole('button', { name: 'Next slide' })
    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()
    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[2]!.title }),
    ).toBeInTheDocument()
    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
  })

  it('moves to the previous slide and wraps to the last one', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const prev = screen.getByRole('button', { name: 'Previous slide' })
    await user.click(prev)
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[2]!.title }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dots and marks the active dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(heroSlides.length)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[2]!.title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
