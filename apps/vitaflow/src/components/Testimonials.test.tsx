import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Happy Clients/)).toBeInTheDocument()
    expect(screen.getByText('Testimonies')).toBeInTheDocument()
  })

  it('renders 4 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Racky Henderson')).toBeInTheDocument()
    expect(screen.getByText('Henry Dee')).toBeInTheDocument()
    expect(screen.getByText('Mark Huff')).toBeInTheDocument()
    expect(screen.getByText('Rodel Golez')).toBeInTheDocument()
  })

  it('renders positions', () => {
    render(<Testimonials />)
    expect(screen.getByText('Father')).toBeInTheDocument()
    expect(screen.getByText('Businesswoman')).toBeInTheDocument()
    expect(screen.getByText('Entrepreneur')).toBeInTheDocument()
    expect(screen.getByText('Teacher')).toBeInTheDocument()
  })
})
