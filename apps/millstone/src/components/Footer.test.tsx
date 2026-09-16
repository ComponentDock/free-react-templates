import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Millstone logo', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Millstone/).length).toBeGreaterThan(0)
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders quick links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('renders services heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders copyright with Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', { name: /follow/i })
    expect(socialLinks.length).toBeGreaterThanOrEqual(3)
  })

  it('renders newsletter email input', () => {
    render(<Footer />)
    expect(screen.getByRole('textbox', { name: /email for newsletter/i })).toBeInTheDocument()
  })

  it('allows typing in newsletter email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email for newsletter/i })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('renders subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders footer services links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Automotive Manufacturing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Quality Control' })).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email for newsletter/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    // Form submit calls preventDefault (no page reload)
    expect(input).toHaveValue('test@example.com')
  })
})
