import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { documentTitle, featuredRecipesTitle, skipLabel, topRecipesTitle } from './data'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
  })

  it('composes all sections with proper landmarks in order', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    const headings = Array.from(container.querySelectorAll('h5')).map((h) => h.textContent)
    expect(headings).toContain(topRecipesTitle)
    expect(headings).toContain(featuredRecipesTitle)
    expect(headings.indexOf(topRecipesTitle)).toBeLessThan(headings.indexOf(featuredRecipesTitle))
  })

  it('renders the section headings of every recipe section', () => {
    render(<App />)
    // The hero's H3 lives inside <main> (the footer also has an H3).
    expect(within(screen.getByRole('main')).getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5, name: topRecipesTitle })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 5, name: featuredRecipesTitle }),
    ).toBeInTheDocument()
  })
})
