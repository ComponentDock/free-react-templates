import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByText('Why We Are the Best')).toBeInTheDocument()
  })

  it('renders all six features', () => {
    render(<Features />)
    expect(screen.getByText('Expert Agents')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
    expect(screen.getByText('Fast Transactions')).toBeInTheDocument()
    expect(screen.getByText('Premium Listings')).toBeInTheDocument()
    expect(screen.getByText('Trusted Reviews')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/seasoned agents/)).toBeInTheDocument()
    expect(screen.getByText(/Award-winning service/)).toBeInTheDocument()
    expect(screen.getByText(/7 days a week/)).toBeInTheDocument()
  })
})
