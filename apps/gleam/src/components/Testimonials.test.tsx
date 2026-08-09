import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and all six quote cards', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
    for (const name of [
      'Sarah Mitchell',
      'David Chen',
      'Jessica Rodriguez',
      'Amanda Foster',
      'Michael Torres',
      'Linda Park',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText('Homeowner, 2 years')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Owner')).toBeInTheDocument()
  })

  it('renders initials avatars and quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText('SM')).toBeInTheDocument()
    expect(screen.getByText('DC')).toBeInTheDocument()
    expect(screen.getByText(/transformed our home/)).toBeInTheDocument()
    expect(screen.getByText(/passes every health inspection/)).toBeInTheDocument()
  })
})
