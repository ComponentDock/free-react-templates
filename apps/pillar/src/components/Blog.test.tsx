import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /News & Update/i })).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<Blog />)
    const posts = screen.getAllByText('Architectural Art Modern')
    expect(posts.length).toBe(3)
  })

  it('renders dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('29, January 2019')
    expect(dates.length).toBe(3)
  })

  it('renders the View All Posts link', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: /View All Posts/i })).toHaveAttribute('href', '#blog')
  })
})
