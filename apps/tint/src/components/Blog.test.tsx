import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Some statistics/i })).toBeInTheDocument()
  })

  it('displays 3 blog post cards', () => {
    render(<Blog />)
    const headings = screen.getAllByRole('heading', { name: /Trends|Color|Small Space/i })
    expect(headings).toHaveLength(3)
  })

  it('renders dates and comments for each post', () => {
    render(<Blog />)
    expect(screen.getByText('Feb 14, 2024')).toBeInTheDocument()
    expect(screen.getByText('12 comments')).toBeInTheDocument()
    expect(screen.getByText('Feb 10, 2024')).toBeInTheDocument()
    expect(screen.getByText('Feb 06, 2024')).toBeInTheDocument()
  })
})
