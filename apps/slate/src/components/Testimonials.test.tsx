import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three testimonial cards', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Allie Smith')).toBeInTheDocument()
    expect(screen.getByText('Harper Quinn')).toBeInTheDocument()
    expect(screen.getByText('Amelia Stone')).toBeInTheDocument()
    expect(screen.getByText('Founder, Northwind Studio')).toBeInTheDocument()
    expect(screen.getByText('Marketing Lead, Bluepeak Co.')).toBeInTheDocument()
    expect(screen.getByText('Director, Oak & Elm')).toBeInTheDocument()
  })

  it('renders a quote for each client', () => {
    render(<Testimonials />)
    expect(screen.getByText(/finally matches the quality of our work/)).toBeInTheDocument()
    expect(screen.getByText(/difference in speed and clarity/)).toBeInTheDocument()
    expect(screen.getByText(/complex redesign feel effortless/)).toBeInTheDocument()
  })
})
