import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroSlides } from '../data'

describe('Hero', () => {
  it('renders the two-line serif headline over a purple overlay', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Charter Yacht')
    expect(heading.textContent).toContain('The Luxury Of Traveling')
  })

  it('shows previous/next arrow controls on the right side of the hero', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('advances to the following slide when the next control is activated', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps around when navigating past the last slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    for (let i = 0; i < heroSlides.length; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next slide' }))
    }
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('button', { name: `Go to slide ${heroSlides.length}` }),
    ).toHaveAttribute('aria-current', 'true')
  })

  it('jumps directly to a slide when its indicator is activated', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
