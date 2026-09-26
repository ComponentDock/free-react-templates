import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('SNAPLENS')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    // Desktop nav is visible by default in jsdom (1024px viewport)
    // Clicking toggle opens the mobile menu (duplicate set of links)
    await user.click(toggle)
    // After toggle, mobile nav links should be present
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2) // desktop + mobile
  })

  it('clicking mobile nav link closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    // Click a mobile nav link (the second 'About' link is in the mobile menu)
    const aboutLinks = screen.getAllByText('About')
    const mobileLink = aboutLinks.at(-1)
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
    // After clicking, mobile menu should close — only desktop links remain
    const remainingAbout = screen.getAllByText('About')
    expect(remainingAbout).toHaveLength(1)
  })

  it('toggles search input on search button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchBtn = screen.getByRole('button', { name: /toggle search/i })
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
    await user.click(searchBtn)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })
})
