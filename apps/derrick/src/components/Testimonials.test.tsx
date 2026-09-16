import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Love using Derrick')).toBeInTheDocument()
  })

  it('renders three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Civil Engineer')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Site Supervisor')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/Far far away/)
    expect(quotes.length).toBe(3)
  })

  it('has the about section id', () => {
    render(<Testimonials />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })
})
