import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('shop')).toBeInTheDocument()
    expect(screen.getByText('lane')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('menuitem', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /shop/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /promotion/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /pages/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders search, account, and cart icons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /account/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument()
  })

  it('displays cart badge with count', () => {
    render(<Navbar />)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile nav link (there are two sets of links - desktop and mobile)
    const mobileLinks = screen.getAllByText('Home')
    // The second one is in the mobile nav
    const mobileLink = mobileLinks[1]!
    await user.click(mobileLink)

    // Menu should close
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
