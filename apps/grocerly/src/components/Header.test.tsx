import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { cart, navLinks, socialLabels, socials, topBar } from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('renders the top bar with email, shipping notice, language, Login and socials', () => {
    render(<Header />)

    expect(screen.getByText(topBar.email)).toBeInTheDocument()
    expect(screen.getByText(topBar.shipping)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Choose language' })).toHaveTextContent('English')
    expect(screen.getByRole('link', { name: /Login/ })).toBeInTheDocument()
    for (const name of socials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('renders the mid row with wordmark, nav links and cart counts', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Grocerly' })).toBeInTheDocument()
    for (const link of navLinks) {
      const topLink =
        link.children && link.children.length > 0
          ? screen.getAllByRole('link', { name: link.label })[0]!
          : screen.getByRole('link', { name: link.label })
      expect(topLink).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Wishlist' })).toHaveTextContent(String(cart.wishlist))
    expect(screen.getByRole('link', { name: 'Shopping bag' })).toHaveTextContent(String(cart.bag))
    expect(screen.getByText(cart.itemTotal)).toBeInTheDocument()

    // Pages sub-menu items render (hidden until opened on mobile / hovered on desktop).
    for (const child of navLinks[2]!.children!) {
      expect(screen.getByRole('link', { name: child, hidden: true })).toBeInTheDocument()
    }
  })

  it('toggles the language dropdown and closes it on language selection', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Choose language' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Spanish' })).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Spanish' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the mobile menu and Pages sub-menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const hamburger = screen.getByRole('button', { name: 'Toggle menu', hidden: true })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    const pagesLink = screen.getByRole('link', { name: 'Pages' })
    await user.click(pagesLink)
    for (const child of navLinks[2]!.children!) {
      expect(screen.getByRole('link', { name: child })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('link', { name: 'Shop Details' }))
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a top-level link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const hamburger = screen.getByRole('button', { name: 'Toggle menu', hidden: true })
    await user.click(hamburger)
    await user.click(screen.getByRole('link', { name: 'Blog' }))

    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  it('handles clicks on Login, social icons, wordmark, wishlist and bag without navigating', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('link', { name: /Login/ }))
    fireEvent.click(screen.getByRole('link', { name: socialLabels.facebook }))
    fireEvent.click(screen.getByRole('link', { name: 'Grocerly' }))
    fireEvent.click(screen.getByRole('link', { name: 'Wishlist' }))
    fireEvent.click(screen.getByRole('link', { name: 'Shopping bag' }))
  })
})
