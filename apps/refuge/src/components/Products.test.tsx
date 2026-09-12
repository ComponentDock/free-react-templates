import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Products } from './Products'

describe('Products', () => {
  it('renders section heading', () => {
    render(<Products />)
    expect(screen.getByText('Insurance Coverage')).toBeInTheDocument()
    expect(screen.getByText('Products & Services')).toBeInTheDocument()
  })

  it('renders three insurance cards', () => {
    render(<Products />)
    expect(screen.getByText('Home Insurance')).toBeInTheDocument()
    expect(screen.getByText('Auto Insurance')).toBeInTheDocument()
    expect(screen.getByText('Travel Insurance')).toBeInTheDocument()
  })

  it('renders Learn More buttons for each card', () => {
    render(<Products />)
    const buttons = screen.getAllByText('Learn More')
    expect(buttons).toHaveLength(3)
  })

  it('has descriptive text for each product', () => {
    render(<Products />)
    expect(screen.getByText(/Protect your most valuable asset/)).toBeInTheDocument()
    expect(screen.getByText(/Get reliable auto coverage/)).toBeInTheDocument()
    expect(screen.getByText(/Travel with confidence/)).toBeInTheDocument()
  })
})
