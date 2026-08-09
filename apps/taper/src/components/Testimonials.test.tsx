import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the quote slider with an author name', () => {
    render(<Testimonials />)

    expect(screen.getByRole('blockquote')).toBeInTheDocument()
    expect(screen.getByText('JONT NICOLIN KOOK')).toBeInTheDocument()
  })

  it('shows a five-star rating', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
  })
})
