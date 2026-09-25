import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the logo and navigation links', () => {
    render(<Sidebar />)

    expect(screen.getByText('Lens')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Photos' })).toHaveAttribute('href', '#photos')
    expect(screen.getByRole('link', { name: 'Biography' })).toHaveAttribute('href', '#biography')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders social media links', () => {
    render(<Sidebar />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com',
    )
  })

  it('has a banner landmark', () => {
    render(<Sidebar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    const { container } = render(<Sidebar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    const header = container.querySelector('header')!

    // Initially hidden on mobile (has -translate-x-full)
    expect(header.className).toContain('-translate-x-full')

    // Click to open
    await user.click(toggle)
    expect(header.className).toContain('translate-x-0')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Click overlay to close
    const overlay = container.querySelector('[aria-hidden="true"]')!
    await user.click(overlay)
    expect(header.className).toContain('-translate-x-full')
  })
})
