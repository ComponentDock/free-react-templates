import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo, desktop nav links, and hamburger button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Lightwell' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'Generic', 'Elements']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    const mobileLink = mobileLinks[mobileLinks.length - 1] as HTMLElement
    await user.click(mobileLink)

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('prevents default navigation when a desktop nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const homeLink = screen
      .getByRole('navigation', { name: 'Main navigation' })
      .querySelector('a') as HTMLElement
    expect(homeLink).not.toBeNull()
    await user.click(homeLink)
    expect(homeLink).toHaveAttribute('href', '#home')
  })
})
