import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()

    const names = ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez']
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('shows testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/Excellent legal representation/)).toBeInTheDocument()
    expect(screen.getByText(/complex legal matter/)).toBeInTheDocument()
    expect(screen.getByText(/responsive, knowledgeable/)).toBeInTheDocument()
  })
})
