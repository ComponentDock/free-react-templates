import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText("What our Client's Say about us")).toBeInTheDocument()
  })

  it('renders three testimonial cards with author names', () => {
    render(<Testimonials />)
    const names = screen.getAllByText('Mark Alviro Wiens')
    expect(names).toHaveLength(3)
  })

  it('renders author titles', () => {
    render(<Testimonials />)
    const titles = screen.getAllByText('CEO at Google')
    expect(titles).toHaveLength(3)
  })
})
