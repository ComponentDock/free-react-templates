import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and first testimonial by default', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: /what students say/i })).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('University of Technology')).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(dots.length).toBe(3)
  })

  it('navigates to second testimonial on dot click', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    await user.click(dots[1]!)

    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Stanford University')).toBeInTheDocument()
  })

  it('navigates to third testimonial on dot click', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    await user.click(dots[2]!)

    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
    expect(screen.getByText('MIT')).toBeInTheDocument()
  })

  it('renders testimonial quote using getAllByText for duplicate text', () => {
    render(<Testimonials />)

    const quotes = screen.getAllByText(/far far away, behind the word mountains/i)
    expect(quotes.length).toBeGreaterThanOrEqual(1)
  })

  it('renders avatar image', () => {
    render(<Testimonials />)

    expect(screen.getByAltText('Sarah Johnson')).toBeInTheDocument()
  })
})
