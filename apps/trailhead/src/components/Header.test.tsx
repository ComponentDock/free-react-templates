import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { brandName, inspirationLinks, navLinks, socialLabels, socialLinks } from '../data'

describe('Header', () => {
  it('renders the logo, social icon circles and primary navigation', () => {
    render(<Header />)

    expect(screen.getAllByRole('link', { name: brandName }).length).toBeGreaterThan(0)
    for (const name of socialLinks) {
      expect(screen.getAllByRole('link', { name: socialLabels[name] }).length).toBeGreaterThan(0)
    }
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of navLinks) {
      if (label === 'Inspiration') {
        expect(within(primaryNav).getByRole('button', { name: label })).toBeInTheDocument()
      } else {
        expect(within(primaryNav).getByRole('link', { name: label })).toBeInTheDocument()
      }
    }
  })

  it('marks Homepage as the active link', () => {
    render(<Header />)

    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primaryNav).getByRole('link', { name: 'Homepage' })).toHaveClass('text-primary')
  })

  it('opens and closes the Inspiration dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Inspiration' })
    await user.click(toggle)
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    for (const sub of inspirationLinks) {
      expect(within(primaryNav).getByRole('link', { name: sub })).toBeInTheDocument()
    }
    await user.click(within(primaryNav).getByRole('link', { name: 'Architect' }))
    expect(within(primaryNav).queryByRole('link', { name: 'Minimal' })).not.toBeInTheDocument()
  })

  it('opens the mobile menu, shows links and socials, and closes it', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    const overlay = document.querySelector('.fixed.inset-0')!
    expect(overlay).toHaveClass('hidden')

    await user.click(toggle)
    expect(overlay).not.toHaveClass('hidden')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const dialog = screen.getByRole('dialog', { name: 'Mobile menu' })
    for (const label of navLinks) {
      expect(within(dialog).getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const sub of inspirationLinks) {
      expect(within(dialog).getByRole('link', { name: sub })).toBeInTheDocument()
    }
    for (const name of socialLinks) {
      expect(within(dialog).getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }

    // Selecting a dropdown sub-link also closes the menu
    await user.click(within(dialog).getByRole('link', { name: 'Interior' }))
    expect(overlay).toHaveClass('hidden')

    await user.click(toggle)
    await user.click(within(dialog).getByRole('button', { name: 'Close menu' }))
    expect(overlay).toHaveClass('hidden')
  })

  it('closes the mobile menu when a link is chosen or the backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const overlay = document.querySelector('.fixed.inset-0')!
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile menu' })
    await user.click(within(dialog).getByRole('link', { name: 'Technology' }))
    expect(overlay).toHaveClass('hidden')

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    await user.click(overlay)
    expect(overlay).toHaveClass('hidden')
  })
})
