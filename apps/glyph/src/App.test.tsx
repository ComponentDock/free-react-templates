import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Glyph — Blog Template')
  })

  it('composes the page in the reference section order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Latest posts' })).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()

    const hero = screen.getByRole('region', { name: 'Featured posts' })
    const grid = screen.getByRole('region', { name: 'Latest posts' })
    const sidebar = screen.getByRole('complementary', { name: 'Sidebar' })
    expect(hero.compareDocumentPosition(grid) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(grid.compareDocumentPosition(sidebar) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
