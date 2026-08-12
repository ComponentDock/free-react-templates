import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and a Home link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Arena home/i })).toBeInTheDocument()
    const mainNav = within(screen.getByRole('navigation', { name: 'Main' }))
    expect(mainNav.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
  })

  it('shows nav links for the page sections', () => {
    render(<Navbar />)
    const mainNav = within(screen.getByRole('navigation', { name: 'Main' }))
    for (const label of ['Fighter', 'Team', 'Streams', 'Pricing', 'Contact']) {
      expect(mainNav.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders an Install Now button', () => {
    render(<Navbar />)
    const mainNav = within(screen.getByRole('navigation', { name: 'Main' }))
    expect(mainNav.getByRole('link', { name: 'Install Now' })).toHaveAttribute('href', '#pricing')
  })

  it('defaults to dark mode and toggles the .dark class on the root element', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement).toHaveClass('dark')
    const toggles = screen.getAllByRole('button', { name: /toggle dark mode/i })
    await user.click(toggles[0]!)
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(toggles[1]!)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open mobile menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close mobile menu/i }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open mobile menu/i }))
    const mobileMenu = document.getElementById('mobile-menu')
    expect(mobileMenu).not.toBeNull()
    const homeLink = within(mobileMenu as HTMLElement).getByRole('link', { name: 'Home' })
    homeLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(homeLink)
    expect(screen.getByRole('button', { name: /open mobile menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when the mobile Install Now link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open mobile menu/i }))
    const mobileMenu = document.getElementById('mobile-menu')
    expect(mobileMenu).not.toBeNull()
    const installLink = within(mobileMenu as HTMLElement).getByRole('link', { name: 'Install Now' })
    installLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(installLink)
    expect(screen.getByRole('button', { name: /open mobile menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
