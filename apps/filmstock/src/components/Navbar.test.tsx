import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navItems, siteName } from '../data'

describe('Navbar', () => {
  it('renders the site name', () => {
    render(<Navbar />)
    expect(screen.getAllByText(siteName).length).toBeGreaterThanOrEqual(1)
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
  })

  it('marks the active page link with aria-current', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink).toHaveAttribute('aria-current', 'page')
  })

  it('renders social media links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('opens the mobile menu when the menu button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)

    const mobileNav = screen.getByRole('dialog')
    expect(mobileNav).toBeInTheDocument()

    const mobileNavEl = within(mobileNav).getByRole('navigation', { name: 'Mobile' })
    expect(mobileNavEl).toBeInTheDocument()
  })

  it('closes the mobile menu when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a navigation link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const galleryLink = within(screen.getByRole('dialog')).getByRole('link', { name: 'Gallery' })
    await user.click(galleryLink)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
