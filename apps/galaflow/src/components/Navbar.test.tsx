import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('GalaFlow')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Programs', 'Speakers', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the Buy Ticket button', () => {
    render(<Navbar />)
    expect(screen.getByText('Buy Ticket')).toBeInTheDocument()
  })

  it('has a mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileLinks = screen.getAllByText('Home')
    const lastLink = mobileLinks[mobileLinks.length - 1]
    expect(lastLink).toBeDefined()
    await lastLink!.click()
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Buy Ticket is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const buyTicketLinks = screen.getAllByText('Buy Ticket')
    const mobileBuyTicket = buyTicketLinks[buyTicketLinks.length - 1]
    await mobileBuyTicket!.click()
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('applies scrolled styles on scroll', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-white')
  })

  it('applies non-scrolled styles initially', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-transparent')
  })

  it('cleans up scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })

  it('is accessible with proper landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
