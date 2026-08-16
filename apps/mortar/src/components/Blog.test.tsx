import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blog } from '../data'

describe('Blog', () => {
  it('renders the kicker and heading', () => {
    render(<Blog />)
    expect(screen.getByText(blog.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blog.heading })).toBeInTheDocument()
  })

  it('renders three post cards with date badge, meta, title, and excerpt', () => {
    render(<Blog />)
    expect(screen.getAllByText(blog.day)).toHaveLength(3)
    expect(screen.getAllByText(blog.month)).toHaveLength(3)
    expect(screen.getAllByText(blog.metaAuthor)).toHaveLength(3)
    expect(screen.getAllByText(blog.metaComments)).toHaveLength(3)
    expect(screen.getAllByRole('heading', { level: 3, name: blog.title })).toHaveLength(3)
    expect(screen.getAllByText(blog.excerpt)).toHaveLength(3)
  })
})
