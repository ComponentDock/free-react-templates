import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'
import { blogPosts } from '../data'

describe('BlogSection', () => {
  it('renders the Lifestyle Category heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Lifestyle Category' })).toBeInTheDocument()
  })

  it('renders six blog cards with category chip, date, comments and title', () => {
    render(<BlogSection />)
    expect(screen.getAllByRole('article')).toHaveLength(6)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getAllByText(post.category).length).toBeGreaterThan(0)
    }
    expect(screen.getByText('February 20, 2018')).toBeInTheDocument()
    expect(screen.getAllByText('4').length).toBeGreaterThan(0)
  })

  it('renders circular pagination with the first page active', () => {
    render(<BlogSection />)
    const pagination = screen.getByRole('navigation', { name: 'Pagination' })
    expect(pagination).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument()
  })
})
