import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Stave logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Stave')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(nav).getByRole('link', { name: 'Tracks' })).toHaveAttribute('href', '#tracks')
    expect(within(nav).getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders social icon links with correct attributes', () => {
    render(<Navbar />)
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

  it('has a mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('opens and closes mobile menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: 'Close menu' })
    await user.click(closeBtn)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('social links open in new tab', () => {
    render(<Navbar />)
    const fb = screen.getByRole('link', { name: 'Facebook' })
    expect(fb).toHaveAttribute('target', '_blank')
    expect(fb).toHaveAttribute('rel', 'noreferrer')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    const mobileMenu = document.getElementById('mobile-menu')!
    const aboutLinks = mobileMenu.querySelectorAll('a')
    const aboutLink = Array.from(aboutLinks).find((a) => a.textContent === 'About')!
    await user.click(aboutLink)

    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
