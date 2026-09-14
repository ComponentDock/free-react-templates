import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { useScrolled } from './useScrolled'

vi.mock('./useScrolled')

const mockedUseScrolled = vi.mocked(useScrolled)

describe('Navbar', () => {
  beforeEach(() => {
    mockedUseScrolled.mockReturnValue(false)
  })

  it('shows the site name, nav links, and phone CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Car Wash/i })).toHaveAttribute('href', '#home')
    for (const link of ['Home', 'About', 'Services', 'Pricing', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /\+1 555 123 4567/i })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when phone link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const phoneLinks = within(mobileNav).getAllByRole('link', { name: /\+1 555 123 4567/i })
    await user.click(phoneLinks[phoneLinks.length - 1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('applies scrolled styling when scrolled', () => {
    mockedUseScrolled.mockReturnValue(true)
    render(<Navbar />)
    expect(screen.getByRole('banner').className).toContain('shadow-md')
  })

  it('applies default styling when not scrolled', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner').className).toContain('backdrop-blur')
  })
})
