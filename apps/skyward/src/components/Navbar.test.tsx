import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand, section links, and the Get Started CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Skyward' })).toHaveAttribute('href', '#home')

    for (const label of ['Home', 'About', 'Domain', 'Hosting', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('expands and collapses the mobile menu from the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Hosting' })).toHaveLength(2)

    // Clicking a mobile menu link closes the menu. Neutralize the in-page
    // hash navigation first (native listener runs before React's handler).
    const mobileLink = screen.getAllByRole('link', { name: 'Hosting' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // The mobile CTA closes the menu too.
    await user.click(toggle)
    const mobileCta = screen.getAllByRole('link', { name: 'Get Started' })[1]!
    mobileCta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileCta)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
