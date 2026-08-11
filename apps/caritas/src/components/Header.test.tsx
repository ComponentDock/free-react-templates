import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from './Header'
import { NAV_LINKS } from '../data'

describe('Header', () => {
  it('renders the brand, desktop nav links and learn-more button', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('link', { name: 'Caritas' })).toBeInTheDocument()
    // Desktop nav (aria-label Main) — links + dropdown toggles.
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    expect(mainNav).toBeInTheDocument()

    const labels = NAV_LINKS.map((link) => link.label)
    for (const label of labels) {
      // Dropdown parents render as buttons; plain links render as anchors.
      const byRole = screen.queryAllByRole('link', { name: label })
      const byButton = screen.queryAllByRole('button', { name: new RegExp(label) })
      expect(byRole.length + byButton.length).toBeGreaterThan(0)
    }

    const learnMore = screen.getByRole('link', { name: 'Learn More' })
    expect(learnMore).toHaveAttribute('href', '#contact')
    expect(learnMore).toHaveAttribute('aria-label', 'Learn More')

    // Mobile toggle button.
    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    // Desktop dropdowns are closed initially.
    expect(container.querySelectorAll('nav[aria-label="Main"] ul ul')).toHaveLength(0)
  })

  it('opens and closes a desktop dropdown on toggle clicks', () => {
    const { container } = render(<Header />)

    const pagesToggle = screen.getByRole('button', { name: /Pages/ })
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Event' })).toHaveAttribute('href', '#event')
    expect(screen.getByRole('link', { name: 'Elements' })).toHaveAttribute('href', '#elements')

    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelectorAll('nav[aria-label="Main"] ul ul')).toHaveLength(0)
  })

  it('opens the mobile menu, shows expanded dropdown children, and closes', () => {
    const { container } = render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    // Dropdown children are expanded inline in the mobile panel.
    expect(mobileNav.querySelectorAll('a[href="#elements"]')).toHaveLength(1)
    expect(mobileNav.querySelectorAll('a[href="#single-blog"]')).toHaveLength(1)

    // Clicking a mobile link closes the panel.
    fireEvent.click(mobileNav.querySelector('a[href="#about"]')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(container.querySelector('button[aria-label="Toggle navigation"]')).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    // A dropdown child link also closes the panel.
    fireEvent.click(toggle)
    fireEvent.click(
      screen.getByRole('navigation', { name: 'Mobile' }).querySelector('a[href="#elements"]')!,
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    // The mobile Learn More link closes the panel too.
    fireEvent.click(toggle)
    const learnMore = [
      ...screen.getByRole('navigation', { name: 'Mobile' }).querySelectorAll('a'),
    ].find((anchor) => anchor.textContent === 'Learn More')
    fireEvent.click(learnMore!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
