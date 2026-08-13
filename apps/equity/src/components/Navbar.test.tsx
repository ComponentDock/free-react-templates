import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the purple brand and all section links', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: 'Equity' })
    expect(brand).toHaveAttribute('href', '#home')

    for (const label of ['Home', 'Investors', 'About', 'Services', 'Press', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        '#' + label.toLowerCase(),
      )
    }
  })

  it('expands and collapses the mobile menu from the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2)

    // Clicking a mobile menu link closes the menu. Neutralize the in-page
    // hash navigation first (native listener runs before React's).
    const mobileLink = screen.getAllByRole('link', { name: 'Blog' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
