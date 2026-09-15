import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the call-to-action text', () => {
    render(<CTA />)
    expect(screen.getByText(/Please Help them and Donate now/)).toBeInTheDocument()
  })

  it('renders the Donate Now button', () => {
    render(<CTA />)
    const link = screen.getByRole('link', { name: /donate now/i })
    expect(link).toHaveAttribute('href', '#donate')
  })

  it('has a gradient background', () => {
    render(<CTA />)
    const section = screen.getByText(/Please Help them and Donate now/).closest('section')!
    expect(section.className).toContain('bg-gradient-to-r')
  })
})
