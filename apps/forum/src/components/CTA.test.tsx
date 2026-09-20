import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders heading and description', () => {
    render(<CTA />)
    expect(screen.getByText('Huge Transaction in last Week')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
  })

  it('renders Become a Member button', () => {
    render(<CTA />)
    expect(screen.getByText('Become a Member')).toBeInTheDocument()
  })
})
