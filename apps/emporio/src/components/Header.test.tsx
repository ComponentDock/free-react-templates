import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'
import { cartCount, promoLine } from '../data'

describe('Header', () => {
  it('renders the utility top bar with links and social icons', () => {
    render(<Header />)
    for (const label of [
      'About Us',
      'Privacy',
      'FAQ',
      'Careers',
      'My Wishlist',
      'Track Your Order',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const name of ['Facebook', 'Instagram', 'Twitter', 'Linkedin', 'Youtube']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('renders the wordmark, nav, icon links, cart badge and promo strip', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Emporio/ })).toBeInTheDocument()
    for (const label of ['Home', 'Men', 'Women', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    const babyLink = screen.getByRole('link', { name: /Baby Collection/ })
    expect(within(babyLink).getByText('New')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pages' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Account' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `Cart, ${cartCount} items` })).toBeInTheDocument()
    expect(screen.getByText(new RegExp(promoLine))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop Now' })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown on hover', () => {
    render(<Header />)
    const pagesButton = screen.getByRole('button', { name: 'Pages' })
    const pagesItem = pagesButton.closest('li')!
    fireEvent.mouseEnter(pagesItem)
    for (const label of ['Login', 'Cart', 'Product Details', 'Product Checkout']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    fireEvent.mouseLeave(pagesItem)
    expect(screen.queryByRole('link', { name: 'Login' })).not.toBeInTheDocument()
  })

  it('opens and closes the Blog dropdown on focus and blur', () => {
    render(<Header />)
    const blogButton = screen.getByRole('button', { name: 'Blog' })
    fireEvent.focus(blogButton)
    for (const label of ['Blog Element', 'Blog Details']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    fireEvent.blur(blogButton)
    expect(screen.queryByRole('link', { name: 'Blog Element' })).not.toBeInTheDocument()
  })

  it('opens the mobile navigation from the hamburger and closes it on link click', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu', hidden: true })
    fireEvent.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of ['Home', 'Men', 'Women', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(mobileNav).getByRole('link', { name: /Baby Collection/ })).toBeInTheDocument()
    expect(within(mobileNav).getAllByRole('link', { name: 'Blog' })).toHaveLength(2)
    expect(within(mobileNav).getByRole('link', { name: 'Login' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Blog Element' })).toBeInTheDocument()
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // Reopen and close via a dropdown child link
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const navAgain = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(navAgain).getByRole('link', { name: 'Login' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile navigation with the close button', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
