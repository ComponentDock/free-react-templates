import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name with highlighted text', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /high/i })
    expect(link).toBeInTheDocument()
    expect(screen.getByText('way')).toHaveClass('text-brand')
  })

  it('renders navigation links in desktop nav', () => {
    render(<Navbar />)
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    const { getByRole } = within(primaryNav)
    expect(getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'Fleet' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('hidden')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('block')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const { getAllByRole } = within(mobileNav)
    const aboutLinks = getAllByRole('link', { name: 'About' })
    await user.click(aboutLinks[0]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles dark mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const darkToggle = screen.getByRole('button', { name: /switch to dark/i })
    await user.click(darkToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /switch to light/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /switch to light/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('reads initial dark mode from document class', () => {
    document.documentElement.classList.add('dark')
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /switch to light/i })).toBeInTheDocument()
    document.documentElement.classList.remove('dark')
  })
})
