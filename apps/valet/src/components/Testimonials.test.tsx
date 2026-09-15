import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('renders at least three testimonial quotes', () => {
    render(<Testimonials />)
    const names = ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim']
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
