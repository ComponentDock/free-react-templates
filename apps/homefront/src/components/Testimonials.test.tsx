import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all three testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mark Wilson')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Agent')).toBeInTheDocument()
    expect(screen.getByText('Property Developer')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    expect(screen.getByText(/paradisematic country/)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars).toHaveLength(3)
  })
})
