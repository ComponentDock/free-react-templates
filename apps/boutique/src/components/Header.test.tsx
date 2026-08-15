import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  cartLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  siteName,
} from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo, nav links, cart badge, and search', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      expect(within(nav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: cartLabel })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: searchLabel })).toBeInTheDocument()
  })

  it('opens and closes the mobile dropdown menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    for (const item of navItems) {
      expect(within(mobileNav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const link = within(mobileNav).getByRole('link', { name: navItems[0].label })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
