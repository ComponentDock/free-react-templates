import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { dropdowns, navLinks, socialLabels, socialLinks } from '../data'

describe('Navbar', () => {
  it('renders the wordmark, header social icons, search trigger and menu trigger', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Sonder' })).toBeInTheDocument()
    for (const name of socialLinks) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('renders the primary nav with plain links and dropdown triggers', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const dropdown of dropdowns) {
      expect(within(nav).getByRole('button', { name: dropdown.label })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    }
  })

  it('opens and closes the search input', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open search' }))
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })

  it('opens the Categories dropdown with its sub-menu items and closes it again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: 'Categories' })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    for (const item of dropdowns[0]!.items) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Lifestyle' })).not.toBeInTheDocument()
  })

  it('opens the Blog dropdown with its sub-menu items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Blog' }))
    for (const item of dropdowns[1]!.items) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('opens a mobile menu with every nav link and sub-menu item, then closes it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(menu).getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const dropdown of dropdowns) {
      for (const item of dropdown.items) {
        expect(within(menu).getByRole('link', { name: item })).toBeInTheDocument()
      }
    }
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a navigation link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    const link = within(menu).getByRole('link', { name: 'Styles' })
    // Native listener runs before React's delegated handler, neutralizing
    // jsdom hash-navigation (see docs/ai-context.md user-event quirk).
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a dropdown sub-menu link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    const link = within(menu).getByRole('link', { name: 'Lifestyle' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
