import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, links, and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Skyline/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.getElementById('mobile-menu')).toBeNull()
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(document.getElementById('mobile-menu')).not.toBeNull()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(document.getElementById('mobile-menu')).toBeNull()
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const blogLinks = screen.getAllByRole('link', { name: /Blog/i })
    const mobileLink = blogLinks[blogLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toBeNull()
  })
})
