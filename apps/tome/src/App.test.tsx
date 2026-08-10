import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { blogEntries, brandName, heroSlides, menuOpenLabel, navLinks } from './data'

describe('App', () => {
  it('composes all sections, sets the document title and exposes the landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Tome — Blog Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Header brand.
    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    // Hero slider (left split).
    const firstSlide = heroSlides[0]!
    expect(
      within(main).getByRole('heading', { level: 1, name: firstSlide.headline }),
    ).toBeInTheDocument()
    // Blog grid (right split).
    for (const entry of blogEntries) {
      expect(
        within(main).getByRole('heading', { level: 3, name: entry.heading }),
      ).toBeInTheDocument()
    }
    // Pagination.
    expect(within(main).getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
  })

  it('opens the slide-out navigation from the hamburger and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('navigation', { name: 'Main menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const nav = screen.getByRole('navigation', { name: 'Main menu' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: 'Main menu' })).not.toBeInTheDocument()
  })
})
