import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  siteName,
  footerAbout,
  quickLinksTitle,
  contactFormTitle,
  newsletterTitle,
  newsletterDescription,
  subscribeLabel,
  subscribeConfirmation,
  copyright,
  footerCredit,
  footerCreditUrl,
  footerQuickLinks,
} from '../data'

describe('Footer', () => {
  it('renders the site name', () => {
    render(<Footer />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
  })

  it('renders the about blurb', () => {
    render(<Footer />)
    expect(screen.getByText(footerAbout)).toBeInTheDocument()
  })

  it('renders latest news section', () => {
    render(<Footer />)
    expect(screen.getByText(quickLinksTitle)).toBeInTheDocument()
    for (const link of footerQuickLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders contact form section', () => {
    render(<Footer />)
    expect(screen.getByText(contactFormTitle)).toBeInTheDocument()
  })

  it('renders newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText(newsletterTitle)).toBeInTheDocument()
    expect(screen.getByText(newsletterDescription)).toBeInTheDocument()
  })

  it('shows confirmation after newsletter subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByPlaceholderText(/enter your email/i)
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(subscribeConfirmation)
  })

  it('renders the copyright', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(copyright.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))),
    ).toBeInTheDocument()
  })

  it('renders the Component Dock credit link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: footerCredit })
    expect(link).toHaveAttribute('href', footerCreditUrl)
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Social 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Social 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Social 3')).toBeInTheDocument()
    expect(screen.getByLabelText('Social 4')).toBeInTheDocument()
  })

  it('handles contact form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const nameInput = screen.getByPlaceholderText('Your Name')
    const emailInput = screen.getByPlaceholderText('Your Email')
    const messageInput = screen.getByPlaceholderText('Your Message')

    await user.type(nameInput, 'John')
    await user.type(emailInput, 'john@test.com')
    await user.type(messageInput, 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })
})
