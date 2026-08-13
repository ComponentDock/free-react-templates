import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, links, catalog and cart badge', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Sneakly' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('button', { name: 'Catalog' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('link', { name: 'Shopping cart, 0 items' })).toBeInTheDocument()
  })

  it('opens and closes the catalog dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const catalog = within(nav).getByRole('button', { name: 'Catalog' })

    await user.click(catalog)
    expect(catalog).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Shop', 'Single Product', 'Cart', 'Checkout']) {
      expect(within(nav).getByRole('link', { name: item })).toBeInTheDocument()
    }

    await user.click(within(nav).getByRole('link', { name: 'Checkout' }))
    await user.click(catalog)
    expect(catalog).toHaveAttribute('aria-expanded', 'false')
    expect(within(nav).queryByRole('link', { name: 'Checkout' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it via the toggle button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Home' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('keeps the cart clickable without navigating', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('link', { name: 'Shopping cart, 0 items' }))
    expect(screen.getByRole('link', { name: 'Shopping cart, 0 items' })).toBeInTheDocument()
  })
})
