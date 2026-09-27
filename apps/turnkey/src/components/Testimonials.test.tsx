import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/feedback from our real clients/i)).toBeInTheDocument()
  })

  it('renders testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Helena Phillips')).toBeInTheDocument()
    expect(screen.getByText('Cordelia Barton')).toBeInTheDocument()
    expect(screen.getByText('Carrie Reese')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO at TechCorp')).toBeInTheDocument()
    expect(screen.getByText('CEO at InnovateLab')).toBeInTheDocument()
    expect(screen.getByText('CEO at DataFlow')).toBeInTheDocument()
  })
})
