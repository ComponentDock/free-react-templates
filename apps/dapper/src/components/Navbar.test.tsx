import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and a Home link to the page root', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Dapper/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
  })

  it('renders the primary navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['About', 'Services', 'Barbers', 'Gallery', 'Pricing', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        expect.stringMatching(/^#/),
      )
    }
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(toggle).toHaveTextContent('☀')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(toggle).toHaveTextContent('☾')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const blogLink = within(mobileNav).getByRole('link', { name: 'Blog' })
    expect(blogLink).toBeInTheDocument()

    await user.click(blogLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
