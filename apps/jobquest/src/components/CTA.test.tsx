import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText('Looking For A Job?')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CTA />)
    expect(screen.getByText(/Join thousands/)).toBeInTheDocument()
  })

  it('renders the Sign Up button', () => {
    render(<CTA />)
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })
})
