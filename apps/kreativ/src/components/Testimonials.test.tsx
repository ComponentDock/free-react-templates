import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
    expect(screen.getByText('CEO, Nova Financial')).toBeInTheDocument()
    expect(screen.getByText('Lisa Thompson')).toBeInTheDocument()
    expect(screen.getByText('Founder, Mindful Inc.')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director, Urban Eats')).toBeInTheDocument()
  })

  it('renders quotes and avatars', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our brand completely/i)).toBeInTheDocument()
    expect(screen.getByText(/game-changer/i)).toBeInTheDocument()
    expect(screen.getByText(/exceeded all expectations/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { hidden: true }).length).toBeGreaterThanOrEqual(3)
  })
})
