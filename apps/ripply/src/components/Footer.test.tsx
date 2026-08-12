import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the subscription band with email input and SEND button', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'Subscription Now' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()

    // Submitting must not reload the page (client-side only).
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the App Home and Support link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'App Home' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Features', 'Price', 'Screenshot', 'Download']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 3, name: 'Support' })).toBeInTheDocument()
    for (const label of ['FAQ', 'Help', 'Offer', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the contact form with all fields and a SEND NOW button', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Contact Us' })).toBeInTheDocument()
    for (const label of ['Your name', 'Your phone', 'Your email', 'Your subject', 'Your message']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }

    // Submitting must not reload the page.
    await user.click(screen.getByRole('button', { name: /Send Now/i }))
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/© 2026 Ripply/)).toBeInTheDocument()
  })
})
