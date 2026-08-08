import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and section links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Villa/i })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Projects', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles dark mode on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Dark mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(screen.getByRole('button', { name: /Light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByRole('navigation', { name: /Mobile menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    await user.click(screen.getByRole('navigation', { name: /Mobile menu/i }).querySelector('a')!)
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })
})
