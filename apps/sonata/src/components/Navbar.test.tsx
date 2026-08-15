import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const NAV_LINKS = ['Home', 'About', 'Pages', 'Category', 'Playlist', 'Artist', 'Blog', 'Contact']

describe('Navbar', () => {
  it('renders the brand wordmark, nav links and user panel', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    const brand = within(header).getByRole('link', { name: /Sonata/ })
    expect(brand).toBeInTheDocument()
    expect(brand.querySelector('.text-brand')?.textContent).toBe('Son')
    expect(brand.querySelector('.text-white')?.textContent).toBe('ata')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of NAV_LINKS) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(within(nav).getByRole('link', { name: 'Help' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Login' })).toBeInTheDocument()
    const signup = within(nav).getByRole('link', { name: 'Create an account' })
    expect(signup).toHaveClass('text-brand')
  })

  it('expands and collapses the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    for (const label of NAV_LINKS) {
      expect(within(mobileMenu).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(mobileMenu).getByRole('link', { name: 'Create an account' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    await user.click(within(mobileMenu).getByRole('link', { name: 'Blog' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a user-panel link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    const mobileMenu = document.getElementById('mobile-menu')!

    await user.click(toggle)
    await user.click(within(mobileMenu).getByRole('link', { name: 'Help' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    await user.click(within(mobileMenu).getByRole('link', { name: 'Login' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    await user.click(within(mobileMenu).getByRole('link', { name: 'Create an account' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
