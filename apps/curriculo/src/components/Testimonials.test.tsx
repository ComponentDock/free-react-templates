import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/client/i)).toBeInTheDocument()
    expect(screen.getByText(/testimonial/i)).toBeInTheDocument()
  })

  it('renders all testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional redesign/i)).toBeInTheDocument()
    expect(screen.getByText(/game-changer/i)).toBeInTheDocument()
    expect(screen.getByText(/design system/i)).toBeInTheDocument()
    expect(screen.getByText(/translate business goals/i)).toBeInTheDocument()
  })

  it('renders all author names', () => {
    render(<Testimonials />)
    expect(screen.getByText(/sarah chen/i)).toBeInTheDocument()
    expect(screen.getByText(/marcus rivera/i)).toBeInTheDocument()
    expect(screen.getByText(/emily watson/i)).toBeInTheDocument()
    expect(screen.getByText(/james park/i)).toBeInTheDocument()
  })
})
