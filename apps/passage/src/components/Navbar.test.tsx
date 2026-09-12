import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Passage')).toBeInTheDocument()
  })

  it('renders the top bar with contact info', () => {
    render(<Navbar />)
    expect(screen.getByText('info@passage.com')).toBeInTheDocument()
    expect(screen.getByText('Mon - Sat: 8am – 5pm')).toBeInTheDocument()
  })

  it('renders the social media links in top bar', () => {
    render(<Navbar />)
    const topBar = screen.getAllByText('Facebook')
    expect(topBar.length).toBeGreaterThanOrEqual(1)
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toBeInTheDocument()
    for (const link of ['Home', 'Services', 'Countries', 'Blog', 'Contact']) {
      expect(nav).toHaveTextContent(link)
    }
  })

  it('renders Get A Quote CTA', () => {
    render(<Navbar />)
    const cta = screen.getByRole('link', { name: 'Get A Quote' })
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

    for (const link of ['Home', 'Services', 'Countries', 'Blog', 'Contact']) {
      expect(mobileNav).toHaveTextContent(link)
    }

    const mobileCta = screen.getAllByRole('link', { name: 'Get A Quote' })
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

  it('closes the mobile menu when Get A Quote is clicked', async () => {
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
