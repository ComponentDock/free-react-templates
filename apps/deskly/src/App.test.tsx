import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in a single page with the expected landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders all sections in order', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2')).map((h) => h.textContent)
    expect(headings).toEqual([
      expect.stringContaining('Where Great Work'),
      'Find Your Perfect Workspace',
      'Everything You Need',
      'Join a Thriving Community',
      'Flexible Plans for Every Team',
      'What Our Members Say',
      'Frequently Asked Questions',
      'See It for Yourself',
    ])
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Deskly — Coworking Template')
  })
})
