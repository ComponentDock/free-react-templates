import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('My satisfied customer says')).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    const names = screen.getAllByText('Garreth Smith')
    expect(names).toHaveLength(3)
  })

  it('shows different positions', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText('Interface Designer')).toBeInTheDocument()
    expect(screen.getByText('UI Designer')).toBeInTheDocument()
  })

  it('renders quote text', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/Far far away/)
    expect(quotes.length).toBeGreaterThanOrEqual(3)
  })
})
