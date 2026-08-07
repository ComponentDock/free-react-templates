import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, section links, CTA, and dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /^Archon/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Inner Page' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get a quote' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('toggles the .dark class on the document root and flips the label', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the Dropdown menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const dropdown = screen.getByRole('button', { name: /Dropdown/ })
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')

    await user.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Menu One' }))
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()

    await user.click(dropdown)
    await user.click(dropdown)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile menu' })
    expect(mobileNav).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = screen.getByRole('navigation', { name: 'Mobile menu' })
    await user.click(within(reopened).getByRole('link', { name: 'Menu Two' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })
})
