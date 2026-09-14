import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()
  })

  it('renders all four plan names', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic Plan')).toBeInTheDocument()
    expect(screen.getByText('Advance Plan')).toBeInTheDocument()
    expect(screen.getByText('Expert Plan')).toBeInTheDocument()
    expect(screen.getByText('Pro Plan')).toBeInTheDocument()
  })

  it('renders all four prices', () => {
    render(<Pricing />)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('19')).toBeInTheDocument()
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('99')).toBeInTheDocument()
  })

  it('renders the Basic Plan tagline', () => {
    render(<Pricing />)
    expect(screen.getByText('100% free. Forever')).toBeInTheDocument()
  })

  it('renders all four Choose Plan buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Choose Plan')
    expect(buttons).toHaveLength(4)
  })

  it('renders feature lists for all plans', () => {
    render(<Pricing />)
    expect(screen.getByText('150 GB Bandwidth')).toBeInTheDocument()
    expect(screen.getByText('1 TB Storage')).toBeInTheDocument()
  })
})
