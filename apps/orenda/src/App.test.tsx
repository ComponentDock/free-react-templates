import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Orenda — Online Education Template')
  })

  it('composes every section in reference order', () => {
    render(<App />)
    const sections = [
      'home',
      'categories',
      'stats',
      'courses',
      'instructors',
      'about',
      'testimonials',
      'blog',
      'contact',
    ]
    const ids = Array.from(document.querySelectorAll('section[id]')).map((el) => el.id)
    const ordered = sections.filter((id) => ids.includes(id))
    expect(ordered).toEqual(sections)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
