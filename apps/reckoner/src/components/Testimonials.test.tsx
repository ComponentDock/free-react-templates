import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'What Our Clients Say' })).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all testimonial quotes', () => {
    render(<Testimonials />)

    expect(
      screen.getByText(/Reckoner has transformed our financial management/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/The team at Reckoner provides exceptional service/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Professional, reliable, and thorough/)).toBeInTheDocument()
  })

  it('renders all author names', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders author roles', () => {
    render(<Testimonials />)

    expect(screen.getByText('CEO, TechStart Inc.')).toBeInTheDocument()
    expect(screen.getByText('CFO, GrowthVentures')).toBeInTheDocument()
    expect(screen.getByText('Owner, Rodriguez Retail')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)

    expect(screen.getByRole('img', { name: 'Sarah Johnson' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Michael Chen' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Emily Rodriguez' })).toBeInTheDocument()
  })

  it('renders star rating icons for each testimonial', () => {
    const { container } = render(<Testimonials />)

    // Each testimonial has 5 star SVGs
    const starIcons = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(starIcons.length).toBe(15)
  })
})
