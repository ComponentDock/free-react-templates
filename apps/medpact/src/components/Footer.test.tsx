import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  siteName,
  footerAbout,
  quickLinksTitle,
  servicesTitle2,
  newsletterTitle,
  newsletterDescription,
  subscribeLabel,
  subscribeConfirmation,
  copyright,
  footerCredit,
  footerCreditUrl,
  quickLinks,
  footerServices,
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

  it('renders quick links section', () => {
    render(<Footer />)
    expect(screen.getByText(quickLinksTitle)).toBeInTheDocument()
    for (const link of quickLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders services section', () => {
    render(<Footer />)
    expect(screen.getByText(servicesTitle2)).toBeInTheDocument()
    for (const link of footerServices) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
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
})
