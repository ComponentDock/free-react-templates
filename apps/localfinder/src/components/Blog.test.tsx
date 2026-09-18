import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('How to Find the Best Local Services in Your Area')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Restaurants to Visit This Weekend')).toBeInTheDocument()
    expect(screen.getByText('Why Local Shopping Matters More Than Ever')).toBeInTheDocument()
  })

  it('shows dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 12, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 8, 2026')).toBeInTheDocument()
  })

  it('shows excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover tips and tricks/)).toBeInTheDocument()
  })
})
