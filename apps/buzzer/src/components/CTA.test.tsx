import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the CTA heading', () => {
    render(<CTA />)
    expect(
      screen.getByRole('heading', {
        name: /Get started with our awesome service today/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<CTA />)
    expect(screen.getByText(/help you transform your business/i)).toBeInTheDocument()
  })

  it('renders the Get Started Now button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /Get Started Now/i })).toBeInTheDocument()
  })
})
