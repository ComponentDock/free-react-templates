import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, it, expect } from 'vitest'

describe('Navbar', () => {
  it('renders the brand name with accent on Slate', () => {
    render(<Navbar />)
    expect(screen.getByText('Clean')).toBeInTheDocument()
    expect(screen.getByText('Slate')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Main navigation')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    const aboutLink = screen.getByText('About')
    await user.click(aboutLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
