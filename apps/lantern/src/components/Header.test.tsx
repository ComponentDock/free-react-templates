import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import {
  navLinks,
  searchLabel,
  searchPlaceholder,
  siteName,
  sportDropdown,
  sportLabel,
} from '../data'

describe('Header', () => {
  it('renders the wordmark, search trigger and mobile menu trigger', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('renders the primary nav with every link and the Sport dropdown trigger', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      if (link !== sportLabel) {
        expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
    expect(within(nav).getByRole('button', { name: sportLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens and closes the search input', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open search' }))
    expect(screen.getByRole('searchbox', { name: searchLabel })).toHaveAttribute(
      'placeholder',
      searchPlaceholder,
    )
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('searchbox', { name: searchLabel })).not.toBeInTheDocument()
  })

  it('opens the Sport dropdown with its sub-menu items and closes it again', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const trigger = screen.getByRole('button', { name: sportLabel })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    for (const item of sportDropdown) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'PAGE 1' })).not.toBeInTheDocument()
  })

  it('opens the mobile menu with every nav link and the sub-menu items, then closes it', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      if (link !== sportLabel) {
        expect(within(menu).getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
    expect(within(menu).getByText(sportLabel)).toBeInTheDocument()
    for (const item of sportDropdown) {
      expect(within(menu).getByRole('link', { name: item })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a sub-menu link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(menu).getByRole('link', { name: 'PAGE 1' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a regular nav link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(menu).getByRole('link', { name: 'Travel' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
