import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders a five-star rating, quote, and author name', () => {
    render(<Testimonials />)

    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toHaveTextContent('Mother Earth')
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
  })
})
