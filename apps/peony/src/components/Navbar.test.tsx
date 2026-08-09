import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, a Home link, and a dark-mode toggle', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /peony/i })).toHaveAttribute('href', '#home')
    expect(within(banner).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(banner).getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle dark mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(openButton)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('navigation', { name: 'Mobile' }).querySelector('a')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
