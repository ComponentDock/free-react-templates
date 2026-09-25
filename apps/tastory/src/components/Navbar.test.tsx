import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Tastory')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Offer' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    const menuElements = screen.getAllByText('Menu')
    expect(menuElements.length).toBeGreaterThanOrEqual(2)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })

    // Initially only desktop nav (hidden via CSS but in DOM)
    const initialHomeLinks = screen.getAllByText('Home')
    expect(initialHomeLinks.length).toBe(1)

    await user.click(toggle)
    // Now mobile menu is also rendered
    expect(screen.getAllByText('Home').length).toBe(2)

    await user.click(toggle)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })

    // Open mobile menu
    await user.click(toggle)
    expect(screen.getAllByText('Home').length).toBe(2)

    // Click a mobile nav link (second Home link is the mobile one)
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[1]!)

    // Mobile menu should close — back to 1 Home link
    expect(screen.getAllByText('Home').length).toBe(1)
  })
})
