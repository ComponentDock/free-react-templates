import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Header } from './Header'
import { brandName, contactEmail, homeDropdown, tagline, welcomeMessage } from '../data'

describe('Header', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the top strip with welcome message, email, socials and search', () => {
    render(<Header />)
    expect(screen.getByText(welcomeMessage)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contactEmail })).toHaveAttribute(
      'href',
      `mailto:${contactEmail}`,
    )
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders the logo row with the brand name and tagline', () => {
    render(<Header />)
    const home = screen.getByRole('link', { name: `${brandName} home` })
    expect(home).toBeInTheDocument()
    expect(within(home).getByText(brandName)).toBeInTheDocument()
    expect(within(home).getByText(tagline)).toBeInTheDocument()
  })

  it('renders all main navigation links', () => {
    render(<Header />)
    for (const link of ['Home', 'Featured', 'About', 'Categories', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('opens and closes the Home dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const dropdown = screen.getByRole('button', { name: 'Home dropdown' })
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
    await user.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'true')
    for (const item of homeDropdown) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('link', { name: homeDropdown[0]! }))
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: homeDropdown[0]! })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    // Desktop nav + mobile panel duplicates.
    expect(screen.getAllByRole('link', { name: 'Featured' })).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getAllByRole('link', { name: 'Featured' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const contact = screen.getAllByRole('link', { name: 'Contact' })[1]!
    await user.click(contact)
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(1)
  })

  it('closes the mobile menu when a dropdown item is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // With the desktop dropdown closed, the item only exists in the mobile panel.
    await user.click(screen.getByRole('link', { name: homeDropdown[0]! }))
    expect(screen.getAllByRole('link', { name: 'Featured' })).toHaveLength(1)
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('petal-theme')).toBe('dark')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('petal-theme')).toBe('light')
  })

  it('restores the persisted dark preference on mount', () => {
    window.localStorage.setItem('petal-theme', 'dark')
    render(<Header />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
