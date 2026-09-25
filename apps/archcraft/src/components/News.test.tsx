import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { News } from './News'

describe('News', () => {
  it('renders heading and 3 blog posts', () => {
    render(<News />)
    expect(screen.getByRole('heading', { name: 'Our Blog Posts' })).toBeInTheDocument()
    expect(screen.getByText('Modern Architecture Trends in 2025')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Design Principles')).toBeInTheDocument()
    expect(screen.getByText('The Future of Interior Spaces')).toBeInTheDocument()
  })

  it('has a View All Posts button', () => {
    render(<News />)
    expect(screen.getByRole('link', { name: 'View All Posts' })).toBeInTheDocument()
  })

  it('shows dates for each post', () => {
    render(<News />)
    expect(screen.getByText('Sep 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2025')).toBeInTheDocument()
  })
})
