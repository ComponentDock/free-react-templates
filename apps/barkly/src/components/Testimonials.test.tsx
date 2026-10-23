import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

const authors = ['Ricky Fisher', 'Ken Davis', 'Mellisa Griffin', 'Robert Steward'] as const

describe('Testimonials', () => {
  it('shows the heading and the four quote cards with authors', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    for (const author of authors) {
      expect(screen.getByText(author)).toBeInTheDocument()
    }
  })

  it('renders a quote for every customer', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('blockquote')).toHaveLength(4)
  })
})
