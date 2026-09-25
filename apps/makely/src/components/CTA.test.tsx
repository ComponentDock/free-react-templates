import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the CTA heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { name: /Let's Get Started/i })).toBeInTheDocument()
  })

  it('renders a teal background section', () => {
    render(<CTA />)
    const section = screen.getByRole('heading', { name: /Let's Get Started/i }).closest('section')
    expect(section).toHaveClass('bg-primary')
  })
})
