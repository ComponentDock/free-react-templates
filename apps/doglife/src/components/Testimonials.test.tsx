import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the four testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    expect(screen.getByText('Ricky Fisher')).toBeInTheDocument()
    expect(screen.getByText('Ken Davis')).toBeInTheDocument()
    expect(screen.getByText('Mellisa Griffin')).toBeInTheDocument()
    expect(screen.getByText('Robert Steward')).toBeInTheDocument()
  })

  it('renders a photo for every testimonial', () => {
    const { container } = render(<Testimonials />)

    expect(container.querySelectorAll('img')).toHaveLength(4)
  })
})
