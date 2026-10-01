import { describe, expect, it } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the top bar contact info and social links', () => {
    render(<Header />)
    expect(screen.getByText('802/2, Mirpur, Dhaka')).toBeInTheDocument()
    expect(screen.getByText('+1 800 345 678')).toBeInTheDocument()
    expect(screen.getByText('Mon-Fri 09.00 - 17.00')).toBeInTheDocument()
    for (const label of ['Facebook', 'LinkedIn', 'Behance', 'Dribbble']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the logo and primary navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Autodock')).toBeInTheDocument()
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About', 'Services', 'Cars', 'Pricing', 'Blog', 'Contact']) {
      expect(within(primary).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('starts transparent and becomes solid on scroll', () => {
    render(<Header />)
    const banner = screen.getByRole('banner')
    expect(banner.className).toContain('bg-transparent')
    expect(banner.className).not.toContain('shadow-lg')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    fireEvent.scroll(window)

    expect(banner.className).toContain('bg-carbon')
    expect(banner.className).toContain('shadow-lg')
  })

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobile).getByRole('link', { name: 'About' })).toBeInTheDocument()

    await user.click(within(mobile).getByRole('link', { name: 'About' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
