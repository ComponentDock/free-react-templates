import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Plano')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Say Hello' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    // Click the mobile "Home" link (inside the mobile nav)
    const mobileNav = screen.getByLabelText('Mobile')
    const homeLink = mobileNav.querySelector('a[href="#home"]')!
    await user.click(homeLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when Contact link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByLabelText('Mobile')
    const contactLink = mobileNav.querySelector('a[href="#contact"]')!
    await user.click(contactLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByText('Pages'))
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Project Details')).toBeInTheDocument()
    expect(screen.getByText('Elements')).toBeInTheDocument()
  })

  it('toggles Blog dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByText('Blog'))
    expect(screen.getByText('Blog', { selector: 'li a' })).toBeInTheDocument()
    expect(screen.getByText('Single Blog')).toBeInTheDocument()
  })
})
