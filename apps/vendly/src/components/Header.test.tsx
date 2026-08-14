import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'
import { NAV_LINKS } from '../data'

describe('Header', () => {
  it('renders the top bar and desktop navigation', () => {
    render(<Header />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cart' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu via the toggle', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Shop' })).toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu with Escape', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const contactLink = within(mobileNav).getByRole('link', { name: 'Contact' })
    contactLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(contactLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('keeps the mobile menu open when other keys are pressed', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('shows every mobile link inside the panel', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const link of NAV_LINKS) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })
})
