import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { pageTitle, skipLabel } from './data'

describe('App', () => {
  it('sets the document title and renders the skip link', () => {
    render(<App />)
    expect(document.title).toBe(pageTitle)
    expect(screen.getByRole('link', { name: skipLabel })).toHaveAttribute('href', '#main')
  })

  it('renders every reference section in order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const sections = Array.from(main.querySelectorAll('section')).map((section) =>
      section.getAttribute('aria-label') ?? section.id,
    )
    expect(sections).toEqual([
      'Featured property',
      'Property search',
      'about',
      'properties',
      'agents',
      'Testimonials',
      'blog',
    ])
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
