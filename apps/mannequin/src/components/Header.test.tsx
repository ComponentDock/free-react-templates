import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the wordmark, nav links and icon buttons', () => {
    render(<Header cartCount={0} onSearchClick={vi.fn()} onCartClick={vi.fn()} />)
    expect(screen.getByRole('link', { name: 'Mannequin' })).toBeInTheDocument()
    for (const link of ['Home', 'Shop', 'Features', 'Blog', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Cart, 0 items/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'My account' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wishlist' })).toBeInTheDocument()
  })

  it('shows the cart count badge when items exist', () => {
    render(<Header cartCount={3} onSearchClick={vi.fn()} onCartClick={vi.fn()} />)
    expect(screen.getByRole('button', { name: /Cart, 3 items/ })).toHaveTextContent('3')
  })

  it('fires the search and cart callbacks', async () => {
    const user = userEvent.setup()
    const onSearchClick = vi.fn()
    const onCartClick = vi.fn()
    render(<Header cartCount={0} onSearchClick={onSearchClick} onCartClick={onCartClick} />)

    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(onSearchClick).toHaveBeenCalledTimes(1)

    await user.click(screen.getByRole('button', { name: /Cart, 0 items/ }))
    expect(onCartClick).toHaveBeenCalledTimes(1)
  })

  it('toggles the mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header cartCount={0} onSearchClick={vi.fn()} onCartClick={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header cartCount={0} onSearchClick={vi.fn()} onCartClick={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const link = within(mobileNav).getByRole('link', { name: 'Shop' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
