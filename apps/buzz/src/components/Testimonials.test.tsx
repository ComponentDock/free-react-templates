import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, a quote, and the author', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
    expect(screen.getByText('Watson, web developer')).toBeInTheDocument()
  })

  it('rates the testimonial with five stars', () => {
    const { container } = render(<Testimonials />)
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(5)
  })
})
