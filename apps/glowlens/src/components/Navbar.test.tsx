import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchCloseLabel,
  searchOpenLabel,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the site name, primary nav links, and header controls', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toHaveAttribute('href', '#home')

    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      expect(within(nav).getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }

    expect(screen.getByRole('button', { name: searchOpenLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toBeInTheDocument()
  })

  it('opens the mobile menu and closes it via close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    for (const item of navItems) {
      expect(within(mobileNav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))

    const mobileAbout = screen
      .getAllByRole('link', { name: 'About' })
      .find((link) => link.closest('nav')?.getAttribute('aria-label') === mobileNavLabel)
    expect(mobileAbout).toBeDefined()
    await user.click(mobileAbout!)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('opens and closes the search overlay', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: searchOpenLabel }))
    expect(screen.getByText('Search')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: searchCloseLabel }))
    expect(screen.queryByText('Search')).not.toBeInTheDocument()
  })
})
