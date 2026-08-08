import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three link columns', () => {
    render(<Footer />)
    for (const column of ['Event', 'Resources', 'Connect']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Speakers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Press Kit' })).toBeInTheDocument()
  })

  it('renders the copyright line and social links', () => {
    render(<Footer />)
    expect(
      screen.getByText(/© 2026 Keynote Conference\. All rights reserved\./i),
    ).toBeInTheDocument()
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
