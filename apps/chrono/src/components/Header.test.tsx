import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  brandEnd,
  brandStart,
  cartLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  userLabel,
} from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo, nav links, and header icons', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: `${brandStart}${brandEnd}` })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: navLabel })
    expect(within(nav).getAllByRole('link')).toHaveLength(navItems.length)
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Latest/ })).toBeInTheDocument()
    expect(within(nav).getByText('HOT')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: searchLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: userLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: cartLabel })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(navItems.length)
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
