import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns and a copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Top Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Company/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Support/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Villa\. All rights reserved\./i)).toBeInTheDocument()
  })

  it('renders social links with accessible labels', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'X', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
