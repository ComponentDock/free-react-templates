import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Learn.*fold/ })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile nav link (the one inside the mobile menu)
    const mobileNavLinks = screen.getAllByText('Home')
    // The second 'Home' is in the mobile nav
    expect(mobileNavLinks.length).toBeGreaterThanOrEqual(2)
    await user.click(mobileNavLinks[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // Click to open mobile menu
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Mobile nav appears (second <nav> element in DOM)
    const navs = screen.getAllByRole('navigation')
    expect(navs).toHaveLength(2)

    // Click again to close
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    // Back to just the desktop nav
    const navsAfter = screen.getAllByRole('navigation')
    expect(navsAfter).toHaveLength(1)
  })
})
