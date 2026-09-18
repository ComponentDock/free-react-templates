import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Dictum')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const labels = ['Home', 'About Us', 'Team', 'Services', 'Testimonials', 'Blog', 'Contact']
    for (const label of labels) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('has correct anchor hrefs for each nav link', () => {
    render(<Navbar />)
    const links = [
      { label: 'Home', href: '#home-section' },
      { label: 'About Us', href: '#about-section' },
      { label: 'Team', href: '#team-section' },
      { label: 'Services', href: '#services-section' },
      { label: 'Testimonials', href: '#testimonials-section' },
      { label: 'Blog', href: '#blog-section' },
      { label: 'Contact', href: '#contact-section' },
    ]
    for (const link of links) {
      expect(screen.getByText(link.label).closest('a')).toHaveAttribute('href', link.href)
    }
  })

  it('adds shadow-md class when scrolled past 50px', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    // Initially not scrolled
    expect(nav.className).not.toContain('shadow-md')
    // Simulate scroll via window event
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav.className).toContain('shadow-md')
  })

  it('removes shadow-md when scrolled back up', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    // Scroll down
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav.className).toContain('shadow-md')
    // Scroll back up
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav.className).not.toContain('shadow-md')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    // Mobile menu is hidden initially
    expect(screen.getByLabelText('Toggle navigation')).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    // Now mobile menu should be visible
    expect(screen.getByLabelText('Toggle navigation')).toHaveAttribute('aria-expanded', 'true')
    // Click again to close
    await user.click(toggle)
    expect(screen.getByLabelText('Toggle navigation')).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // Find mobile nav link
    const mobileLinks = screen.getAllByText('About Us')
    // Click the mobile version (inside the dropdown)
    const mobileLink = mobileLinks.find((el) => el.closest('.lg\\:hidden'))
    if (mobileLink) {
      await user.click(mobileLink)
    }
    expect(screen.getByLabelText('Toggle navigation')).toHaveAttribute('aria-expanded', 'false')
  })
})
