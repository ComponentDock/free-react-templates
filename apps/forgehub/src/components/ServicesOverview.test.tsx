import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ServicesOverview } from './ServicesOverview'

describe('ServicesOverview', () => {
  it('renders three service cards', () => {
    render(<ServicesOverview />)
    expect(screen.getByText('Innovate')).toBeInTheDocument()
    expect(screen.getByText('Create')).toBeInTheDocument()
    expect(screen.getByText('Scale')).toBeInTheDocument()
  })

  it('renders numbered badges', () => {
    render(<ServicesOverview />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders checklist items', () => {
    render(<ServicesOverview />)
    expect(screen.getByText('Customer Experience')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
  })
})
