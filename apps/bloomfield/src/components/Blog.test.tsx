import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByText('Latest posts')).toBeInTheDocument()
    expect(screen.getByText('Bloomfield tricks')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/8 Romantic Gifts/)).toBeInTheDocument()
    expect(screen.getByText(/Red Rose/)).toBeInTheDocument()
    expect(screen.getByText(/Beautiful Mandalas/)).toBeInTheDocument()
  })

  it('renders the view all posts link', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: /view all posts/i })).toHaveAttribute('href', '#')
  })

  it('renders blog post tags', () => {
    render(<Blog />)
    expect(screen.getByText('Trend news')).toBeInTheDocument()
    expect(screen.getByText('Tips & Idea')).toBeInTheDocument()
    expect(screen.getByText('DIY & Crafts')).toBeInTheDocument()
  })
})
