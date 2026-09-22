import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Vitala' })).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    const allHomeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(allHomeLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Department' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Team' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Blog' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    const mobileMenu = document.getElementById('mobile-menu')!
    expect(mobileMenu).toHaveClass('hidden')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    expect(mobileMenu).toHaveClass('block')

    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(mobileMenu).toHaveClass('hidden')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const mobileMenu = document.getElementById('mobile-menu')!

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(mobileMenu).toHaveClass('block')

    const mobileLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(mobileMenu).toHaveClass('hidden')
  })
})
