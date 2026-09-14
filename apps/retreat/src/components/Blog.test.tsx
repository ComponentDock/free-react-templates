import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders 3 blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Top 10 Destinations for 2025')).toBeInTheDocument()
    expect(screen.getByText('The Art of Relaxation')).toBeInTheDocument()
    expect(screen.getByText('Farm to Table Experience')).toBeInTheDocument()
  })

  it('shows Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(3)
  })
})
