import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: /choose your plan/i })).toBeInTheDocument()
  })

  it('renders all 3 plan cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Beginner')).toBeInTheDocument()
    expect(screen.getByText('Expert')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
  })

  it('displays correct prices and Join Now buttons', () => {
    render(<Pricing />)
    expect(screen.getByText('$45')).toBeInTheDocument()
    expect(screen.getByText('$65')).toBeInTheDocument()
    expect(screen.getByText('$85')).toBeInTheDocument()
    const buttons = screen.getAllByText('Join Now')
    expect(buttons.length).toBe(3)
  })

  it('displays plan features', () => {
    render(<Pricing />)
    expect(screen.getByText('Access to basic gym equipment')).toBeInTheDocument()
    expect(screen.getByText('Personal trainer sessions')).toBeInTheDocument()
    expect(screen.getByText('Dedicated personal trainer')).toBeInTheDocument()
  })
})
