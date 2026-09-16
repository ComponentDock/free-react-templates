import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Lawscape')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Practice Areas')).toBeInTheDocument()
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileLinks = screen.getAllByText('About')
    const mobileLink = mobileLinks.find((el) => el.className.includes('block py-2'))
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('applies scrolled style when window is scrolled past 50px', async () => {
    const originalScrollY = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    render(<Navbar />)
    const header = screen.getByRole('navigation', { name: 'Main navigation' }).parentElement!
    await act(async () => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('shadow-md')
    Object.defineProperty(window, 'scrollY', { value: originalScrollY, writable: true })
  })
})
