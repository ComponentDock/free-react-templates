import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and all section links', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Lintel/i })).toBeInTheDocument()
    for (const label of ['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('toggles the dark class on the document root and reflects the mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Dark mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /Light mode/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /Mobile menu/i })
    expect(mobileNav).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is selected', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    await user.click(screen.getAllByRole('link', { name: 'Home' })[1]!)
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })
})
