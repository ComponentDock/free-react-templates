import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least three testimonials with quotes and authors', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: /testimonials/i })).toBeInTheDocument()

    expect(screen.getByText(/conversions jumped 40%/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText(/design taste and engineering rigor/i)).toBeInTheDocument()
    expect(screen.getByText('Marcus Reid')).toBeInTheDocument()
    expect(screen.getByText(/delivered ahead of schedule/i)).toBeInTheDocument()
    expect(screen.getByText('Priya Patel')).toBeInTheDocument()
  })
})
