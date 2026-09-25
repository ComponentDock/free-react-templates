import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct title', () => {
    render(<App />)

    expect(document.title).toBe('Groove — Music Artist Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero heading
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/Groove Sessions/)

    // Section headings — "newest albums" appears in both Discography and Video
    expect(screen.getByRole('heading', { level: 2, name: /The electro vibe/ })).toBeInTheDocument()
    const newestAlbums = screen.getAllByRole('heading', { level: 2, name: /newest albums/ })
    expect(newestAlbums.length).toBeGreaterThanOrEqual(2)
    expect(
      screen.getByRole('heading', { level: 2, name: /WHEN WE ALL FALL ASLEEP/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Got a Question/ })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
