import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  blogDropdown,
  hotlineLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  pagesDropdown,
  siteName,
} from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo, nav entries, and hotline button', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: navLabel })
    expect(within(nav).getAllByRole('link')).toHaveLength(navItems.length)
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: hotlineLabel })).toBeInTheDocument()
  })

  it('opens the Blog and pages dropdowns on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: navLabel })
    const blog = within(nav).getByRole('link', { name: /Blog/ })
    await user.hover(blog)
    expect(screen.getByRole('link', { name: blogDropdown[0] })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: blogDropdown[1] })).toBeInTheDocument()

    await user.unhover(blog)
    expect(screen.queryByRole('link', { name: blogDropdown[0] })).not.toBeInTheDocument()

    const pages = within(nav).getByRole('link', { name: /pages/ })
    await user.hover(pages)
    expect(screen.getByRole('link', { name: pagesDropdown[0] })).toBeInTheDocument()

    await user.unhover(pages)
    expect(screen.queryByRole('link', { name: pagesDropdown[0] })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(
      navItems.length + blogDropdown.length + pagesDropdown.length,
    )
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu from the blog and pages dropdown links', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const openMenu = async () => {
      await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
      return screen.getByRole('navigation', { name: mobileNavLabel })
    }

    let mobileNav = await openMenu()
    await user.click(within(mobileNav).getByRole('link', { name: blogDropdown[0] }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    mobileNav = await openMenu()
    await user.click(within(mobileNav).getByRole('link', { name: pagesDropdown[0] }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
