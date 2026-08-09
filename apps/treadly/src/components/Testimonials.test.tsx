import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, three quote cards, and the stats row', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Our Customers Say' })).toBeInTheDocument()

    const quotes = [
      ['Marcus Chen', 'Marathon Runner'],
      ['Emily Rodriguez', 'Fitness Instructor'],
      ['David Kim', 'Sneaker Enthusiast'],
    ] as const
    const figures = screen.getAllByRole('figure')
    expect(figures).toHaveLength(3)
    for (const [name, role] of quotes) {
      const figure = figures.find((candidate) => within(candidate).queryByText(name))!
      expect(within(figure).getByText(role)).toBeInTheDocument()
      expect(within(figure).getByRole('img', { name })).toBeInTheDocument()
      expect(
        within(figure).getByRole('img', { name: 'Rated 5 out of 5 stars' }),
      ).toBeInTheDocument()
    }

    const stats = ['50K+', '4.9/5', '15K+', '98%']
    for (const value of stats) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Would Recommend')).toBeInTheDocument()
    expect(
      within(document.querySelector('#testimonials')!).getByText('Average Rating'),
    ).toBeInTheDocument()
  })
})
