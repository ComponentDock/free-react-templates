import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and subtext', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: /loved by teams worldwide/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/see what our customers have to say about their experience/i),
    ).toBeInTheDocument()
  })

  it('renders three testimonial cards with stars, quotes, names and roles', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('img', { name: '5 out of 5 stars' })).toHaveLength(3)
    expect(screen.getByText(/cut our deployment time by 60%/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('CTO, TechFlow')).toBeInTheDocument()
    expect(screen.getByText(/automation features alone saved us 20\+ hours/i)).toBeInTheDocument()
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument()
    expect(screen.getByText('Head of Engineering, DataSync')).toBeInTheDocument()
    expect(screen.getByText(/best-in-class support/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Product Manager, CloudBase')).toBeInTheDocument()
  })
})
