import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo with the utensils mark and wordmark', () => {
    render(<Header />)

    const logo = screen.getByRole('link', { name: /Bistro/ })
    expect(logo).toHaveAttribute('href', '#home')
    expect(logo.querySelector('svg')).not.toBeNull()
  })

  it('renders the desktop nav links plus the Blog dropdown and Order Online button', () => {
    render(<Header />)

    for (const label of ['Home', 'About', 'Menu', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Element' })).toBeInTheDocument()

    const orderOnline = screen.getByRole('link', { name: 'Order Online' })
    expect(orderOnline).toHaveAttribute('href', '#booking')
    // Outlined brand button: transparent bg, 1px brand border (source .border-btn).
    expect(orderOnline.className).toMatch(/border-brand/)
    expect(orderOnline.className).toMatch(/hover:bg-brand/)
  })

  it('toggles the mobile menu with aria-expanded', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Desktop + mobile panel now both render the links.
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Order Online' })).toHaveLength(2)

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    fireEvent.click(screen.getAllByRole('link', { name: 'About' })[1]!)

    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)
  })

  it('closes the mobile menu from the Blog dropdown links and Order Online', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    fireEvent.click(toggle)
    fireEvent.click(screen.getAllByRole('link', { name: 'Blog Details' })[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    fireEvent.click(screen.getAllByRole('link', { name: 'Order Online' })[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Order Online' })).toHaveLength(1)
  })
})
