import { render, screen, fireEvent, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import {
  cartLabel,
  cartCount,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  searchInputLabel,
  searchLabel,
  siteName,
} from '../data'

describe('Header', () => {
  it('renders the wordmark, nav links, cart count and search control', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: cartLabel })).toHaveTextContent(`(${cartCount})`)
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
  })

  it('opens and closes the search panel', async () => {
    const user = userEvent.setup()
    render(<Header />)
    expect(screen.queryByLabelText(searchInputLabel)).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: searchLabel }))
    expect(screen.getByLabelText(searchInputLabel)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByLabelText(searchInputLabel)).not.toBeInTheDocument()
  })

  it('opens and closes the full-screen mobile menu with links and search', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const trigger = screen.getByRole('button', {
      name: menuTriggerLabel,
      hidden: true,
    })
    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    expect(within(mobileNav).getByLabelText(searchInputLabel)).toBeInTheDocument()
    for (const item of navItems) {
      expect(within(mobileNav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    await user.click(within(mobileNav).getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const trigger = screen.getByRole('button', {
      name: menuTriggerLabel,
      hidden: true,
    })
    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    await user.click(within(mobileNav).getByRole('link', { name: navItems[1]!.label }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('shrinks the header height and logo when the page is scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    const { container, unmount } = render(<Header />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('h-[130px]')
    expect(screen.getByRole('link', { name: siteName })).toHaveClass('text-[30px]')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('h-[70px]')
    expect(screen.getByRole('link', { name: siteName })).toHaveClass('text-2xl')

    unmount()
  })
})
