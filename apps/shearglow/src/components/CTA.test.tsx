import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(
      screen.getByRole('heading', { name: /Make ShearGlow Your Number One Choice/i }),
    ).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /Book An Appointment/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
