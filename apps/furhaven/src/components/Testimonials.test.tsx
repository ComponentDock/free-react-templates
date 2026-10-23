import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and a guardian testimonial card', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Testimonials from our guardians',
    )
    expect(screen.getByText('Mark Alviro Wiens')).toBeInTheDocument()
    expect(screen.getByText('CEO at Google')).toBeInTheDocument()
  })
})
