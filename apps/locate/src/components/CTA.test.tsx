import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText(/Let's get started/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CTA />)
    expect(screen.getByText(/Join thousands of users/)).toBeInTheDocument()
  })

  it('renders the Sign Up button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
  })
})
