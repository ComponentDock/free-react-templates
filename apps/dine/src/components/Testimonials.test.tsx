import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders 3 testimonials with quotes, author names, and roles', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByRole('blockquote')
    expect(quotes).toHaveLength(3)

    // Author names are in <cite> elements, query by text content
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()

    // Roles are in <span> elements
    expect(screen.getByText('Food Critic')).toBeInTheDocument()
    expect(screen.getByText('Regular Customer')).toBeInTheDocument()
    expect(screen.getByText('Chef')).toBeInTheDocument()
  })
})
