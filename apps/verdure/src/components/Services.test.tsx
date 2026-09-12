import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Explore Our Best Offer/i }),
    ).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText(/Gardening Water System/i)).toBeInTheDocument()
    expect(screen.getByText(/Preparing Landscape/i)).toBeInTheDocument()
    expect(screen.getByText(/Garden Fence/i)).toBeInTheDocument()
    expect(screen.getByText(/Garden Supplies/i)).toBeInTheDocument()
  })
})
