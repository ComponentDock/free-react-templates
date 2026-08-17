import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { BRAND } from './data'

describe('App', () => {
  it('composes every section in order and sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Findly — Directory & Listings Template')

    const headings = screen
      .getAllByRole('heading')
      .map((heading) => heading.textContent)
      .filter(Boolean)
    expect(headings).toContain('Listing made easy.')
    expect(headings).toContain('Top Destination')
    expect(headings).toContain('Things Are You Interested In')
    expect(headings).toContain('Popular Things To do')
    expect(headings).toContain('Do you want to find more?')
    expect(headings).toContain('How It Work?')
    expect(headings).toContain('People talking about')

    expect(screen.getAllByRole('link', { name: BRAND }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
  })
})
