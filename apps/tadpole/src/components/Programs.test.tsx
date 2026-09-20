import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders section heading', () => {
    render(<Programs />)
    expect(screen.getByText('Learning Programs')).toBeInTheDocument()
  })

  it('renders all three program cards', () => {
    render(<Programs />)
    expect(screen.getByText('Tiny Tots (2-3 yrs)')).toBeInTheDocument()
    expect(screen.getByText('Little Explorers (3-5 yrs)')).toBeInTheDocument()
    expect(screen.getByText('Big Beginnings (5-6 yrs)')).toBeInTheDocument()
  })

  it('renders program descriptions', () => {
    render(<Programs />)
    expect(screen.getByText(/Sensory play/)).toBeInTheDocument()
    expect(screen.getByText(/Interactive learning/)).toBeInTheDocument()
    expect(screen.getByText(/Pre-school readiness/)).toBeInTheDocument()
  })

  it('renders Learn More buttons', () => {
    render(<Programs />)
    const buttons = screen.getAllByText('Learn More')
    expect(buttons).toHaveLength(3)
  })
})
