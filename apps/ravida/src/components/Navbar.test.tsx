import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Ravida')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /menu/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('adds solid background on scroll', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('bg-transparent')
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-ink')
  })

  it('removes solid background when scrolled back to top', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-ink')
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-transparent')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Click a mobile menu link
    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    // The mobile link is the second one (desktop first, mobile second)
    const mobileLink = mobileLinks[1]!
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows X icon when mobile menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    // X icon should be visible (aria-hidden, so check the SVG class)
    expect(toggle.querySelector('.lucide-x')).toBeInTheDocument()
  })
})
