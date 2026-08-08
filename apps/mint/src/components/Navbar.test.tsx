import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, links, and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Mint/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Dark mode/i })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = (await import('@testing-library/user-event')).default
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Dark mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = (await import('@testing-library/user-event')).default
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByRole('navigation', { name: /Mobile menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = (await import('@testing-library/user-event')).default
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /Mobile menu/i })
    await user.click(within(mobileNav).getByRole('link', { name: /About/i }))
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })
})
