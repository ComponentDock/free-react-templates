import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('shows the brand, hamburger and search buttons, and nav links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Photofolio' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
  })

  it('opens and closes the slide-down menu with the hamburger', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    fireEvent.click(toggle)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()
    for (const label of ['Home', 'About the Artist', 'Portfolio', 'Blog', 'Elements', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Portfolio sub-links
    for (const sub of ['Portfolio 1', 'Portfolio 2', 'Portfolio 3']) {
      expect(screen.getByRole('link', { name: sub })).toBeInTheDocument()
    }

    fireEvent.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'Main navigation' })).not.toBeInTheDocument()
  })

  it('closes the menu when a nav link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    fireEvent.click(screen.getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Main navigation' })).not.toBeInTheDocument()
  })

  it('closes the menu when a Portfolio sub-link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    fireEvent.click(screen.getByRole('link', { name: 'Portfolio 2' }))
    expect(screen.queryByRole('navigation', { name: 'Main navigation' })).not.toBeInTheDocument()
  })

  it('opens and closes the search overlay', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Open search' }))
    const dialog = screen.getByRole('dialog', { name: 'Search' })
    expect(dialog).toBeInTheDocument()
    expect(screen.getByLabelText('Search', { selector: 'input' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('dialog', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('closes the search overlay on submit', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open search' }))
    fireEvent.submit(screen.getByLabelText('Search', { selector: 'input' }).closest('form')!)
    expect(screen.queryByRole('dialog', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('adds a bottom border after scrolling', () => {
    render(<Header />)
    expect(screen.getByRole('banner').className).not.toContain('border-hairline')

    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(screen.getByRole('banner').className).toContain('border-hairline')
  })
})
