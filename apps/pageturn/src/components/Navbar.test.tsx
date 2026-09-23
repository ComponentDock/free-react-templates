import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('PageTurn')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Chapter' })).toHaveAttribute('href', '#chapter')
    expect(screen.getByRole('link', { name: 'Reviews' })).toHaveAttribute('href', '#reviews')
    expect(screen.getByRole('link', { name: 'My Books' })).toHaveAttribute('href', '#books')
    expect(screen.getByRole('link', { name: 'Author' })).toHaveAttribute('href', '#author')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()

    const mobileLinks = screen.getByLabelText('Mobile').querySelectorAll('a')
    expect(mobileLinks.length).toBeGreaterThan(0)
    await user.click(mobileLinks[0]!)

    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('adds scrolled class on scroll', async () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')

    expect(header.className).toContain('bg-transparent')

    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-white/95')
  })
})
