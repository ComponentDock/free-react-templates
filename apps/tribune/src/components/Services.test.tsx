import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Venue')).toBeInTheDocument()
    expect(screen.getByText('Transport')).toBeInTheDocument()
    expect(screen.getByText('Hotel')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Mountain View/)).toBeInTheDocument()
    expect(screen.getByText(/shuttle services/)).toBeInTheDocument()
    expect(screen.getByText(/Partner hotels/)).toBeInTheDocument()
    expect(screen.getByText(/On-site dining/)).toBeInTheDocument()
  })
})
