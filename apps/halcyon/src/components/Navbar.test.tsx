import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

const navLabels = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact'] as const

describe('Navbar', () => {
  it('shows the site name in a serif font and the dark-mode toggle', () => {
    render(<Navbar />)

    const wordmark = screen.getByRole('link', { name: /^Halcyon/ })
    expect(wordmark.className).toContain('font-serif')

    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('shows navigation links for Home, About, Services, Gallery, Blog and Contact', () => {
    render(<Navbar />)

    for (const label of navLabels) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('highlights the current page link in the brand peach color', () => {
    render(<Navbar />)

    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home.className).toContain('text-brand')
  })

  it('toggles the dark class on the document root and reflects the current mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Dark mode' })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('removes the dark class on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens a mobile menu overlay with the same links when the hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobile = screen.getByRole('navigation', { name: 'Mobile menu' })
    for (const label of navLabels) {
      expect(within(mobile).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile menu' })

    await user.click(within(mobile).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu with the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })
})
