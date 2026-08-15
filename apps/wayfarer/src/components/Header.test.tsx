import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  brandName,
  closeSearchLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  phoneNumber,
  searchDialogLabel,
  searchInputLabel,
  searchSubmitLabel,
  searchTriggerLabel,
  socials,
} from '../data'
import { Header } from './Header'

const clickAnchor = async (user: ReturnType<typeof userEvent.setup>, element: HTMLElement) => {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
  await user.click(element)
}

describe('Header', () => {
  it('renders the brand, desktop nav, phone, socials, and search trigger', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: navLabel })
    const navLinks = within(nav).getAllByRole('link')
    for (const item of navItems) {
      expect(navLinks.some((link) => link.textContent === item.label)).toBe(true)
    }
    for (const item of navItems) {
      if (item.children) {
        for (const child of item.children) {
          expect(navLinks.some((link) => link.textContent === child.label)).toBe(true)
        }
      }
    }

    expect(screen.getByText(phoneNumber)).toBeInTheDocument()
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: searchTriggerLabel })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    const mobileLinks = within(mobileNav).getAllByRole('link')
    expect(mobileLinks).toHaveLength(
      navItems.length + navItems.reduce((sum, item) => sum + (item.children?.length ?? 0), 0),
    )
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuTriggerLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a nav link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    await clickAnchor(user, within(mobileNav).getByRole('link', { name: 'Destination' }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('opens and submits the search modal', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: searchTriggerLabel }))
    const dialog = screen.getByRole('dialog', { name: searchDialogLabel })
    expect(dialog).toBeInTheDocument()

    await user.type(screen.getByLabelText(searchInputLabel), 'island')
    await user.click(screen.getByRole('button', { name: searchSubmitLabel }))
    expect(screen.queryByRole('dialog', { name: searchDialogLabel })).not.toBeInTheDocument()
  })

  it('closes the search modal via the close button and the Escape key', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: searchTriggerLabel }))
    fireEvent.keyDown(screen.getByRole('dialog', { name: searchDialogLabel }), { key: 'Enter' })
    expect(screen.getByRole('dialog', { name: searchDialogLabel })).toBeInTheDocument()

    fireEvent.keyDown(screen.getByRole('dialog', { name: searchDialogLabel }), { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: searchDialogLabel })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: searchTriggerLabel }))
    fireEvent.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(screen.queryByRole('dialog', { name: searchDialogLabel })).not.toBeInTheDocument()
  })
})
