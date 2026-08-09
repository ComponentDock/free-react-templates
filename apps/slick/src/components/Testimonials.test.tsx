import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading, quotes, and authors', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Customers Say About Us' })).toBeInTheDocument()
    expect(screen.getByText('Wilma Mumduya')).toBeInTheDocument()
    expect(screen.getByText('Jimmy Changa')).toBeInTheDocument()
    expect(screen.getAllByRole('blockquote').length).toBe(2)
  })
})
