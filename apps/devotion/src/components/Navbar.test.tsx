import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Devotion')).toBeInTheDocument()
  })

  it('has navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Sermons', 'Beliefs', 'Events', 'About', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('has a mobile menu toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu on toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })

    // Mobile links are hidden initially
    expect(screen.queryAllByRole('link', { name: 'Home' })).toHaveLength(1)

    // Open the mobile menu
    await user.click(toggle)
    // Now there should be 2 "Home" links (desktop + mobile)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    // Close the mobile menu
    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })

    // Open the mobile menu
    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    // Click a mobile link (the second "Home" link)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[1]!)

    // Menu should close
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })
})
