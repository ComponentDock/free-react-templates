import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the three testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'What Our Customers Say' })).toBeInTheDocument()
    expect(screen.getByText('Mrs Lara Sullivan')).toBeInTheDocument()
    expect(screen.getByText('Ajoy Das')).toBeInTheDocument()
    expect(screen.getByText('Akash Khan')).toBeInTheDocument()
  })

  it('renders a photo for every testimonial', () => {
    const { container } = render(<Testimonials />)

    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
