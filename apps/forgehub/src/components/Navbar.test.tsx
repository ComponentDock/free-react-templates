import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo with teal dot', () => {
    render(<Navbar />)
    expect(screen.getByText('ForgeHub')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Work', 'Services', 'About', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    // Click a mobile nav link (the one inside the mobile menu)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
