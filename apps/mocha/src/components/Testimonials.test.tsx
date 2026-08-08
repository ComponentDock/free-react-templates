import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, subtitle, and three attributed testimonials', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What People Are Saying' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Join thousands/)).toBeInTheDocument()

    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Coffee Enthusiast')).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('Food Blogger')).toBeInTheDocument()
    expect(screen.getByText('David Park')).toBeInTheDocument()
    expect(screen.getByText('Home Barista')).toBeInTheDocument()
  })
})
