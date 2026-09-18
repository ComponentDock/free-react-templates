import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Happy Clients' })).toBeInTheDocument()
  })

  it('renders all testimonial cards with names', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Wilson')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, BuildRight Inc.')).toBeInTheDocument()
    expect(screen.getByText('Director, UrbanDev')).toBeInTheDocument()
    expect(screen.getByText('Manager, ConstructCo')).toBeInTheDocument()
  })

  it('renders testimonial images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
