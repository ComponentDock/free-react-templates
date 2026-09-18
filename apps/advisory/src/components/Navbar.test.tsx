import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Advisory')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toBeInTheDocument()
    for (const link of ['Home', 'Pages', 'Services', 'Blog', 'Contact']) {
      expect(nav).toHaveTextContent(link)
    }
  })

  it('renders Make an Appointment CTA', () => {
    render(<Navbar />)
    const cta = screen.getByRole('link', { name: 'Make an Appointment' })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('has a hamburger button that opens the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Close menu')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()

    for (const link of ['Home', 'Pages', 'Services', 'Blog', 'Contact']) {
      expect(mobileNav).toHaveTextContent(link)
    }

    const mobileCta = screen.getAllByRole('link', { name: 'Make an Appointment' })
    expect(mobileCta.length).toBe(2)
  })

  it('closes the mobile menu when a navigation link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const mobileLink = mobileNav.querySelector('a')
    expect(mobileLink).toBeTruthy()
    await user.click(mobileLink!)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when Make an Appointment is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const mobileCtas = mobileNav.querySelectorAll('a')
    const cta = mobileCtas[mobileCtas.length - 1]
    expect(cta).toBeTruthy()
    await user.click(cta!)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles back to closed when Close menu is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
