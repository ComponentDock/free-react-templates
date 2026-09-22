import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'The Blog' })).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders Read More links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: 'Read More' })
    expect(links).toHaveLength(3)
  })

  it('renders the View all blog posts link', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: 'View all blog posts' })).toBeInTheDocument()
  })
})
