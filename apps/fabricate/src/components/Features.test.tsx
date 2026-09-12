import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Residential Service')).toBeInTheDocument()
    expect(screen.getByText('Commercial Service')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/comprehensive maintenance services/i)).toBeInTheDocument()
    expect(screen.getByText(/specialized residential industrial/i)).toBeInTheDocument()
    expect(screen.getByText(/full-scale commercial industrial/i)).toBeInTheDocument()
  })
})
