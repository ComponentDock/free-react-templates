import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { App } from './App'

vi.mock('./components/Sidebar', () => ({
  Sidebar: () => <aside data-testid="sidebar">Sidebar</aside>,
}))

vi.mock('./components/HeroSlider', () => ({
  HeroSlider: ({ slides }: { slides: unknown[] }) => (
    <section data-testid="hero-slider">Hero with {slides.length} slides</section>
  ),
}))

vi.mock('./components/BlogGrid', () => ({
  BlogGrid: ({ posts }: { posts: unknown[] }) => (
    <section data-testid="blog-grid">Grid with {posts.length} posts</section>
  ),
}))

vi.mock('./components/Pagination', () => ({
  Pagination: ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => (
    <nav data-testid="pagination">
      Page {currentPage} of {totalPages}
    </nav>
  ),
}))

describe('App', () => {
  it('renders the sidebar', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('renders the hero slider', () => {
    render(<App />)
    expect(screen.getByTestId('hero-slider')).toBeInTheDocument()
  })

  it('renders the blog grid', () => {
    render(<App />)
    expect(screen.getByTestId('blog-grid')).toBeInTheDocument()
  })

  it('renders the pagination', () => {
    render(<App />)
    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Editorial — Magazine Template')
  })
})
