import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /They use Spruce to create great websites/,
    )
  })

  it('renders the testimonial quote', () => {
    render(<Testimonials />)
    expect(
      screen.getByText(/Our platform seamlessly integrates with all major/),
    ).toBeInTheDocument()
  })

  it('renders the author name "Bob Frapples"', () => {
    render(<Testimonials />)
    expect(screen.getByText('Bob Frapples')).toBeInTheDocument()
  })

  it('renders the role "CEO at TechCorp"', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO at TechCorp')).toBeInTheDocument()
  })

  it('renders the testimonial image', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: 'Bob Frapples' })).toBeInTheDocument()
  })
})
