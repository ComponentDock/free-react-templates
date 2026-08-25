import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the wordmark and nav links', () => {
    render(<Navbar />)

    const wordmark = screen.getByRole('link', { name: 'Clearp.' })
    expect(wordmark).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(nav).getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(within(nav).getByRole('link', { name: 'Experiences' })).toHaveAttribute(
      'href',
      '#experiences',
    )
    expect(within(nav).getByRole('link', { name: 'Works' })).toHaveAttribute('href', '#works')
    expect(within(nav).getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('expands and collapses the mobile menu with accessible state', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobile).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'About' })).toBeInTheDocument()

    // clicking a regular mobile nav link closes the menu
    await user.click(within(mobile).getByRole('link', { name: 'Services' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
