import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { DARK_KEY, Navbar } from './Navbar'

beforeEach(() => {
  window.localStorage.clear()
})

describe('Navbar', () => {
  it('renders the brand, all links, the Listen Now CTA, and the dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Airwave home' })).toBeInTheDocument()
    for (const label of [
      'Episodes',
      'About',
      'Sponsors',
      'Newsletter',
      'Sponsorships',
      'Blog',
      'Release Notes',
      'Contact',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getAllByRole('link', { name: 'Listen Now' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('defaults to dark mode and toggles it on the document root, persisting the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Dark is the default experience (matches the demo's dark-first design).
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem(DARK_KEY)).toBe('0')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem(DARK_KEY)).toBe('1')
  })

  it('opens and closes the mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the mobile menu open when another key is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)

    await user.keyboard('a')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the mobile menu after choosing a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    const mobileAbout = screen.getAllByRole('link', { name: 'About' })
    await user.click(mobileAbout[mobileAbout.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const ctaLinks = screen.getAllByRole('link', { name: 'Listen Now' })
    await user.click(ctaLinks[ctaLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
