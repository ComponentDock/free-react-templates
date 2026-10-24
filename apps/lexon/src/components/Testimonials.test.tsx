import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /words from clients/i })).toBeInTheDocument()
  })

  it('renders all testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('David Jonathan')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional legal representation/i)).toBeInTheDocument()
    expect(screen.getByText(/professional, responsive/i)).toBeInTheDocument()
    expect(screen.getByText(/outstanding attorneys/i)).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Developer')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart Inc.')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
