import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders pricing heading and three plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular Pricing Package')).toBeInTheDocument()
    expect(screen.getByText('Normal')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Ultimate')).toBeInTheDocument()
  })

  it('displays prices correctly', () => {
    render(<Pricing />)
    expect(screen.getByText('45.80')).toBeInTheDocument()
    expect(screen.getByText('65.80')).toBeInTheDocument()
    expect(screen.getByText('75.80')).toBeInTheDocument()
  })

  it('renders Select Plan buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Select Plan')
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Unlimited Websites')).toHaveLength(3)
    expect(screen.getAllByText('99.9% Service Uptime')).toHaveLength(3)
  })
})
