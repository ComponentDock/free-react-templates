import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Derrick')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'What We Do', 'Projects', 'Pricing', 'Blog', 'About', 'Contact']
    for (const label of links) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('has correct href attributes', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('What We Do')).toHaveAttribute('href', '#services')
    expect(screen.getByText('Projects')).toHaveAttribute('href', '#projects')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleButton)
    // Click the mobile "Home" link (inside the mobile nav div)
    const mobileHomeLinks = screen.getAllByText('Home')
    // The second one is the mobile link
    const mobileLink = mobileHomeLinks[1]
    if (mobileLink) {
      await user.click(mobileLink)
    }
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has accessible navigation label', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
