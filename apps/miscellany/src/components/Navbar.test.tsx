import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  blogDropdownLabel,
  darkToggleLabel,
  menuCloseLabel,
  menuOpenLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('shows the site name and the main nav links', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: new RegExp(`^${siteName}`) })
    expect(brand).toHaveAttribute('href', '#home')

    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      if (!item.children) {
        expect(nav).toHaveTextContent(item.label)
      }
    }
    expect(screen.getByRole('link', { name: 'Event' })).toHaveAttribute('href', '#event')
    expect(screen.getByRole('link', { name: 'Travel' })).toHaveAttribute('href', '#travel')
  })

  it('highlights the active Home link with the brand accent', () => {
    render(<Navbar />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home.className).toContain('text-brand')
  })

  it('opens the Blog dropdown with its child links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButton = screen.getByRole('button', { name: blogDropdownLabel })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    for (const child of ['Blog Single', 'Video', 'Read', 'Lifestyle']) {
      expect(screen.getByRole('link', { name: child })).toBeInTheDocument()
    }

    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Single' })).not.toBeInTheDocument()
  })

  it('toggles dark mode via the toggle button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: darkToggleLabel(false) })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: darkToggleLabel(true) })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: darkToggleLabel(true) }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileEvent = screen
      .getAllByRole('link', { name: 'Event' })
      .find((link) => link.closest('nav')?.getAttribute('aria-label') === 'Mobile')
    expect(mobileEvent).toBeDefined()
    await user.click(mobileEvent!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
