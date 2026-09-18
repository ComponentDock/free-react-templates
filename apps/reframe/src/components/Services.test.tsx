import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders 3 service cards with titles', () => {
    render(<Services />)
    expect(screen.getByText('Pre-Construction')).toBeInTheDocument()
    expect(screen.getByText('House Renovation')).toBeInTheDocument()
    expect(screen.getByText('General Contracting')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Comprehensive planning and design services/i)).toBeInTheDocument()
    expect(screen.getByText(/Transform your existing space/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-service construction management/i)).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<Services className="extra" />)
    expect(screen.getByTestId('services').className).toContain('extra')
  })
})
