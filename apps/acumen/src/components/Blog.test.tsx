import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
  })

  it('shows featured post', () => {
    render(<Blog />)
    expect(screen.getByText('How to Build a Strong Digital Presence')).toBeInTheDocument()
  })

  it('shows 3 side posts', () => {
    render(<Blog />)
    expect(screen.getByText('Top Trends in Web Design for 2025')).toBeInTheDocument()
    expect(screen.getByText('Why UX Matters More Than Ever')).toBeInTheDocument()
    expect(screen.getByText('Scaling Your Startup With Smart Tech')).toBeInTheDocument()
  })

  it('shows dates for all posts', () => {
    render(<Blog />)
    expect(screen.getByText('15 Mar, 2025')).toBeInTheDocument()
    expect(screen.getByText('10 Mar, 2025')).toBeInTheDocument()
    expect(screen.getByText('5 Mar, 2025')).toBeInTheDocument()
    expect(screen.getByText('1 Mar, 2025')).toBeInTheDocument()
  })

  it('has Read More link on featured post', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read More/)
    expect(links.length).toBeGreaterThanOrEqual(1)
  })
})
