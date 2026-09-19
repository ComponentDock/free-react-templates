import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText('Sommelier')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Owner')).toBeInTheDocument()
  })

  it('renders testimonial avatars', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })
})
