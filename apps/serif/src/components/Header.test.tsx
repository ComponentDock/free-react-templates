import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  siteName,
  socialNames,
  stickyThreshold,
} from '../data'

describe('Header', () => {
  it('renders the serif logo, nav links, Pages dropdown, search and social icons', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
    for (const name of socialNames) {
      expect(screen.getByRole('link', { name: `Visit ${name} profile` })).toBeInTheDocument()
    }
  })

  it('marks the active nav link with aria-current', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('reveals the Pages dropdown submenu entries on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)

    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
    await user.hover(screen.getByRole('link', { name: /^Pages/ }))
    const pages = navItems.find((item) => item.children)
    for (const child of pages?.children ?? []) {
      expect(screen.getByRole('link', { name: child })).toBeInTheDocument()
    }
  })

  it('closes the Pages dropdown when the pointer leaves it', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.hover(screen.getByRole('link', { name: /^Pages/ }))
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    await user.hover(screen.getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('opens the dropdown on focus and closes it when focus leaves the Pages item', async () => {
    const user = userEvent.setup()
    render(<Header />)

    for (let i = 0; i < 5; i += 1) await user.tab() // logo, home, archive, category, pages
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()

    for (let i = 0; i < 4; i += 1) await user.tab() // submenu x3 + contact
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('sticks the menu bar to the top after scrolling past the threshold', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: navLabel })

    expect(nav).not.toHaveClass('fixed')

    Object.defineProperty(window, 'scrollY', { value: stickyThreshold + 10, configurable: true })
    fireEvent.scroll(window)
    expect(nav).toHaveClass('fixed')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(nav).not.toHaveClass('fixed')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: mobileNavLabel })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    await user.click(screen.getAllByRole('link', { name: 'Archive' }).at(-1)!)
    expect(mobileNav).not.toBeInTheDocument()
  })
})
