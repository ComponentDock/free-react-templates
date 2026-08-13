import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Carousel } from './Carousel'
import { hero } from '../data'

describe('Carousel', () => {
  it('keeps both slides in the DOM with exactly one active at a time', () => {
    const { container } = render(<Carousel />)
    const headings = container.querySelectorAll('h1')
    expect(headings).toHaveLength(2)
    expect(headings[0]).toHaveTextContent(hero.slides[0]!.heading)
    expect(headings[1]).toHaveTextContent(hero.slides[1]!.heading)

    // The first slide is visible to the accessibility tree; the second is
    // hidden behind aria-hidden.
    expect(
      screen.getByRole('heading', { level: 1, name: hero.slides[0]!.heading }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 1, name: hero.slides[1]!.heading }),
    ).not.toBeInTheDocument()
  })

  it('shows the date line and both action buttons on each slide', () => {
    render(<Carousel />)
    // Both slides' copy stays in the DOM (text queries ignore aria-hidden).
    expect(screen.getAllByText(hero.dateLine)).toHaveLength(2)
    // The active slide exposes its action buttons to the accessibility tree.
    expect(screen.getByRole('link', { name: hero.getTicketLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.watchVideoLabel })).toBeInTheDocument()
  })

  it('switches slides with the next/prev controls and dots', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: hero.slides[1]!.heading }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 1, name: hero.slides[0]!.heading }),
    ).not.toBeInTheDocument()

    // Prev from the second slide wraps back to the first.
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: hero.slides[0]!.heading }),
    ).toBeInTheDocument()

    // Dots jump directly to a slide.
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(
      screen.getByRole('heading', { level: 1, name: hero.slides[1]!.heading }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
