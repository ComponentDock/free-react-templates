import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('displays 6 service cards', () => {
    render(<Services />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBeGreaterThanOrEqual(6)
  })

  it('renders each service title', () => {
    render(<Services />)
    expect(screen.getByText('Flexible Working Hours')).toBeInTheDocument()
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Building Renovation')).toBeInTheDocument()
    expect(screen.getByText('Building Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Interior Styling')).toBeInTheDocument()
    expect(screen.getByText('Space Planning')).toBeInTheDocument()
  })
})
