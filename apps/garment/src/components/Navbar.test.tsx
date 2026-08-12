import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the brand, nav links, search field and icon actions with a count badge', () => {
    render(<Navbar onCartOpen={vi.fn()} />)

    expect(screen.getByRole('link', { name: 'Garment' })).toBeInTheDocument()
    // Desktop + mobile navs both render in jsdom (Tailwind `hidden` is
    // layer-scoped and not parsed), so Blog/Contact appear twice.
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)

    const search = screen.getByPlaceholderText('Type for search')
    expect(search).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Wishlist' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Account' })).toBeInTheDocument()
    const cart = screen.getByRole('button', { name: 'Cart' })
    expect(cart).toHaveTextContent('3')
  })

  it('opens and closes the Shop dropdown', () => {
    render(<Navbar onCartOpen={vi.fn()} />)

    const shopButton = screen.getByRole('button', { name: 'Shop' })
    expect(shopButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('menu', { name: 'Shop' })).not.toBeInTheDocument()

    fireEvent.click(shopButton)
    expect(shopButton).toHaveAttribute('aria-expanded', 'true')
    const shopMenu = screen.getByRole('menu', { name: 'Shop' })
    // Dresses exists under both Women's and Kid's collections in the source design.
    expect(within(shopMenu).getAllByRole('link', { name: 'Dresses' })).toHaveLength(2)
    expect(within(shopMenu).getByRole('link', { name: 'Rompers' })).toBeInTheDocument()
    expect(within(shopMenu).getAllByRole('link', { name: 'Trench' })).toHaveLength(2)

    fireEvent.click(shopButton)
    expect(shopButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('menu', { name: 'Shop' })).not.toBeInTheDocument()
  })

  it('opens the Pages dropdown with the page links', () => {
    render(<Navbar onCartOpen={vi.fn()} />)

    const pagesButton = screen.getByRole('button', { name: 'Pages' })
    fireEvent.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')
    const pagesMenu = screen.getByRole('menu', { name: 'Pages' })
    expect(within(pagesMenu).getByRole('link', { name: 'Checkout' })).toBeInTheDocument()
  })

  it('toggles dark mode on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar onCartOpen={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Switch to dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('garment-dark')).toBe('true')
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('garment-dark')).toBe('false')
  })

  it('opens and closes the mobile menu via the hamburger', async () => {
    const user = userEvent.setup()
    render(<Navbar onCartOpen={vi.fn()} />)

    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    await user.click(hamburger)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar onCartOpen={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const shopLink = screen.getAllByRole('link', { name: 'Dresses' })[0]!
    shopLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(shopLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const pagesLink = screen.getAllByRole('link', { name: 'Checkout' })[0]!
    pagesLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(pagesLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const plainLink = screen.getAllByRole('link', { name: 'Blog' })[1]!
    plainLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(plainLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('fires the cart handler when the cart icon is activated', async () => {
    const user = userEvent.setup()
    const onCartOpen = vi.fn()
    render(<Navbar onCartOpen={onCartOpen} />)

    await user.click(screen.getByRole('button', { name: 'Cart' }))
    expect(onCartOpen).toHaveBeenCalledTimes(1)
  })
})
