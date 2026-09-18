import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading text', () => {
    render(<CTA />)
    expect(screen.getByText(/Want To Work/i)).toBeInTheDocument()
  })

  it('renders the call-to-action button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /Let's Work Together/i })).toBeInTheDocument()
  })
})
