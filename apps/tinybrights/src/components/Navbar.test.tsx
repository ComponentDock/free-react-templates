import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links in desktop nav', () => {
    render(<Navbar />)
    const desktopNav = screen.getByRole('navigation', { name: 'Primary' })
    const navLinks = ['Home', 'About', 'Teacher', 'Courses', 'Pricing', 'Blog', 'Contact']
    for (const label of navLinks) {
      expect(desktopNav).toHaveTextContent(label)
    }
  })

  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'TinyBrights' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const mobileHomeLink = mobileNav.querySelectorAll('a')[0]!
    await user.click(mobileHomeLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('applies scrolled styles when page is scrolled', () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-md')
  })

  it('removes scrolled styles when scrolled back to top', () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    fireEvent.scroll(window)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
  })
})
