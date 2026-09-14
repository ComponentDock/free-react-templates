import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Launchpad')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'We Offer' })).toHaveAttribute('href', '#offer')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Project' })).toHaveAttribute('href', '#project')
    expect(screen.getByRole('link', { name: 'Price' })).toHaveAttribute('href', '#price')
  })

  it('has a Get Started CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Mobile nav should show links
    const mobileNav = screen.getByLabelText('Mobile')
    expect(mobileNav).toBeInTheDocument()

    // Close it
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    // Use the Mobile nav's link specifically
    const mobileNav = screen.getByLabelText('Mobile')
    const mobileLink = mobileNav.querySelector('a')!
    await user.click(mobileLink)

    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })
})
