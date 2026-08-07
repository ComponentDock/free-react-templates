import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, the quote, and the reviewer', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'They are the best' })).toBeInTheDocument()

    const quote = screen.getByRole('blockquote')
    expect(quote).toBeInTheDocument()

    expect(screen.getByText('Chriss Turner')).toBeInTheDocument()
    expect(screen.getByText('CEO Enterprise')).toBeInTheDocument()
  })
})
