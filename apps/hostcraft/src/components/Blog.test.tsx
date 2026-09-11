import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading and 3 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('How to Choose the Right Hosting Plan')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Web Performance Tips')).toBeInTheDocument()
    expect(screen.getByText('Understanding Cloud VPS Technology')).toBeInTheDocument()
  })

  it('renders blog metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    // "By Admin" appears twice (two posts by Admin)
    expect(screen.getAllByText(/By Admin/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('5 Comments')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    expect(screen.getByAltText('How to Choose the Right Hosting Plan')).toBeInTheDocument()
  })
})
