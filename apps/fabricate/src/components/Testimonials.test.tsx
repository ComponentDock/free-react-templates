import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What Our Clients Say')
  })

  it('renders three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fannie Rowe')).toBeInTheDocument()
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Sarah Thompson')).toBeInTheDocument()
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/outstanding industrial solutions/i)).toBeInTheDocument()
  })
})
