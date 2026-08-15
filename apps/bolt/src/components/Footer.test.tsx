import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer, socialLinks } from './Footer'

describe('Footer', () => {
  it('shows the four widgets and the Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Location' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscriptions' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'E-mail' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Social Media' })).toBeInTheDocument()

    expect(screen.getByText('1525 Awesome Lane, Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('+1 (603) 535-4592')).toBeInTheDocument()
    expect(screen.getByText('+1 (603) 535-4556')).toBeInTheDocument()
    expect(screen.getByText('Contact@boltfit.com')).toBeInTheDocument()

    for (const social of socialLinks) {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute('href', social.href)
    }

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(/© 2026 Bolt\. All rights reserved\./)).toBeInTheDocument()
  })
})
