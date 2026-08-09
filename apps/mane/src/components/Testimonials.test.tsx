import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, a quote, and an author', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Happy Customer' })).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
    expect(screen.getByText('JONT NICOLIN KOOK')).toBeInTheDocument()
  })

  it('shows a five-star rating', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(5)
  })
})
