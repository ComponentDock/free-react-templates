import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our services' })).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Residential Service')).toBeInTheDocument()
    expect(screen.getByText('Commercial Service')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Regular maintenance keeps/)).toBeInTheDocument()
    expect(screen.getByText(/From kitchen sinks/)).toBeInTheDocument()
    expect(screen.getByText(/large-scale commercial/)).toBeInTheDocument()
  })
})
