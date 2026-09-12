import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Vigor').length).toBeGreaterThan(0)
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Programs', 'Trainers', 'Pricing', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0)
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    // Desktop links are always in DOM (hidden via CSS); mobile menu adds duplicates
    const beforeCount = screen.getAllByText('Home').length
    await user.click(toggle)
    expect(screen.getAllByText('Home').length).toBe(beforeCount + 1)
    await user.click(toggle)
    expect(screen.getAllByText('Home').length).toBe(beforeCount)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('About')
    const link = mobileLinks[mobileLinks.length - 1]!
    await user.click(link)
    // After clicking, mobile menu closes — back to 1 "About" (desktop only)
    expect(screen.getAllByText('About').length).toBe(1)
  })
})
