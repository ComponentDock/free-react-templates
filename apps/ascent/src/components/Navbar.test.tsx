import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const NAV_LINKS = ['Home', 'Services', 'Portfolio', 'Pages', 'Blog', 'Contact']

describe('Navbar', () => {
  it('renders the brand wordmark, nav links and Say Hello CTA', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    const brand = within(header).getByRole('link', { name: /Ascent/ })
    expect(brand).toBeInTheDocument()
    expect(brand.querySelector('.text-brand')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of NAV_LINKS) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const sayHello = within(nav).getByRole('link', { name: 'Say Hello' })
    expect(sayHello).toHaveAttribute('href', '#contact')
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
    expect(within(mobileMenu).getByRole('link', { name: 'Say Hello' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a nav link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    await user.click(within(mobileMenu).getByRole('link', { name: 'Blog' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the Say Hello CTA is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)

    const mobileMenu = document.getElementById('mobile-menu')!
    await user.click(within(mobileMenu).getByRole('link', { name: 'Say Hello' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
