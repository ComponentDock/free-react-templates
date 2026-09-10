import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading, description, and CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /What are you waiting for/i })).toBeInTheDocument()
    expect(screen.getByText(/Far far away/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Rent a car now/i })).toHaveAttribute(
      'href',
      '#listing',
    )
  })

  it('has a blue background', () => {
    render(<CtaBanner />)
    const section = screen
      .getByRole('heading', { name: /What are you waiting for/i })
      .closest('section')!
    expect(section).toHaveClass('bg-brand')
  })
})
