import { afterEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { bannerPosts, brandName, menuOpenLabel, posts, socialTiles, toggleDarkLabel } from './data'

describe('App', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
    window.localStorage.clear()
  })

  it('composes all sections, sets the document title and exposes the landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Ochre — Blog Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    for (const post of bannerPosts) {
      expect(within(main).getByRole('heading', { level: 2, name: post.title })).toBeInTheDocument()
    }
    for (const post of posts) {
      expect(within(main).getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
    expect(within(main).getByRole('link', { name: 'Load More' })).toBeInTheDocument()
    expect(within(main).getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Instagram' })).toBeInTheDocument()
    for (let i = 0; i < socialTiles.length; i += 1) {
      expect(
        within(main).getByRole('link', { name: `Instagram tile ${i + 1}` }),
      ).toBeInTheDocument()
    }
  })

  it('toggles dark mode from the navbar', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: toggleDarkLabel }))
    expect(document.documentElement).toHaveClass('dark')
  })

  it('opens the mobile menu from the navbar', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
  })
})
