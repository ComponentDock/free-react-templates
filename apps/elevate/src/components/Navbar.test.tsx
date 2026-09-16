import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Elevate')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the Get Started CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '#contact')
  })

  it('toggles dark mode on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle dark mode/i })
    expect(toggle).toHaveTextContent('☾')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(toggle).toHaveTextContent('☀')
  })

  it('cleans up dark mode class on unmount', () => {
    const { unmount } = render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle dark mode/i })
    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByLabelText('Mobile')
    const aboutLink = mobileNav.querySelector('a[href="#about"]')!
    await user.click(aboutLink)
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })
})
