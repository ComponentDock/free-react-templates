import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Micky Mouse')).toBeInTheDocument()
    expect(screen.getByText('Jane Cooper')).toBeInTheDocument()
    expect(screen.getByText('Robert Fox')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/humanitarian aid agencies/)).toBeInTheDocument()
  })

  it('renders author images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Micky Mouse')).toBeInTheDocument()
    expect(screen.getByAltText('Jane Cooper')).toBeInTheDocument()
    expect(screen.getByAltText('Robert Fox')).toBeInTheDocument()
  })
})
