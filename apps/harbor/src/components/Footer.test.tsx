import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the call-us half and the join-now half with both account CTAs', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Need help? Call us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 (555) 014-2290' })).toHaveAttribute(
      'href',
      'tel:+15550142290',
    )
    expect(
      screen.getByRole('heading', {
        name: 'Join now and get your first month of Deluxe hosting free',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('renders the wordmark, blurb and four labelled social links', () => {
    render(<Footer />)
    expect(screen.getByText('Harbor')).toBeInTheDocument()
    expect(screen.getByText(/Harbor runs fast, secure hosting/)).toBeInTheDocument()
    for (const social of ['Facebook', 'X', 'YouTube', 'Instagram']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders the company, hosting and contact columns', () => {
    render(<Footer />)
    for (const link of [
      'Our Company',
      'About Us',
      'Press & Media',
      'News / Blogs',
      'Careers',
      'Web Hosting',
      'Reseller Hosting',
      'VPS Hosting',
      'Dedicated Servers',
      'Cloud Hosting',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText(/1450 Alder Street/)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 014-2290 | +1 (555) 014-2291')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'support@harbor.example' })).toBeInTheDocument()
  })

  it('credits Component Dock in the copyright line', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
    expect(screen.getByText('Copyright © 2026 Harbor. All rights reserved.')).toBeInTheDocument()
  })
})
