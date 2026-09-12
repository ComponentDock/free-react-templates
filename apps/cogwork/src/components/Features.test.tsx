import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Automotive Parts')).toBeInTheDocument()
    expect(screen.getByText('Maintenance Services')).toBeInTheDocument()
    expect(screen.getByText('Green Energy')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Precision-engineered/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive maintenance/)).toBeInTheDocument()
    expect(screen.getByText(/Sustainable energy/)).toBeInTheDocument()
  })
})
