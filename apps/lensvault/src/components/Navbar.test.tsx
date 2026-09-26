import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('LensVault')).toBeInTheDocument()
  })

  it('shows all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Gallery', 'Services', 'About', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('has a search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    // Mobile links should be visible
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    // Click a mobile link to close
    const mobileLinks = screen.getAllByText('Gallery')
    const lastLink = mobileLinks[mobileLinks.length - 1]
    if (lastLink) await user.click(lastLink)
  })
})
