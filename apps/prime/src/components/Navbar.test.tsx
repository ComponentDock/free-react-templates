import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('shows the brand, the page links, and the CTA', () => {
    render(<Navbar />)
    expect(screen.getByText('Prime')).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Get a Quote' })).toHaveAttribute('href', '#quote')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link inside it is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const homeLink = mobileNav.querySelector('a[href="#home"]') as HTMLElement
    await user.click(homeLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu via the backdrop and via the mobile CTA', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(document.querySelector('[role="presentation"]') as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileCta = screen
      .getByRole('navigation', { name: 'Mobile navigation' })
      .querySelector('a[href="#quote"]') as HTMLElement
    await user.click(mobileCta)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
