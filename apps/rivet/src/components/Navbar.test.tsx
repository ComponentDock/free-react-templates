import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Rivet')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Works' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Get A Quote button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Get A Quote' })).toBeInTheDocument()
  })

  it('applies scrolled styles on scroll', async () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-paper')
  })

  it('shows X icon with scrolled style when menu is open and scrolled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Scroll down first
    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    const closeBtn = screen.getByRole('button', { name: 'Close menu' })
    const svg = closeBtn.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.getAttribute('class')).toContain('text-heading')
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when X is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    const closeBtn = screen.getByRole('button', { name: 'Close menu' })
    await user.click(closeBtn)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    const mobileLinks = screen.getAllByRole('link', { name: 'Services' })
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    mobileLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when Get A Quote is clicked in mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    // The mobile Get A Quote is the last link with that name
    const quoteLinks = screen.getAllByRole('link', { name: 'Get A Quote' })
    const mobileQuote = quoteLinks[quoteLinks.length - 1]!
    mobileQuote.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(mobileQuote)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('cleans up scroll event listener', () => {
    const spy = vi.spyOn(window, 'addEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
