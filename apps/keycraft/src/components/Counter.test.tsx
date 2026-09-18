import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all 5 stats', () => {
    render(<Counter />)

    expect(screen.getByText('25k+')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('16')).toBeInTheDocument()
    expect(screen.getByText('World Wide Branch')).toBeInTheDocument()
    expect(screen.getByText('28k+')).toBeInTheDocument()
    expect(screen.getByText('Project Complete')).toBeInTheDocument()
    expect(screen.getByText('36')).toBeInTheDocument()
    expect(screen.getByText('Award Winner')).toBeInTheDocument()
    expect(screen.getByText('74k+')).toBeInTheDocument()
    expect(screen.getByText('Products sold')).toBeInTheDocument()
  })

  it('renders the section with correct aria label', () => {
    render(<Counter />)

    expect(screen.getByRole('region', { name: 'Statistics' })).toBeInTheDocument()
  })
})
