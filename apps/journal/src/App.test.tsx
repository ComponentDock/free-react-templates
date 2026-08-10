import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Journal — Lifestyle Blog Template')
  })

  it('composes the page in the reference section order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    const hero = screen.getByRole('region', { name: 'Featured posts' })
    const intro = screen.getByRole('region', { name: 'Magazine intro' })
    const latest = screen.getByRole('region', { name: 'Latest posts' })
    const sidebar = screen.getByRole('complementary', { name: 'Sidebar' })
    const instagram = screen.getByRole('region', { name: 'Follow us @ Instagram' })

    expect(hero.compareDocumentPosition(intro) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(intro.compareDocumentPosition(latest) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(latest.compareDocumentPosition(sidebar) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      sidebar.compareDocumentPosition(instagram) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })
})
