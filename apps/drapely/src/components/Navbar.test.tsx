import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the boxed wordmark and the five desktop links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Drapely' })).toHaveAttribute('href', '#home')

    const primary = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primary).getAllByRole('link')).toHaveLength(5)
    expect(within(primary).getByRole('link', { name: 'Catalog' })).toHaveAttribute(
      'href',
      '#collections',
    )
  })

  it('shows the bag with the cart badge count', () => {
    render(<Navbar />)

    const bag = screen.getByRole('link', { name: 'Shopping bag' })
    expect(within(bag).getByText('2')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wishlist' })).toHaveAttribute('href', '#popular')
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobile).getAllByRole('link')).toHaveLength(5)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a mobile link is followed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobile).getByRole('link', { name: 'Catalog' }))

    expect(
      screen.getByRole('button', { name: 'Toggle menu' }),
    ).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('opens and closes the search field', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const searchToggle = screen.getByRole('button', { name: 'Open search' })
    expect(screen.queryByRole('searchbox', { name: 'Search products' })).not.toBeInTheDocument()

    await user.click(searchToggle)
    expect(screen.getByRole('searchbox', { name: 'Search products' })).toBeInTheDocument()

    await user.type(screen.getByRole('searchbox', { name: 'Search products' }), 'linen')
    expect(screen.getByRole('searchbox', { name: 'Search products' })).toHaveValue('linen')

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('searchbox', { name: 'Search products' })).not.toBeInTheDocument()
  })
})
