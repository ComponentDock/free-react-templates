import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('shows heading', () => {
    render(<CTA />)
    expect(screen.getByText('Contact us now!')).toBeInTheDocument()
  })

  it('shows phone number', () => {
    render(<CTA />)
    expect(screen.getByText(/345-678-9999/)).toBeInTheDocument()
  })

  it('shows Contact Now button', () => {
    render(<CTA />)
    expect(screen.getByText('Contact Now')).toBeInTheDocument()
  })
})
