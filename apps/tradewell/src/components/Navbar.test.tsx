import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('Navbar', () => {
  it('shows the site name, anchor links, status indicator, login link, and CTA', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByText('Tradewell')).toBeInTheDocument()
    for (const label of ['Invest', 'Markets', 'Pricing', 'Learn', 'About']) {
      expect(within(nav).getAllByText(label).length).toBeGreaterThan(0)
    }
    expect(within(nav).getByText('Markets Open')).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Log in' })).toBeInTheDocument()
    expect(within(nav).getAllByRole('link', { name: 'Get Started' }).length).toBeGreaterThan(0)
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('tradewell-theme')).toBe('dark')
  })

  it('reflects a persisted dark preference on mount', () => {
    window.localStorage.setItem('tradewell-theme', 'dark')
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is selected', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileLinks = screen.getAllByRole('link', { name: 'Markets' })
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile CTA is selected', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const ctas = screen.getAllByRole('link', { name: 'Get Started' })
    await user.click(ctas[ctas.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
