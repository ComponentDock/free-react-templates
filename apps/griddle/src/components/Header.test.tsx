import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { NAV_LINKS } from '../data'

describe('Header', () => {
  it('renders the logo text', () => {
    render(<Header />)
    expect(screen.getByText('Griddle')).toBeInTheDocument()
  })

  it('renders all desktop navigation links', () => {
    render(<Header />)
    for (const link of NAV_LINKS) {
      expect(screen.getAllByText(link.label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders phone number on desktop', () => {
    render(<Header />)
    expect(screen.getByText('+10 367 453 7382')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Multiple "Home" links exist (desktop + mobile); just check the mobile panel is open
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)

    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when phone link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)

    const phoneLinks = screen.getAllByText('+10 367 453 7382')
    await user.click(phoneLinks[phoneLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
