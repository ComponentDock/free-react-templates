import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { describe, it, expect } from 'vitest'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders four pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Platinum')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$109')).toBeInTheDocument()
    expect(screen.getByText('$159')).toBeInTheDocument()
  })

  it('marks Standard plan as popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders Get Started buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(4)
  })
})
