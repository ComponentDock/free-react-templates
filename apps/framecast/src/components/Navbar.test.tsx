import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the FRAMECAST logo', () => {
    render(<Navbar />)
    expect(screen.getByText('FRAMECAST')).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Blog', 'Pages', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('opens the mobile menu when the hamburger button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes the mobile menu when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Open
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Close
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    // Verify it's closed again
    expect(screen.queryByRole('button', { name: /close menu/i })).toBeNull()
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Open the mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Get all "About" links — the second one is the mobile menu link
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = aboutLinks[aboutLinks.length - 1]!
    // Prevent jsdom hash navigation from racing with React state
    mobileLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(mobileLink)
    // Menu should have closed — button back to "Open menu"
    expect(screen.queryByRole('button', { name: /close menu/i })).toBeNull()
  })

  it('has aria-expanded attribute on toggle button', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
