import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and sub-paragraph', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Reviews & Testimonials' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/shared our table/)).toBeInTheDocument()
  })

  it('shows two testimonials with ratings, quotes and authors', () => {
    render(<Testimonials />)

    const ratings = screen.getAllByRole('img', { name: '5 out of 5 stars' })
    expect(ratings).toHaveLength(2)

    expect(screen.getByText(/The best Italian food/)).toBeInTheDocument()
    expect(screen.getByText(/unforgettable anniversary dinner/)).toBeInTheDocument()

    expect(screen.getByText('Sarah M.')).toBeInTheDocument()
    expect(screen.getByText('Michael R.')).toBeInTheDocument()
    expect(screen.getByText('Regular Guest')).toBeInTheDocument()
    expect(screen.getByText('Anniversary Dinner')).toBeInTheDocument()
  })
})
