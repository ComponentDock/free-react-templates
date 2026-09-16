import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders heading and contact button', () => {
    render(<CTA />)
    expect(screen.getByText('Free Case Evaluation')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contact us Now' })).toBeInTheDocument()
  })

  it('displays descriptive text', () => {
    render(<CTA />)
    expect(screen.getByText(/Female divided bearing/)).toBeInTheDocument()
  })
})
