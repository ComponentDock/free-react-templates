import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the text logo and the Online Store caption', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Vogue online store' })).toBeInTheDocument()
    expect(screen.getByText('Vogue')).toBeInTheDocument()
    expect(screen.getByText('Online Store')).toBeInTheDocument()
  })

  it('renders the main nav with Home active', () => {
    render(<Header />)
    for (const label of ['Home', 'Shop', 'About', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home.className).toContain('underline')
  })

  it('reveals the Shop dropdown on hover and hides it on leave', () => {
    render(<Header />)
    const shop = screen.getByRole('link', { name: 'Shop' })
    expect(screen.queryByRole('link', { name: 'Product Page' })).not.toBeInTheDocument()
    fireEvent.mouseEnter(shop)
    for (const label of ['Product Page', 'Shopping Card', 'Check out']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    fireEvent.mouseLeave(shop)
    expect(screen.queryByRole('link', { name: 'Product Page' })).not.toBeInTheDocument()
  })

  it('renders search, account and cart tools with a count badge, plus Register and Sign in', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Account' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shopping cart, 2 items' })).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('opens and closes the mobile hamburger panel with aria-expanded reflecting state', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Product Page' })).toHaveLength(1)
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile panel when a top-level or dropdown link is chosen', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const topLevelLinks = screen.getAllByRole('link', { name: 'About' })
    fireEvent.click(topLevelLinks[topLevelLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dropdownLinks = screen.getAllByRole('link', { name: 'Check out' })
    fireEvent.click(dropdownLinks[dropdownLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
