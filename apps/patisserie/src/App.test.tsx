import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { hero, about, testimonials, blog, instagram } from './data'

describe('App', () => {
  it('composes all sections in the reference order', () => {
    render(<App />)
    const main = screen.getByRole('main')

    // Header first (wordmark + nav), then hero, about, cakes, video,
    // testimonials, blog, instagram, footer last.
    expect(screen.getByRole('link', { name: 'Patisserie' })).toBeInTheDocument()
    expect(main).toContainElement(screen.getByRole('heading', { level: 1, name: hero.headline }))
    expect(screen.getAllByRole('heading', { level: 2, name: about.heading })).toBeDefined()
    expect(screen.getAllByText('Add to cart')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Play bakery video' })).toBeInTheDocument()
    expect(screen.getAllByText(testimonials.cards[0]!.quote)).toHaveLength(3)
    expect(screen.getByRole('heading', { level: 2, name: blog.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: instagram.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('orders the sections: hero before about, blog before instagram', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2')).map(
      (node) => node.textContent ?? '',
    )
    const heroIndex = headings.findIndex((t) => t.includes(hero.headline))
    const aboutIndex = headings.findIndex((t) => t.includes(about.heading.slice(0, 20)))
    const blogIndex = headings.findIndex((t) => t.includes(blog.heading))
    const instaIndex = headings.findIndex((t) => t.includes(instagram.heading))
    expect(heroIndex).toBeGreaterThanOrEqual(0)
    expect(aboutIndex).toBeGreaterThan(heroIndex)
    expect(blogIndex).toBeGreaterThan(aboutIndex)
    expect(instaIndex).toBeGreaterThan(blogIndex)
  })
})
