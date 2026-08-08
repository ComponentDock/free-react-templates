import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, link columns, social links, and copyright', () => {
    render(<Footer />)

    expect(screen.getByText(/full-service interior design studio/)).toBeInTheDocument()

    for (const column of ['Studio', 'Services', 'Resources']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument()
    }
    expect(screen.getByText('Residential Design')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/© 2026 Forma/)).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  })
})
