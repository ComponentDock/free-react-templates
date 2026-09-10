import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'What We Do?' })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 3, name: 'Engine Overhaul' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Power Steering' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Oil Change' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Upgrades Car' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(screen.getByText(/Complete engine rebuilds/)).toBeInTheDocument()
    expect(screen.getByText(/Expert power steering/)).toBeInTheDocument()
    expect(screen.getByText(/Regular oil changes/)).toBeInTheDocument()
    expect(screen.getByText(/Performance upgrades/)).toBeInTheDocument()
  })

  it('renders service images with alt text', () => {
    render(<Services />)

    expect(screen.getByAltText('Engine Overhaul service')).toBeInTheDocument()
    expect(screen.getByAltText('Power Steering service')).toBeInTheDocument()
    expect(screen.getByAltText('Oil Change service')).toBeInTheDocument()
    expect(screen.getByAltText('Upgrades Car service')).toBeInTheDocument()
  })
})
