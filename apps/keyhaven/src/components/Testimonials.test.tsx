import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and three testimonial cards with quote, property, avatar, name and role', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Our Clients Say' })).toBeInTheDocument()
    expect(
      screen.getByText(/Hear from homeowners who found their perfect property/i),
    ).toBeInTheDocument()

    const david = screen.getByText('David & Emma Thompson').closest('figure')!
    expect(
      within(david).getByText(/Sarah made our dream of owning a Manhattan penthouse/i),
    ).toBeInTheDocument()
    expect(within(david).getByText('Manhattan Penthouse')).toBeInTheDocument()
    expect(within(david).getByText('Homeowners')).toBeInTheDocument()
    expect(within(david).getByRole('img', { name: 'David & Emma Thompson' })).toBeInTheDocument()

    const robert = screen.getByText('Robert Chen').closest('figure')!
    expect(within(robert).getByText('Multiple Properties')).toBeInTheDocument()
    expect(within(robert).getByText('Investor')).toBeInTheDocument()

    const sofia = screen.getByText('Sofia Martinez').closest('figure')!
    expect(within(sofia).getByText('Brooklyn Condo')).toBeInTheDocument()
    expect(within(sofia).getByText('First-time Buyer')).toBeInTheDocument()
  })
})
