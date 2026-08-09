import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading, quotes, and authors', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText('Nihare Edersen')).toBeInTheDocument()
    expect(screen.getByText('Marco Bentley')).toBeInTheDocument()
    expect(screen.getAllByRole('blockquote').length).toBe(2)
  })
})
