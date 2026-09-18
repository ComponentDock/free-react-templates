import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Us column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
  })

  it('renders the Contact Info column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Contact Info/i })).toBeInTheDocument()
  })

  it('renders the Important Links column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Important Links/i })).toBeInTheDocument()
  })

  it('renders the Newsletter column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument()
  })

  it('renders social media icon links', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', { name: /social/i })
    expect(socialLinks.length).toBeGreaterThanOrEqual(3)
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('does not reference ColorLib', () => {
    render(<Footer />)
    const footerEl = screen.getByRole('contentinfo')
    expect(footerEl.textContent).not.toMatch(/colorlib/i)
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText(/Email Address/i)
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    // Form submission is prevented (preventDefault) — just verify it didn't crash
    expect(input).toBeInTheDocument()
  })
})
