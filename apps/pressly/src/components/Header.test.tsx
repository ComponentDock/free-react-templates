import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { brandName, menuCloseLabel, menuOpenLabel, navLinks, socials } from '../data'

describe('Header', () => {
  it('shows the brand wordmark, social icons, and controls', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()

    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('toggles the Page dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const pageBtn = screen.getByRole('button', { name: 'Page' })
    await user.click(pageBtn)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()

    await user.click(pageBtn)
    expect(screen.queryByText('About')).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu via hamburger buttons', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const openButtons = screen.getAllByLabelText(menuOpenLabel)
    expect(openButtons.length).toBe(2)

    // Click the first hamburger (top header) to open
    const firstToggle = openButtons[0]
    if (!firstToggle) throw new Error('Expected first toggle button')
    await user.click(firstToggle)

    // There should be close menu buttons now
    const closeButtons = screen.getAllByLabelText(menuCloseLabel)
    expect(closeButtons.length).toBe(2)

    // Click the second hamburger (nav bar) to close
    const secondClose = closeButtons[1]
    if (!secondClose) throw new Error('Expected second close button')
    await user.click(secondClose)
    expect(screen.queryByLabelText(menuCloseLabel)).not.toBeInTheDocument()
  })

  it('closes mobile menu when a mobile nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const openButtons = screen.getAllByLabelText(menuOpenLabel)
    const firstToggle = openButtons[0]
    if (!firstToggle) throw new Error('Expected first toggle button')
    await user.click(firstToggle)
    expect(screen.getAllByLabelText(menuCloseLabel).length).toBeGreaterThanOrEqual(1)

    // Click a mobile nav link — it should close the menu
    const mobileNav = screen.getAllByText('Home')
    const lastHome = mobileNav[mobileNav.length - 1]
    if (!lastHome) throw new Error('Expected mobile Home link')
    await user.click(lastHome)
    expect(screen.queryByLabelText(menuCloseLabel)).not.toBeInTheDocument()
  })
})
