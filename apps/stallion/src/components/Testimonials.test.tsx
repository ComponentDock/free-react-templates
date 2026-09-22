import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Testimonial from our Clients/i,
    )
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Helena Phillips')).toBeInTheDocument()
    expect(screen.getByText('Cordelia Barton')).toBeInTheDocument()
    expect(screen.getByText('Carrie Reese')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Transformed my approach/i)).toBeInTheDocument()
    expect(screen.getByText(/variety of classes/i)).toBeInTheDocument()
    expect(screen.getByText(/Professional trainers/i)).toBeInTheDocument()
  })

  it('renders profile images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
  })
})
