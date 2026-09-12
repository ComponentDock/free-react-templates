import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders the section heading', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Blog Posts')).toBeInTheDocument()
  })

  it('renders all four blog posts', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Separated they live in Bookmarksgrove right')).toBeInTheDocument()
    expect(screen.getByText('The Big Oxmox advised her not to do so')).toBeInTheDocument()
    expect(screen.getByText('A small river named Duden flows by')).toBeInTheDocument()
    expect(screen.getByText('Far far away behind the word mountains')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<BlogPosts />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(4)
  })

  it('renders blog post dates', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Feb 26th, 2024')).toBeInTheDocument()
    expect(screen.getByText('Mar 10th, 2024')).toBeInTheDocument()
    expect(screen.getByText('Apr 5th, 2024')).toBeInTheDocument()
    expect(screen.getByText('May 12th, 2024')).toBeInTheDocument()
  })
})
