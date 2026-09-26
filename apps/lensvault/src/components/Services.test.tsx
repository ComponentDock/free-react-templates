import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows Why Choose Us heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /why choose us/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Expert Technicians')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
    expect(screen.getByText('Positive Reviews')).toBeInTheDocument()
  })

  it('shows description for each service', () => {
    render(<Services />)
    expect(screen.getByText(/years of experience and technical expertise/i)).toBeInTheDocument()
  })
})
