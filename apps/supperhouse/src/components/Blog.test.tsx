import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  const posts = [
    { title: 'The Art of Perfect Risotto', date: '24 Mar', likes: 128, comments: 24 },
    { title: 'Farm to Table: Why It Matters', date: '18 Mar', likes: 96, comments: 17 },
    { title: 'Wine Pairing for Beginners', date: '12 Mar', likes: 74, comments: 31 },
    { title: 'Seasonal Menus: Spring Edition', date: '05 Mar', likes: 112, comments: 29 },
  ]

  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Blog/ })).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<Blog />)
    expect(screen.getByText(/Stories from our kitchen/)).toBeInTheDocument()
  })

  it('shows 4 blog post cards', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('each post has a title heading', () => {
    render(<Blog />)
    for (const post of posts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
  })

  it('each post displays its date', () => {
    render(<Blog />)
    for (const post of posts) {
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('each post shows likes count', () => {
    render(<Blog />)
    for (const post of posts) {
      expect(screen.getByText(String(post.likes))).toBeInTheDocument()
    }
  })

  it('each post shows comments count', () => {
    render(<Blog />)
    for (const post of posts) {
      expect(screen.getByText(String(post.comments))).toBeInTheDocument()
    }
  })

  it('each post has an image with alt text', () => {
    render(<Blog />)
    for (const post of posts) {
      expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument()
    }
  })

  it('each image has lazy loading', () => {
    render(<Blog />)
    for (const post of posts) {
      expect(screen.getByRole('img', { name: post.title })).toHaveAttribute('loading', 'lazy')
    }
  })

  it('each post has an excerpt', () => {
    render(<Blog />)
    expect(screen.getByText(/Master the technique/)).toBeInTheDocument()
    expect(screen.getByText(/How sourcing locally/)).toBeInTheDocument()
    expect(screen.getByText(/A simple guide to matching/)).toBeInTheDocument()
    expect(screen.getByText(/Explore our new spring menu/)).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    render(<Blog />)
    expect(document.getElementById('blog')).toBeInTheDocument()
  })
})
