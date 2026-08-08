import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and section links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Truss\./i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /Primary/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(screen.getByRole('button', { name: /Dark mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /Light mode/i })).toBeInTheDocument()
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
    const mobileNav = screen.getByRole('navigation', { name: /Mobile menu/i })
    await user.click(within(mobileNav).getByRole('link', { name: /Projects/i }))
    expect(screen.queryByRole('navigation', { name: /Mobile menu/i })).not.toBeInTheDocument()
  })
})
