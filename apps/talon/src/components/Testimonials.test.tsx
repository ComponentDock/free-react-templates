import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and two testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'What People Say' })).toBeInTheDocument()

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('CEO, Company')).toBeInTheDocument()

    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('CTO, Startup')).toBeInTheDocument()

    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(2)
  })
})
