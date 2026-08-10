import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { brandName, featured, newsletterLabel, verticalPosts } from './data'

describe('App', () => {
  it('composes the sidebar, mobile navigation and blog grid, and sets the title', () => {
    render(<App />)

    expect(document.title).toBe('Volt — Travel & Lifestyle Blog')

    // Sidebar content renders twice: the fixed desktop aside + the drawer.
    expect(screen.getAllByRole('heading', { level: 1, name: brandName })).toHaveLength(2)
    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()
    expect(screen.getAllByLabelText(newsletterLabel)).toHaveLength(2)
    // Nav links (2 sets) + category links named "Travel" across the cards.
    expect(screen.getAllByRole('link', { name: 'Travel' }).length).toBeGreaterThanOrEqual(4)

    expect(screen.getByRole('heading', { name: featured.post.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: verticalPosts[0]!.title })).toBeInTheDocument()
  })
})
