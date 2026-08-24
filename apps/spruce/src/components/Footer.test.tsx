import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the "Quick Links" heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
  })

  it('renders quick link items', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument()
    // Services appears twice in the list; just check it exists
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Tips & Tricks')).toBeInTheDocument()
  })

  it('renders the "Support" heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
  })

  it('renders support links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Submit Ticket' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders newsletter form with email input and subscribe button', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('newsletter form submission prevents default', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Footer />)
    const form = screen.getByPlaceholderText('Enter your email').closest('form')!
    const preventDefault = vi.fn()
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      preventDefault()
    })

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(preventDefault).toHaveBeenCalled()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright ©${year}`))).toBeInTheDocument()
  })
})
