import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Vizion')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
    const contactLinks = screen.getAllByRole('link', { name: /contact/i })
    expect(contactLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Contact Me CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })

  it('renders mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('applies scrolled styles when window is scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-md')
  })

  it('opens mobile menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[aboutLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Contact Me is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const contactMeButtons = screen.getAllByText('Contact Me')
    await user.click(contactMeButtons[contactMeButtons.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has correct href attributes on nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute('href', '#portfolio')
    const contactLinks = screen.getAllByRole('link', { name: /contact/i })
    expect(contactLinks.some((l) => l.getAttribute('href') === '#contact')).toBe(true)
  })
})
