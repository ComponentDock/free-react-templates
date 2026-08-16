import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it("shows the wordmark with a mint period, nav links, and Let's Talk link", () => {
    render(<Navbar />)

    const wordmark = screen.getByRole('link', { name: 'Adviso.' })
    expect(wordmark).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(nav).getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(within(nav).getByRole('link', { name: 'Case Study' })).toHaveAttribute(
      'href',
      '#case-study',
    )
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')

    expect(screen.getByRole('link', { name: /Let's Talk/ })).toHaveAttribute('href', '#contact')
  })

  it('opens and closes the Blog dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blog = screen.getByRole('button', { name: 'Blog' })
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Element' })).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Element' }))
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
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
    expect(within(mobile).getByRole('link', { name: 'Case Study' })).toBeInTheDocument()

    // clicking a regular mobile nav link closes the menu
    await user.click(within(mobile).getByRole('link', { name: 'Services' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // re-open and clicking the mobile Let's Talk link closes it too
    await user.click(toggle)
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', {
        name: /Let's Talk/,
      }),
    )
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
