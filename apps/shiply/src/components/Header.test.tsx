import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { describe, expect, it } from 'vitest'

describe('Header', () => {
  it('renders the brand and desktop nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Shiply/ })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveClass('text-brand')
    for (const label of ['About Us', 'Services', 'Industries', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('opens the Services dropdown on hover with five sub-links', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const services = screen.getByRole('link', { name: 'Services' })
    expect(screen.queryByRole('link', { name: 'Air Freight' })).not.toBeInTheDocument()
    await user.hover(services)
    for (const sub of [
      'Air Freight',
      'Ocean Freight',
      'Ground Shipping',
      'Warehousing',
      'Storage',
    ]) {
      expect(screen.getByRole('link', { name: sub })).toBeInTheDocument()
    }
    await user.unhover(services)
    expect(screen.queryByRole('link', { name: 'Air Freight' })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile off-canvas menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobile).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'Air Freight' })).toBeInTheDocument()
    const close = screen.getByRole('button', { name: 'Close menu' })
    await user.click(close)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link or sub-link is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Menu' }))
    let mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobile).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Menu' }))
    mobile = screen.getByRole('navigation', { name: 'Mobile' })
    const sub = within(mobile).getByRole('link', { name: 'Ocean Freight' })
    sub.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(sub)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Menu' }))
    const backdrop = container.querySelector('div[class*="bg-black/30"]')
    expect(backdrop).not.toBeNull()
    await user.click(backdrop as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
