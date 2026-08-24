import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and all desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Loop')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks.at(-1)!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('toggles dropdown in mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const dropdownBtn = screen.getByRole('button', { name: 'Toggle Services submenu' })
    await user.click(dropdownBtn)
    expect(dropdownBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Web Design', { selector: '.pl-4 a' })).toBeInTheDocument()
    // Click again to close the dropdown
    await user.click(dropdownBtn)
    expect(dropdownBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a dropdown child link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const dropdownBtn = screen.getByRole('button', { name: 'Toggle Services submenu' })
    await user.click(dropdownBtn)
    const childLink = screen.getByText('Web Design', { selector: '.pl-4 a' })
    await user.click(childLink)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
