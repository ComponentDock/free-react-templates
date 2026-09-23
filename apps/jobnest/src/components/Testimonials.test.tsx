import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and 3 testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()

    const authorNames = ['John Smith', 'Sarah Johnson', 'Michael Chen']
    for (const name of authorNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    expect(screen.getByText(/JobNest made it incredibly easy/)).toBeInTheDocument()
    expect(screen.getByText(/As a recruiter/)).toBeInTheDocument()
    expect(screen.getByText(/I found my current position/)).toBeInTheDocument()
  })
})
