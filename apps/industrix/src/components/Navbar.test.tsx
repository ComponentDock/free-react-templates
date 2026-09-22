import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Industrix')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the Get a Quote button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Click a mobile nav link (the second "Home" link)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[1]!)
    // Menu should close — only one Home link remains visible
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('has navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
  })

  it('adds shadow on scroll', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav.className).toContain('shadow-md')
  })

  it('removes shadow when scroll is small', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav.className).not.toContain('shadow-md')
  })
})
