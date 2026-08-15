import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, all six links and the white CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Mosaic/ })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'About', 'Services', 'Portfolio', 'Case Studies', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')
  })

  it('expands the mobile menu and toggles aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Services' })).toHaveAttribute(
      'href',
      '#services',
    )

    await user.click(within(mobileNav).getByRole('link', { name: 'Services' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes the mobile menu when the mobile CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Get in touch' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
