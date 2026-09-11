import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Latest News heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<Blog />)
    const headings = screen.getAllByText('Blog Post Title')
    expect(headings.length).toBe(3)
  })

  it('renders Read more links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read more/)
    expect(links.length).toBe(3)
  })

  it('displays dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('20 Jan 2026')).toBeInTheDocument()
    expect(screen.getByText('18 Jan 2026')).toBeInTheDocument()
    expect(screen.getByText('15 Jan 2026')).toBeInTheDocument()
  })
})
