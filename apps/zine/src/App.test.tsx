import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { brandName, heroTitle, loadMoreLabel, posts } from './data'

describe('App', () => {
  it('composes all sections, sets the document title and exposes the landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Zine — Blog Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Navbar brand.
    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    // Hero slider.
    expect(within(main).getByRole('heading', { level: 2, name: heroTitle })).toBeInTheDocument()
    // Blog post rows (h3).
    for (const post of posts) {
      expect(within(main).getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
    // Load more button.
    expect(within(main).getByRole('link', { name: loadMoreLabel })).toBeInTheDocument()
  })
})
