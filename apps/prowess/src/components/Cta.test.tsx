import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the Join Our Gym subtitle', () => {
    render(<Cta />)
    expect(screen.getByText('Join Our Gym')).toBeInTheDocument()
  })

  it('renders the Start Your Fitness Journey Today heading', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', {
        name: /start your fitness journey today/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders all benefit list items', () => {
    render(<Cta />)
    const benefits = [
      'Personal training sessions',
      'Access to all group classes',
      'Full gym facility access',
      'Nutrition consultation',
      'Progress tracking tools',
      'Community support',
    ]
    for (const benefit of benefits) {
      expect(screen.getByText(benefit)).toBeInTheDocument()
    }
  })

  it('renders a View Plans link', () => {
    render(<Cta />)
    const link = screen.getByRole('link', { name: /view plans/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#pricing')
  })

  it('renders the CTA image with alt text', () => {
    render(<Cta />)
    expect(screen.getByRole('img', { name: /group fitness class/i })).toBeInTheDocument()
  })

  it('renders six benefit items in a list', () => {
    render(<Cta />)
    const list = screen.getAllByRole('listitem')
    expect(list.length).toBeGreaterThanOrEqual(6)
  })
})
