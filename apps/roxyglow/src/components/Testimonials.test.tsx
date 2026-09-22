import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByText('Our Happy Guest Says')).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('shows the Guests label for each testimonial', () => {
    render(<Testimonials />)
    const guestsLabels = screen.getAllByText('Guests')
    expect(guestsLabels.length).toBe(3)
  })

  it('displays five gold stars per testimonial', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(15) // 3 testimonials * 5 stars
  })

  it('has circular avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
  })
})
