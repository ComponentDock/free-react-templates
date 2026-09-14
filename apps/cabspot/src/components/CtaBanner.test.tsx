import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /experience great support/i })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /reach our support team/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/our support team is available 24\/7/i)).toBeInTheDocument()
  })
})
