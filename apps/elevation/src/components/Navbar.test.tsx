import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Elevation/ })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'About Us', 'Services', 'Projects', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles dark mode on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /dark mode/i })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /light mode/i }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const open = screen.getByRole('button', { name: 'Open menu' })
    expect(document.getElementById('mobile-menu')).toBeNull()

    await user.click(open)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(document.getElementById('mobile-menu')).not.toBeNull()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-menu')).toBeNull()
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const contactLinks = screen.getAllByRole('link', { name: 'Contact' })
    const mobileLink = contactLinks[contactLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toBeNull()
  })
})
