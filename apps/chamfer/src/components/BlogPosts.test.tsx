import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders the blog section heading', () => {
    render(<BlogPosts />)
    expect(screen.getByRole('heading', { name: /Our Recent News/i })).toBeInTheDocument()
  })

  it('renders two blog post titles', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Top Interior Design Trends for 2025')).toBeInTheDocument()
    expect(screen.getByText('How to Choose the Right Color Palette')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<BlogPosts />)
    const readMoreLinks = screen.getAllByText(/Read More/i)
    expect(readMoreLinks.length).toBe(2)
  })

  it('displays post metadata', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Jhon Sunsa')).toBeInTheDocument()
    expect(screen.getByText('Maria Lane')).toBeInTheDocument()
  })
})
