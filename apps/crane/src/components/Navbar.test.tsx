import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    // After toggle, mobile nav links should appear (duplicated in mobile menu)
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when link clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    // Click a mobile nav link to close menu
    const mobileLinks = screen.getAllByText('Home')
    const lastLink = mobileLinks.at(-1)
    expect(lastLink).toBeDefined()
    await user.click(lastLink!)
    // Menu should close — only one Home link remains (desktop)
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBe(1)
  })
})
