import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders quotation heading and contact button', () => {
    render(<CTA />)
    expect(screen.getByText(/Get a free/)).toBeInTheDocument()
    expect(screen.getByText(/quotation Today/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<CTA />)
    expect(screen.getByText('+44 563 986 4785')).toBeInTheDocument()
  })
})
