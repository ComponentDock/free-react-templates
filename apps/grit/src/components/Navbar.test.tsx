import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { menuCloseLabel, menuTriggerLabel, mobileNavLabel, navItems, siteName } from '../data'

describe('Navbar', () => {
  it('renders the brand wordmark and all nav links with the active link underlined', () => {
    render(<Navbar />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getAllByText(item.label).length).toBeGreaterThan(0)
    }
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks[0]).toHaveAttribute('aria-current', 'page')
  })

  it('shows a mobile menu toggle that expands the nav links on a panel', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: menuTriggerLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: mobileNavLabel })).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName(menuCloseLabel)
    for (const item of navItems) {
      expect(screen.getAllByText(item.label).length).toBe(2)
    }
    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link inside it is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const link = mobileNav.querySelector('a')
    expect(link).not.toBeNull()
    if (link) {
      link.addEventListener('click', (event) => event.preventDefault(), { once: true })
      await user.click(link)
    }
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
