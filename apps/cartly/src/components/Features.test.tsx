import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature items', () => {
    render(<Features />)
    expect(screen.getByText(/Money Back Guarantee/i)).toBeInTheDocument()
    expect(screen.getByText(/Free Delivery/i)).toBeInTheDocument()
    expect(screen.getByText(/Always Support/i)).toBeInTheDocument()
    expect(screen.getByText(/Secure Payment/i)).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/Shall open divide a one/i)
    expect(descriptions).toHaveLength(4)
  })
})
