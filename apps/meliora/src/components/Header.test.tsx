import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { navLinks, phone, email } from '../data'

describe('Header', () => {
  it('renders the rose utility bar with phone and email', () => {
    render(<Header />)
    const topBar = screen.getByLabelText('Top bar')
    expect(within(topBar).getByText(phone)).toBeInTheDocument()
    expect(within(topBar).getByText(email)).toBeInTheDocument()
  })

  it('renders social links in the utility bar', () => {
    render(<Header />)
    const socials = screen.getByLabelText('Social links')
    expect(within(socials).getAllByRole('link')).toHaveLength(4)
  })

  it('renders the brand logo with a heart icon', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /^Meliora/ })).toBeInTheDocument()
    expect(screen.getByLabelText('Meliora logo')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    for (const link of navLinks) {
      expect(
        screen.getAllByRole('link', { name: link.label, hidden: true }).length,
      ).toBeGreaterThan(0)
    }
  })

  it('renders the Donate Now pill CTA', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('toggles the mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getAllByRole('link').length).toBeGreaterThan(0)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const causeLink = within(mobileNav).getByRole('link', { name: 'Causes' })
    causeLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(causeLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
