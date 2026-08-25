import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Thrive brand', () => {
    render(<Navbar />)
    expect(screen.getByText('Thrive')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Plans & Pricing')).toBeInTheDocument()
    expect(screen.getByText('Why Us')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('highlights Home as active', () => {
    render(<Navbar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveClass('text-brand-orange')
  })

  it('opens mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on close click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('shows Solutions dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const solutionsBtn = screen.getByText('Solutions')
    await user.hover(solutionsBtn)
    expect(screen.getByText('Sub Menu One')).toBeInTheDocument()
    expect(screen.getByText('Sub Menu Two')).toBeInTheDocument()
  })

  it('hides Solutions dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const solutionsBtn = screen.getByText('Solutions')
    await user.hover(solutionsBtn)
    expect(screen.getByText('Sub Menu One')).toBeInTheDocument()
    await user.unhover(solutionsBtn)
    expect(screen.queryByText('Sub Menu One')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Click a mobile link (use the second "Home" text which is the mobile link)
    const mobileLinks = screen.getAllByText('Home')
    // The mobile link is the one inside the mobile menu div
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    // Menu should close
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
