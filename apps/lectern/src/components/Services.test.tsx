import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText(/our services/i)).toBeInTheDocument()
  })

  it('renders all six service items', () => {
    render(<Services />)
    expect(screen.getByText('Art Studio')).toBeInTheDocument()
    expect(screen.getByText('Great Facility')).toBeInTheDocument()
    expect(screen.getByText('Activity Hub')).toBeInTheDocument()
    expect(screen.getByText('Fully Qualified')).toBeInTheDocument()
    expect(screen.getByText('Flexible Schedule')).toBeInTheDocument()
    expect(screen.getByText('Chemistry Lab')).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    render(<Services />)
    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument()
  })
})
