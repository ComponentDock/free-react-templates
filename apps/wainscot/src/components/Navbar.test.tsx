import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { menuCloseLabel, menuTriggerLabel, mobileNavLabel, navItems, siteName } from '../data'
import { Navbar } from './Navbar'

function preventAnchorNavigation(element: HTMLElement) {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('Navbar', () => {
  it('renders the brand logo and all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    expect(mobileNav).toBeInTheDocument()
    for (const item of navItems) {
      expect(within(mobileNav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    const close = screen.getByRole('button', { name: menuCloseLabel })
    await user.click(close)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const link = within(mobileNav).getByRole('link', { name: navItems[0]!.label })
    preventAnchorNavigation(link)
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
