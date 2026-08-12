import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toContain('Gambit')
  })

  it('composes every section in order', () => {
    const { container } = render(<App />)
    const sectionIds = Array.from(container.querySelectorAll('section'))
      .map((section) => section.id)
      .filter(Boolean)
    expect(sectionIds).toEqual([
      'home',
      'about',
      'games',
      'recent-update',
      'gallery',
      'testimonials',
      'pricing',
      'faq',
      'blog',
      'newsletter',
    ])
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
