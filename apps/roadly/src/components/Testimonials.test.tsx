import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the kicker, heading, and four quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Testimonial/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
    expect(screen.getAllByText('Roger Scott')).toHaveLength(4)
    for (const role of [
      'Marketing Manager',
      'Interface Designer',
      'UI Designer',
      'Web Developer',
    ]) {
      expect(screen.getByText(role)).toBeInTheDocument()
    }
  })
})
