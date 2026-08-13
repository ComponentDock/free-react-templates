import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in order with the expected landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2')).map((h) => h.textContent)
    expect(headings.join(' | ')).toContain('Kenedy Jackson')
    expect(headings.join(' | ')).toContain('Latest Works')
    expect(headings.join(' | ')).toContain('Job History')
    expect(headings.join(' | ')).toContain('Service Offers')
    expect(headings.join(' | ')).toContain('Contact Me')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Artisan — Personal Portfolio Template')
  })
})
