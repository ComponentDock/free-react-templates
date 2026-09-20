import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all nav links', () => {
    render(<Navbar />)

    expect(screen.getByText('Lineup')).toBeInTheDocument()

    const links = ['Home', 'About us', 'Events', 'News', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders Buy Tickets CTA', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Buy Tickets').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    // Mobile menu should show nav links
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a mobile nav link (last 'Home' is in mobile menu)
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks.at(-1)!) // eslint-disable-line @typescript-eslint/no-non-null-assertion

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('applies scrolled styles when window is scrolled', async () => {
    render(<Navbar />)

    // Simulate scroll by setting scrollY and dispatching event
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    await act(async () => {
      window.dispatchEvent(new Event('scroll'))
    })

    // Navbar should have scrolled background
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-md')
  })

  it('renders scrolled hamburger icon correctly', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Scroll down
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    await act(async () => {
      window.dispatchEvent(new Event('scroll'))
    })

    // Open mobile menu in scrolled state
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    // Close menu in scrolled state
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
