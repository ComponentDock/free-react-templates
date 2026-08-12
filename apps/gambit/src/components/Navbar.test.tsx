import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the brand wordmark and the join-us CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Gambit home/i })).toBeInTheDocument()
    expect(screen.getByText('Gambit Games')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /join us/i })).toBeInTheDocument()
  })

  it('renders the ten uppercase nav links on desktop', () => {
    render(<Navbar />)
    for (const label of [
      'Home',
      'About',
      'Gallery',
      'Pages',
      'Pricing',
      'Games',
      'Elements',
      'Blog',
      'Blog Details',
      'Contact',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('collapses the links behind a hamburger toggle on mobile with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle mobile menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getAllByText('Pricing').length).toBeGreaterThan(1)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle mobile menu/i })
    await user.click(toggle)
    const mobileLink = screen.getAllByText('Pricing')[1]
    // Neutralize jsdom hash navigation so the React onClick still fires.
    mobileLink?.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink as HTMLElement)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile join-us CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle mobile menu/i })
    await user.click(toggle)
    const mobileCta = screen.getAllByRole('link', { name: /join us/i })[1]
    mobileCta?.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileCta as HTMLElement)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const darkToggle = screen.getByRole('button', { name: /toggle dark mode/i })

    await user.click(darkToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('gambit-theme')).toBe('dark')

    await user.click(darkToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('gambit-theme')).toBe('light')
  })
})
