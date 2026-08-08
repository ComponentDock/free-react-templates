import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three link columns', () => {
    render(<Footer />)
    for (const column of ['Platform', 'Resources', 'Company']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Documentation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Careers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Press' })).toBeInTheDocument()
  })

  it('renders the copyright line and social links', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Cortex\. All rights reserved\./i)).toBeInTheDocument()
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
