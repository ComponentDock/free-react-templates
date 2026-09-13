import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Seaview logo', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: /Seaview/i })).toBeInTheDocument()
  })

  it('renders contact info (phone, address, email)', () => {
    render(<Footer />)

    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('123 Ocean Drive, Coastal City')).toBeInTheDocument()
    expect(screen.getByText('info@seaview.com')).toBeInTheDocument()
  })

  it('renders the Component Dock link with correct href', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2024 Seaview\. All rights reserved\./)).toBeInTheDocument()
  })
})
