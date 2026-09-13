import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Quote } from './Quote'

describe('Quote', () => {
  it('renders the heading with highlighted words', () => {
    render(<Quote />)
    expect(screen.getByText(/Plumbing/)).toBeInTheDocument()
    expect(screen.getByText(/Nowhere/)).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<Quote />)
    expect(screen.getByText(/trusted plumbing service providers/)).toBeInTheDocument()
  })
})
