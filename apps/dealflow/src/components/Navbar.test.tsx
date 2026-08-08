import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, section links, CTA and dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Dealflow home' })).toBeInTheDocument()
    expect(screen.getByText('Dealflow')).toBeInTheDocument()

    for (const label of ['Features', 'Pricing', 'Integrations', 'About', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }

    expect(screen.getAllByRole('link', { name: 'Start Free Trial' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the .dark class on the document root and persists the preference', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('dealflow-dark')).toBe('1')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('dealflow-dark')).toBe('0')

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    const menu = document.getElementById('mobile-menu') as HTMLElement

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(menu).toHaveClass('hidden')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(menu).not.toHaveClass('hidden')

    await user.click(within(menu).getByRole('link', { name: 'Features' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(menu).toHaveClass('hidden')

    // Reopen and close via the mobile CTA button
    await user.click(toggle)
    await user.click(within(menu).getByRole('link', { name: 'Start Free Trial' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(menu).toHaveClass('hidden')
  })
})
