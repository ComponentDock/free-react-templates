import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
  })

  it('renders all three service titles', () => {
    render(<Services />)
    expect(screen.getByText('Family Therapy')).toBeInTheDocument()
    expect(screen.getByText('Legal Counseling')).toBeInTheDocument()
    expect(screen.getByText('Relationship Guidance')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/navigating complex dynamics/)).toBeInTheDocument()
    expect(screen.getByText(/legal advice and support/)).toBeInTheDocument()
    expect(screen.getByText(/communication techniques/)).toBeInTheDocument()
  })
})
