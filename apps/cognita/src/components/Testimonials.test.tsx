import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: /what students say/i })).toBeInTheDocument()

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    const quotes = screen.getAllByText(/far far away, behind the word mountains/i)
    expect(quotes.length).toBeGreaterThanOrEqual(1)
  })

  it('renders role information', () => {
    render(<Testimonials />)

    expect(screen.getByText('Web Development Student')).toBeInTheDocument()
    expect(screen.getByText('Data Science Student')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing Student')).toBeInTheDocument()
  })
})
