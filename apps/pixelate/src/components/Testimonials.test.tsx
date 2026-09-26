import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Client Testimonial')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Working with Alex was an absolute pleasure/)).toBeInTheDocument()
    expect(
      screen.getByText(/incredible ability to translate complex requirements/),
    ).toBeInTheDocument()
  })

  it('renders testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('CEO at TechFlow')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Product Lead at Innovate')).toBeInTheDocument()
  })

  it('renders author avatars', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('James Cooper')).toBeInTheDocument()
  })
})
