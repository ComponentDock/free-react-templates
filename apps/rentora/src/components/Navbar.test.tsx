import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('shows the Rentora brand, the eight nav links, and the Submit property button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Rentora/ })).toBeInTheDocument()

    for (const link of NAV_LINKS) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('link', { name: 'Submit property' })).toBeInTheDocument()
  })

  it('marks the active Home link', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks[0]).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the collapsed mobile menu on a dark gold background', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    expect(openButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(openButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav.className).toMatch(/bg-golddark/)

    const closeButton = screen.getByRole('button', { name: 'Close menu' })
    await user.click(closeButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const mobileContact = mobileNav.querySelectorAll('a')[7]!
    mobileContact.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileContact)

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
