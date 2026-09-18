import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and all 4 testimonial cards', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Emily Watson')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
    expect(screen.getByText('Sophie Laurent')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
  })

  it('shows roles, testimonial text, star ratings, and avatar images', () => {
    render(<Testimonials />)

    expect(screen.getByText('CEO, BrightPath')).toBeInTheDocument()
    expect(screen.getByText('Founder, NovaTech')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director, UrbanStyle')).toBeInTheDocument()
    expect(screen.getByText('CTO, DataFlow')).toBeInTheDocument()

    expect(screen.getByText(/absolute pleasure/)).toBeInTheDocument()

    const starElements = document.querySelectorAll('.fill-accent-400')
    expect(starElements.length).toBe(20)

    const avatars = screen.getAllByRole('img', { name: /portrait of/i })
    expect(avatars.length).toBe(4)
  })
})
