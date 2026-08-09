import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, primary links and a shopping cart shortcut', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /modish/i })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'Latest', 'Top Selling', 'Features', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Shopping cart' })).toHaveAttribute(
      'href',
      '#top-selling',
    )
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('removes the dark class on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openButton)
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobile).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
