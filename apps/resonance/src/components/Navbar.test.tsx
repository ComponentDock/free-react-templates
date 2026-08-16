import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the site name, section links, and Download now call-to-action', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Resonance home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Resonance home' })).toHaveTextContent('Resonance')

    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }

    const cta = screen.getByRole('link', { name: 'Download now' })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('opens and closes the mobile menu with the toggle button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu after a section link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const link = screen.getAllByRole('link', { name: 'Services' })[1]!
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(link)
    expect(mobileNav).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu after the Download now CTA is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const mobileCta = screen.getAllByRole('link', { name: 'Download now' })[1]!
    mobileCta.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(mobileCta)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
