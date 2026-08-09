import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Navbar, DARK_KEY } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the brand, nav links, dropdown, CTA, dark toggle and menu button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /roamly home/i })).toBeInTheDocument()
    expect(screen.getByText('Roamly')).toBeInTheDocument()
    for (const label of ['Destinations', 'Tours', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('button', { name: /resources/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Book Now' }).length).toBe(2)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toBeInTheDocument()
  })

  it('lists the Resources dropdown links', () => {
    render(<Navbar />)
    for (const label of ['Travel Blog', 'Travel Guides', 'FAQ']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles dark mode on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem(DARK_KEY)).toBe('light')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem(DARK_KEY)).toBe('dark')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem(DARK_KEY)).toBe('light')
  })

  it('starts in dark mode when the stored preference is dark', () => {
    window.localStorage.setItem(DARK_KEY, 'dark')
    render(<Navbar />)
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('opens the mobile menu and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
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
    await user.keyboard('{ArrowDown}')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    const toursLinks = screen.getAllByRole('link', { name: 'Tours' })
    await user.click(toursLinks[toursLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    const ctaLinks = screen.getAllByRole('link', { name: 'Book Now' })
    await user.click(ctaLinks[ctaLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
