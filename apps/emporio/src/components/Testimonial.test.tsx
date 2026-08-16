import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the heading, quote, avatar and author without any source attribution', () => {
    render(<Testimonial />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Customer Testimonial' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Everybody is different/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Portrait of Petey Cruiser' })).toBeInTheDocument()
    expect(screen.getByText('Petey Cruiser')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
    expect(screen.queryByText(/Designer at/)).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /Designer/ })).not.toBeInTheDocument()
  })
})
