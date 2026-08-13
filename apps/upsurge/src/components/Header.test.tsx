import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the rocket logo, section links, and Login / Register pill', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /Upsurge/i })).toHaveAttribute('href', '#home')

    for (const label of ['Home', 'About us', 'Services', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Login / Register' })).toBeInTheDocument()
  })

  it('expands and collapses the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)

    const mobileLink = screen.getAllByRole('link', { name: 'Contact' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // The mobile Login / Register link closes the menu when clicked.
    await user.click(toggle)
    const mobileCta = screen.getAllByRole('link', { name: 'Login / Register' })[1]!
    mobileCta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileCta)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
