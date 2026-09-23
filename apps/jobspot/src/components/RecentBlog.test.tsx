import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentBlog } from './RecentBlog'

describe('RecentBlog', () => {
  it('renders the section heading', () => {
    render(<RecentBlog />)
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<RecentBlog />)
    expect(screen.getByText('How to Get Hired in Tech')).toBeInTheDocument()
    expect(screen.getByText('Remote Work Best Practices')).toBeInTheDocument()
    expect(screen.getByText('Building Your Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Salary Negotiation Guide')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<RecentBlog />)
    expect(screen.getByText(/Tips and tricks/i)).toBeInTheDocument()
    expect(screen.getByText(/Stay productive/i)).toBeInTheDocument()
  })

  it('renders blog post metadata', () => {
    render(<RecentBlog />)
    expect(screen.getAllByText('Admin').length).toBe(4)
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<RecentBlog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
