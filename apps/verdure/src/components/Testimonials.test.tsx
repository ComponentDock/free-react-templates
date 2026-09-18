import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: /What Our Clients Say/i }),
    ).toBeInTheDocument()
  })

  it('renders testimonial names', () => {
    render(<Testimonials />)
    const names = screen.getAllByText('Roger Scott')
    expect(names.length).toBe(3)
  })

  it('renders testimonial positions', () => {
    render(<Testimonials />)
    const positions = screen.getAllByText('Marketing Manager')
    expect(positions.length).toBe(3)
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img', { name: 'Roger Scott' })
    expect(avatars.length).toBe(3)
  })
})
