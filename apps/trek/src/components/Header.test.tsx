import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  brandWordmark,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
} from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand and the desktop nav with the first link active', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: brandWordmark })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: navLabel })
    const links = within(nav).getAllByRole('link')
    expect(links).toHaveLength(navItems.length)
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[0]).toHaveTextContent('Home')
    expect(links[links.length - 1]).toHaveTextContent('Contact')
    for (const item of navItems) {
      expect(within(nav).getByText(item.label)).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const mobileLinks = within(mobileNav).getAllByRole('link')
    expect(mobileLinks).toHaveLength(navItems.length)
    expect(within(mobileNav).getByText('Home')).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a nav link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const tripsLink = within(mobileNav).getByRole('link', { name: 'Trips' })
    tripsLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(tripsLink)

    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
