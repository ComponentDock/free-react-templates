import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Unison — Creative One Page Template')
  })

  it('composes every section in reference order', () => {
    render(<App />)
    const sections = [
      'home-section',
      'about-section',
      'team-section',
      'portfolio-section',
      'services-section',
      'testimonials-section',
      'pricing-section',
      'faq-section',
      'blog-section',
      'contact-section',
    ]
    const ids = Array.from(document.querySelectorAll('section[id]')).map((el) => el.id)
    const ordered = sections.filter((id) => ids.includes(id))
    expect(ordered).toEqual(sections)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
