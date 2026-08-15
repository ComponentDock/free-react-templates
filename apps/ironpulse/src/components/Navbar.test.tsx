import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchCloseLabel,
  searchInputLabel,
  searchLabel,
  searchOverlayLabel,
  searchSubmitLabel,
  siteName,
  socialItems,
} from '../data'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo, nav links, search icon, and social strip', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      expect(within(nav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()

    for (const item of socialItems) {
      expect(screen.getByRole('link', { name: item.name })).toBeInTheDocument()
    }
  })

  it('opens and closes the search overlay and submits the query', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('dialog', { name: searchOverlayLabel })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: searchLabel }))
    const overlay = screen.getByRole('dialog', { name: searchOverlayLabel })
    const input = within(overlay).getByRole('searchbox', { name: searchInputLabel })
    await user.type(input, 'yoga')
    await user.click(within(overlay).getByRole('button', { name: searchSubmitLabel }))
    expect(screen.queryByRole('dialog', { name: searchOverlayLabel })).not.toBeInTheDocument()
  })

  it('closes the search overlay with the close control', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: searchLabel }))
    await user.click(screen.getByRole('button', { name: searchCloseLabel }))
    expect(screen.queryByRole('dialog', { name: searchOverlayLabel })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile dropdown menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
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
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const link = within(mobileNav).getByRole('link', { name: navItems[0].label })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
