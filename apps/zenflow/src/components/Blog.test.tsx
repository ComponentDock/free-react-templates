import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Latest News')).toBeInTheDocument()
  })

  it('renders the Twitter Feed section', () => {
    render(<Blog />)
    expect(screen.getByText('Twitter Feed')).toBeInTheDocument()
  })

  it('renders blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Design Trends in 2024')).toBeInTheDocument()
    expect(screen.getByText('How to Build Better Products')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(2)
  })

  it('renders client logos', () => {
    render(<Blog />)
    expect(screen.getByText('Company A')).toBeInTheDocument()
    expect(screen.getByText('Company E')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('March 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('March 10, 2024')).toBeInTheDocument()
  })
})
