import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('How Our Customers Treat Us')).toBeInTheDocument()
  })

  it('renders 4 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fannie Rowe')).toBeInTheDocument()
    expect(screen.getByText('Hulda Sutton')).toBeInTheDocument()
    expect(screen.getByText('Lillie Summers')).toBeInTheDocument()
    expect(screen.getByText('Ruth Burns')).toBeInTheDocument()
  })

  it('renders review text for each testimonial', () => {
    render(<Testimonials />)
    const reviews = screen.getAllByText(/Accessories Here/)
    expect(reviews).toHaveLength(4)
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByText(/out of 5 stars/)
    expect(ratings).toHaveLength(4)
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(4)
  })
})
