import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { brand, navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand, the section links and the Buy Ticket CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: `${brand.name}.` })).toHaveAttribute(
      'href',
      '#home-section',
    )
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: 'Buy Ticket' })).toHaveAttribute(
      'href',
      '#pricing-section',
    )
  })

  it('starts transparent and turns solid brand-blue once scrolled', () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header.className).toContain('bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-brand')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('toggles the mobile link panel from the hamburger', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(mobile).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(within(mobile).getByRole('link', { name: 'Buy Ticket' })).toBeInTheDocument()

    // Clicking a mobile link closes the panel (native preventDefault avoids
    // the jsdom hash-navigation race with React's delegated handler).
    const mobileLink = within(mobile).getByRole('link', { name: navLinks[0]!.label })
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
