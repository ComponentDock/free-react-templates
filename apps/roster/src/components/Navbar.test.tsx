import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Roster')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders login link and Add Listing button', () => {
    render(<Navbar />)
    expect(screen.getByText('Log in')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add listing/i })).toBeInTheDocument()
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /🌙/i })
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes dark class on cleanup', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('adds scrolled class on scroll', async () => {
    const { act } = await import('react')
    render(<Navbar />)
    // jsdom window.scrollY is 0 by default; override it
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    const roster = screen.getAllByText('Roster')[0]!
    expect(roster.className).toContain('text-text-dark')
  })
})
