import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { brandName, heroSlides, posts } from './data'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Petal — Blog Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Header
    expect(screen.getByRole('link', { name: `${brandName} home` })).toBeInTheDocument()
    // Hero
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
    // Posts
    expect(screen.getByRole('heading', { level: 3, name: posts[0]!.title })).toBeInTheDocument()
    // Sidebar
    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()
    // Instagram strip + footer
    expect(screen.getAllByRole('heading', { name: 'Instagram' })).toHaveLength(2)
  })
})
