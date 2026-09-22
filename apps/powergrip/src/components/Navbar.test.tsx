import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the site name and desktop nav', () => {
    render(<Navbar />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: navLabel })
    expect(nav).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
  })

  it('marks the active page link', () => {
    render(<Navbar />)
    const activeItem = navItems.find((i) => i.active)!
    expect(screen.getByRole('link', { name: activeItem.label })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    expect(screen.getByRole('navigation', { name: mobileNavLabel })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const links = mobileNav.querySelectorAll('a')
    await user.click(links[0]!)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
