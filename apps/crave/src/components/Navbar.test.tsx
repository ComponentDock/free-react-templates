import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site logo "Crave"', () => {
    render(<Navbar />)
    expect(screen.getByText('Crave')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Menu', 'Chef', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('has a mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('applies sticky header classes on scroll', () => {
    render(<Navbar />)
    const header = screen.getByTestId('crave-header')
    expect(header).toHaveClass('fixed', 'top-0', 'z-50')
  })

  it('toggles bg-white class on scroll past 50px', () => {
    render(<Navbar />)
    const header = screen.getByTestId('crave-header')

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)

    expect(header.classList.contains('bg-white')).toBe(true)
    expect(header.classList.contains('shadow-md')).toBe(true)

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    fireEvent.scroll(window)

    expect(header.classList.contains('bg-transparent')).toBe(true)
  })

  it('handles scroll gracefully when header element is absent', () => {
    const orig = document.querySelector
    document.querySelector = vi.fn().mockReturnValue(null)
    render(<Navbar />)

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    // Should not throw
    fireEvent.scroll(window)

    document.querySelector = orig
  })

  it('clicking a mobile menu link closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    const mobileLink = homeLinks[homeLinks.length - 1] as HTMLElement
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
