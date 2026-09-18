import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Offering Best Cleaning Services' }),
    ).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Residential Cleaning')).toBeInTheDocument()
    expect(screen.getByText('Commercial Cleaning')).toBeInTheDocument()
    expect(screen.getByText('Construction Cleaning')).toBeInTheDocument()
    expect(screen.getByText('Windows Cleaning')).toBeInTheDocument()
    expect(screen.getByText('Carpet Cleaning')).toBeInTheDocument()
    expect(screen.getByText('Furniture Cleaning')).toBeInTheDocument()
  })

  it('renders price for each service', () => {
    render(<Services />)
    const priceElements = screen.getAllByText(/\$50/)
    expect(priceElements.length).toBe(6)
  })
})
