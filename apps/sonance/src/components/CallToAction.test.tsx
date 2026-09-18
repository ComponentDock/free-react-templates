import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the section heading', () => {
    render(<CallToAction />)
    expect(screen.getByRole('heading', { level: 2, name: /support the show/i })).toBeInTheDocument()
  })

  it('shows the donation description', () => {
    render(<CallToAction />)
    expect(screen.getByText(/enjoy listening to our podcast/i)).toBeInTheDocument()
  })

  it('has a Make a Donation button', () => {
    render(<CallToAction />)
    expect(screen.getByRole('link', { name: 'Make a Donation' })).toBeInTheDocument()
  })
})
