import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  aboutBlurb,
  contactInfo,
  footerSocials,
  importantLinks,
  madeWithText,
  newsletterError,
  newsletterPlaceholder,
  newsletterSuccess,
  siteName,
  socialLabels,
} from '../data'

describe('Footer', () => {
  it('renders the About Us widget with the blurb and logo', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(aboutBlurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
  })

  it('renders the Contact Info widget', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Contact Info' })).toBeInTheDocument()
    for (const row of contactInfo) {
      expect(screen.getAllByText(new RegExp(row.label)).length).toBeGreaterThan(0)
      expect(screen.getByText(row.value)).toBeInTheDocument()
    }
  })

  it('renders the Important Link widget', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Important Link' })).toBeInTheDocument()
    for (const link of importantLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('blocks invalid emails with a per-field error', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a confirmation message after a valid subscribe', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', newsletterPlaceholder)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
  })

  it('renders the copyright bar with the current year and the social links', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`© ${year} ${madeWithText.replace('|', '\\|')}`)),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Colorlib' })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
    for (const name of footerSocials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })
})
