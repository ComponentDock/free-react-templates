import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  buyTicketsLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  siteName,
  tagline,
} from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('renders the wordmark, tagline, nav links, search, and ticket button', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()
    expect(screen.getByText(tagline)).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      expect(within(nav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('searchbox', { name: searchLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: buyTicketsLabel })).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'linkedin' })).toBeInTheDocument()
  })

  it('opens and closes the mobile overlay menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    for (const item of navItems) {
      expect(within(mobileNav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }

    await user.click(within(mobileNav).getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    await user.click(within(mobileNav).getByRole('link', { name: navItems[0].label }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
