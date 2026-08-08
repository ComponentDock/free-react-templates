import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, link columns, social links, and copyright', () => {
    render(<Footer />)

    expect(screen.getByText(/Developer-first API infrastructure/)).toBeInTheDocument()

    for (const column of ['Products', 'Developers', 'Company']) {
      expect(screen.getByRole('heading', { level: 3, name: column })).toBeInTheDocument()
    }

    for (const link of [
      'API Gateway',
      'Authentication',
      'Analytics',
      'Webhooks',
      'Documentation',
      'SDKs',
      'API Reference',
      'Changelog',
      'About',
      'Blog',
      'Careers',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(screen.getByText(/© 2026 Endpoint/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
