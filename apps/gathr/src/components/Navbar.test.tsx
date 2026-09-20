import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Gathr')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Speakers', 'Events', 'News', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('has a mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await btn.click()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />)
    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    await toggleBtn.click()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Click a mobile link — find all 'Home' links and click the last one (mobile)
    const mobileLinks = screen.getAllByText('Home')
    const lastLink = mobileLinks[mobileLinks.length - 1]
    expect(lastLink).toBeDefined()
    await lastLink!.click()
    // Menu should be closed — the close button should no longer be present
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('is accessible with proper landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
