import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the call to action text', () => {
    render(<CTA />)
    expect(
      screen.getByText(/Create an account and start Buy, Bid or Sell Now!/),
    ).toBeInTheDocument()
  })

  it('renders the Register button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
  })

  it('has the CTA landmark', () => {
    render(<CTA />)
    expect(screen.getByLabelText('Call to action')).toBeInTheDocument()
  })
})
