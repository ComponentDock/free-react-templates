import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavMenu } from './NavMenu'
import { navItems, subMenuLinks } from '../data'

describe('NavMenu', () => {
  it('renders the desktop menu with the active link and dropdown submenus', () => {
    render(<NavMenu menuOpen={false} onClose={vi.fn()} />)
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    for (const item of navItems) {
      expect(
        screen.getAllByRole('link', { name: new RegExp(`^${item.label}`) }).length,
      ).toBeGreaterThan(0)
    }
    for (const sub of subMenuLinks) {
      expect(screen.getByRole('link', { name: sub })).toBeInTheDocument()
    }
  })

  it('renders the mobile off-canvas menu with links and a close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NavMenu menuOpen onClose={onClose} />)
    const aside = screen.getByRole('complementary', { name: 'Menu' })
    expect(aside).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Travel' }).length).toBeGreaterThan(0)
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('keeps the query when the mobile search form is submitted', async () => {
    const user = userEvent.setup()
    render(<NavMenu menuOpen onClose={vi.fn()} />)
    const input = screen.getByRole('searchbox', { name: /search/i })
    await user.type(input, 'coffee')
    await user.keyboard('{Enter}')
    expect(input).toHaveValue('coffee')
  })

  it('renders nothing when the menu is closed on mobile', () => {
    render(<NavMenu menuOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('complementary', { name: 'Menu' })).not.toBeInTheDocument()
  })
})
