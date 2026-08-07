import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading, blurb, and both call-to-action buttons', () => {
    render(<CTA />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Very Useful & Friendly' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up for free' })).toBeInTheDocument()
  })
})
