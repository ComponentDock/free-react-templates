import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand, section links, and no search form', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Millwright/i })).toHaveAttribute('href', '#home')

    for (const label of ['Home', 'About', 'Projects', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: 'Services' })).toHaveAttribute(
      'aria-haspopup',
      'true',
    )

    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('expands and collapses the Services dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Services' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Architectural Design', 'Interior', 'Building']) {
      expect(screen.getByRole('link', { name: item })).toHaveAttribute('href', '#services')
    }

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Architectural Design' })).not.toBeInTheDocument()
  })

  it('expands and collapses the mobile menu from the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2)

    // The mobile Services entry closes the menu when clicked. Neutralize the
    // in-page hash navigation first (native listener runs before React's).
    const mobileService = screen.getByRole('link', { name: 'Architectural Design' })
    mobileService.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileService)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // Clicking a mobile menu link closes the menu.
    await user.click(toggle)
    const mobileLink = screen.getAllByRole('link', { name: 'Blog' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(fireEvent).toBeDefined()
  })
})
