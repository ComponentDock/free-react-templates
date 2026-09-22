import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Experience Luxury Like Never Before')).toBeInTheDocument()
    expect(screen.getByText('Top 5 Reasons to Book a Suite')).toBeInTheDocument()
    expect(screen.getByText('A Culinary Journey at Our Restaurant')).toBeInTheDocument()
    expect(screen.getAllByText(/Read More →/).length).toBe(3)
  })
})
