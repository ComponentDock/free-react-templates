import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand, all six links and the Get started pill CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Netrise home' })).toHaveTextContent('Netrise')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(within(nav).getByRole('link', { name: 'Get started' })).toHaveAttribute(
      'href',
      '#pricing',
    )
  })

  it('opens and closes the mobile menu, closing after a link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const link of navLinks) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile Get started link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const cta = within(mobileNav).getByRole('link', { name: 'Get started' })
    cta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(cta)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
