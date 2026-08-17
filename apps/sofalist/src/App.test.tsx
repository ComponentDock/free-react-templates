import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sofalist — Furniture Store Template')
  })

  it('composes all sections in order', () => {
    const { container } = render(<App />)
    const sections = Array.from(container.querySelectorAll('header, section, footer')).map(
      (node) => node.getAttribute('aria-label') ?? node.tagName,
    )
    expect(sections).toEqual([
      'HEADER',
      'Hero',
      'Features',
      'About',
      'Gallery',
      'Stats',
      'Testimonials',
      'How it works',
      'Blog',
      'FOOTER',
    ])
  })
})
