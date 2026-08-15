import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { componentDockUrl, footerColumns, footerLatestPosts } from '../data'

describe('Footer', () => {
  it('renders all footer columns with their links', () => {
    render(<Footer />)
    for (const column of footerColumns) {
      const nav = screen.getByRole('navigation', { name: column.title })
      for (const link of column.links) {
        // link names can repeat across columns — scope to the column
        expect(nav.textContent).toContain(link)
      }
    }
  })

  it('renders the latest posts widget', () => {
    render(<Footer />)
    for (const post of footerLatestPosts) {
      expect(screen.getAllByText(post.title).length).toBeGreaterThan(0)
    }
  })

  it('links Component Dock to the branded URL in the copyright bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', componentDockUrl)
    expect(link).toHaveAttribute('target', '_blank')
  })
})
