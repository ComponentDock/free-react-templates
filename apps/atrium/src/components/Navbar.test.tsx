import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the wordmark, links, and action buttons', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /^Atrium/ })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get in touch' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles dark mode on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu, closing when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile menu' })
    expect(within(mobile).getByRole('link', { name: 'Projects' })).toBeInTheDocument()

    await user.click(within(mobile).getByRole('link', { name: 'Projects' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = screen.getByRole('navigation', { name: 'Mobile menu' })
    await user.click(within(reopened).getByRole('link', { name: 'Get in touch' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })

  it('cleans up the dark class on unmount', () => {
    const { unmount } = render(<Navbar />)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
