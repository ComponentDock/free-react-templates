import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand, flat nav links, and the action cluster', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Amplify home' })).toHaveTextContent('Amplify')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: 'Get A Quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login / Register' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu with aria-expanded reflecting the state', async () => {
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
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
