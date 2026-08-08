import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least three client quotes with names', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Best barbershop in Brooklyn/)).toBeInTheDocument()
    expect(screen.getByText(/hot towel shave from Jake/)).toBeInTheDocument()
    expect(screen.getByText(/Asian hair texture/)).toBeInTheDocument()

    expect(screen.getByText('Derek Williams')).toBeInTheDocument()
    expect(screen.getByText('Chris Martinez')).toBeInTheDocument()
    expect(screen.getByText('Kevin Tran')).toBeInTheDocument()
  })
})
