import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Many People Selling Online')).toBeInTheDocument()
    expect(screen.getByText('Local Business Growth Tips')).toBeInTheDocument()
    expect(screen.getByText('Top Categories This Month')).toBeInTheDocument()
  })

  it('renders View All Posts button', () => {
    render(<Blog />)
    expect(screen.getByText('View All Posts')).toBeInTheDocument()
  })

  it('renders author info', () => {
    render(<Blog />)
    const matches = screen.getAllByText(/by Mark Spiker/)
    expect(matches.length).toBe(3)
  })
})
