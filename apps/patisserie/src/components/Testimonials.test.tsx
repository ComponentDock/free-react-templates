import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it("renders the 'Food Lover's Say' heading", () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("Food Lover's Say")
  })

  it('renders three cards each with five gold stars, a quote and the author', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByLabelText('5 out of 5 stars')
    expect(ratings).toHaveLength(3)
    for (const rating of ratings) {
      expect(rating.querySelectorAll('svg')).toHaveLength(5)
    }
    expect(screen.getAllByText(testimonials.cards[0]!.quote)).toHaveLength(3)
    expect(screen.getAllByText('Wilma Mumduya')).toHaveLength(3)
  })

  it('shows a circular avatar for each author', () => {
    const { container } = render(<Testimonials />)
    const avatars = container.querySelectorAll('img')
    expect(avatars).toHaveLength(3)
    for (const avatar of avatars) {
      expect(avatar.className).toContain('rounded-full')
    }
  })
})
