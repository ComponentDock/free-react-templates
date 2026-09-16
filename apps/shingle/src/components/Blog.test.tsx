import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
  })

  it('renders 3 blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/How to Choose the Right Roofing Material/i)).toBeInTheDocument()
    expect(screen.getByText(/Signs Your Roof Needs Immediate Repair/i)).toBeInTheDocument()
    expect(screen.getByText(/Benefits of Regular Roof Maintenance/i)).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: 'Read more' })
    expect(links.length).toBe(3)
  })
})
