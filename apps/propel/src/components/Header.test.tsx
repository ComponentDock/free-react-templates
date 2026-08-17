import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

function drawerClass(container: HTMLElement): string {
  const drawer = container.querySelector('#mobile-menu')
  if (!drawer) return ''
  return drawer.className
}

describe('Header', () => {
  it('shows the brand logo with a blue-dot accent', () => {
    const { container } = render(<Header />)
    expect(screen.getAllByText('Propel').length).toBeGreaterThanOrEqual(1)
    expect(container.querySelector('header')).toBeInTheDocument()
  })

  it('renders the nav links with the active Home link and dropdown items', () => {
    render(<Header />)
    const nav = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    for (const label of ['Home', 'Dropdown', 'Services', 'About', 'Blog', 'Contact Us']) {
      expect(nav.getByRole('link', { name: label })).toBeInTheDocument()
    }
    const dropdown = nav.getByRole('link', { name: 'Dropdown' })
    expect(dropdown).toHaveAttribute('aria-haspopup', 'true')
    for (const item of ['Menu One', 'Menu Two', 'Menu Three']) {
      expect(nav.getByText(item)).toBeInTheDocument()
    }
    for (const sub of ['Sub Menu One', 'Sub Menu Two', 'Sub Menu Three']) {
      expect(screen.getByText(sub)).toBeInTheDocument()
    }
  })

  it('opens the mobile drawer with the burger and expands aria-expanded', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(drawerClass(container)).toContain('translate-x-full')

    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    expect(drawerClass(container)).toContain('translate-x-0')
  })

  it('closes the drawer via the close button and the backdrop', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(drawerClass(container)).toContain('translate-x-full')

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const backdrop = container.querySelector('div.fixed.inset-0') as HTMLElement
    await user.click(backdrop)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the drawer when a mobile link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = within(screen.getByRole('navigation', { name: 'Mobile navigation' }))
    const servicesLink = mobileNav.getByRole('link', { name: 'Services' })
    servicesLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(servicesLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dropdownLink = mobileNav.getByRole('link', { name: 'Menu One' })
    dropdownLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(dropdownLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
