import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo, top bar info, links, socials, and dark toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Torquely\./i })).toBeInTheDocument()
    expect(screen.getByText(/721 New York NY 10016/)).toBeInTheDocument()
    expect(screen.getByText(/\(\+01\) 123 456 7890/)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Dribbble']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('button', { name: /Dark mode/i })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(screen.getByRole('button', { name: /Dark mode/i }))
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: /Light mode/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Light mode/i }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByRole('navigation', { name: /Mobile menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    await user.click(screen.getByRole('navigation', { name: /Mobile menu/i }).querySelector('a')!)
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })
})
