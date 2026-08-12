import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the quote, author, role and photo', () => {
    render(<Testimonials />)

    expect(screen.getByText(/As conscious travelers/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fanny Spencer' })).toBeInTheDocument()
    expect(screen.getByText('Chief Executive, Amazon')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Fanny Spencer' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/corona-testimonial'),
    )
  })

  it('renders the quote icon', () => {
    const { container } = render(<Testimonials />)
    expect(container.querySelector('svg.lucide-quote')).toBeInTheDocument()
  })
})
