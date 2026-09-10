import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeDefined()
  })

  it('renders four pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('First PMS')).toBeDefined()
    expect(screen.getByText('Engine Diagnostics')).toBeDefined()
    expect(screen.getByText('Tow Truck')).toBeDefined()
    expect(screen.getByText('Car Wash')).toBeDefined()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('78.98')).toBeDefined()
    expect(screen.getByText('83.75')).toBeDefined()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(4)
  })
})
