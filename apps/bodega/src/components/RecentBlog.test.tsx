import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentBlog } from './RecentBlog'

describe('RecentBlog', () => {
  it('renders heading and blog posts', () => {
    render(<RecentBlog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Fashion Trends for 2024')).toBeInTheDocument()
    expect(screen.getByText('How to Style Your Denim')).toBeInTheDocument()
    expect(screen.getByText('Summer Collection Preview')).toBeInTheDocument()
  })

  it('shows post dates', () => {
    render(<RecentBlog />)
    expect(screen.getByText('Mar 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('Mar 10, 2024')).toBeInTheDocument()
    expect(screen.getByText('Mar 05, 2024')).toBeInTheDocument()
  })

  it('shows post excerpts', () => {
    render(<RecentBlog />)
    expect(screen.getByText(/Discover the latest styles/)).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<RecentBlog />)
    expect(screen.getByRole('region', { name: 'Recent blog posts' })).toBeInTheDocument()
  })
})
