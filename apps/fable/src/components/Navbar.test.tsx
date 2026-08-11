import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  darkToggleLabel,
  menuCloseLabel,
  menuOpenLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the site name with links and a dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: navLabel })).toBeInTheDocument()
    expect(screen.getByText(siteName)).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }
    expect(screen.getByRole('button', { name: darkToggleLabel(false) })).toBeInTheDocument()
  })

  it('marks the Home link as the active/current page', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('toggles the dark class on the document element and cleans up', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)
    const toggle = screen.getByRole('button', { name: darkToggleLabel(false) })

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: darkToggleLabel(true) })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: darkToggleLabel(true) }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('button', { name: menuCloseLabel })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Foods' }).length).toBeGreaterThan(0)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('button', { name: menuCloseLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileFoods = screen
      .getAllByRole('link', { name: 'Foods' })
      .find((link) => link.closest('nav')?.getAttribute('aria-label') === 'Mobile')
    expect(mobileFoods).toBeDefined()

    await user.click(mobileFoods!)
    expect(screen.queryByRole('button', { name: menuCloseLabel })).not.toBeInTheDocument()
  })
})
