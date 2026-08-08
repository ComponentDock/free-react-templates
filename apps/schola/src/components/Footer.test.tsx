import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the four link columns and the copyright line', () => {
    render(<Footer />)
    for (const column of ['Categories', 'Company', 'Support', 'Legal']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }
    expect(screen.getByText(/©/)).toBeInTheDocument()
  })

  it('shows social links for X, LinkedIn, YouTube, and Instagram', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /YouTube/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
  })
})
