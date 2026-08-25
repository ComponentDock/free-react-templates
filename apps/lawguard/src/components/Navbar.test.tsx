import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Lawguard')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Practicing Area')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('123-489-9381')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile links should be visible
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2) // desktop + mobile
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileLink = screen.getAllByText('Home')[1]!
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('adds scrolled class on scroll', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((r) => setTimeout(r, 0))
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav.className).toContain('bg-white')
  })

  it('has transparent background when not scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav.className).toContain('bg-transparent')
  })
})
