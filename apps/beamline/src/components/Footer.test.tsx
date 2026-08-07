import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the wordmark, link columns, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /^Beamline/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Community' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Beamline\. All rights reserved/i)).toBeInTheDocument()
  })

  it('shows social links', () => {
    render(<Footer />)

    for (const label of ['Facebook', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
