import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the section heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Our App Available For Any Device',
    )
  })

  it('renders the blurb', () => {
    render(<CTA />)
    expect(screen.getByText(/Download Spark on your phone/i)).toBeInTheDocument()
  })

  it('renders both download buttons', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /download for ios/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download for android/i })).toBeInTheDocument()
  })
})
