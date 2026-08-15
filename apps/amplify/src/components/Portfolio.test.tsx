import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'
import { portfolioSlides } from '../data'

describe('Portfolio', () => {
  it('renders the heading, sub-line, and a carousel of image slides with overlays', () => {
    const { container } = render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Portfolio' })).toBeInTheDocument()
    expect(
      screen.getByText(/We stay on top of our industry by being experts in yours/),
    ).toBeInTheDocument()
    const slides = container.querySelectorAll('[data-slide]')
    expect(slides.length).toBe(portfolioSlides.length)
    expect(screen.getAllByRole('button', { name: /View/ }).length).toBe(portfolioSlides.length)
  })

  it('navigates the carousel with next and previous controls', async () => {
    const user = userEvent.setup()
    const { container } = render(<Portfolio />)
    const track = container.querySelector('[data-track]')
    expect(track).toHaveStyle('transform: translateX(-0%)')
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(track).toHaveStyle('transform: translateX(-100%)')
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(track).toHaveStyle('transform: translateX(-0%)')
    // Wraps around past the end back to the first slide.
    for (let i = 0; i < portfolioSlides.length; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next slide' }))
    }
    expect(track).toHaveStyle('transform: translateX(-0%)')
  })
})
