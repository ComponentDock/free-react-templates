import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Spark logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Spark' })).toBeInTheDocument()
  })

  it('renders all navigation links in desktop nav', () => {
    render(<Navbar />)
    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const label of ['Home', 'Features', 'Services', 'Pricing', 'Blog', 'Contact']) {
      expect(desktopNav).toHaveTextContent(label)
    }
  })

  it('toggles the mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles dark mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const darkToggle = screen.getByRole('button', { name: 'Switch to dark mode' })
    await user.click(darkToggle)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
