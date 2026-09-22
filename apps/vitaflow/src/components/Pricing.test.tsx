import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Choose Your Perfect Plans')).toBeInTheDocument()
    expect(screen.getByText('Price & Plans')).toBeInTheDocument()
  })

  it('renders 4 pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Platinum')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('79')).toBeInTheDocument()
    expect(screen.getByText('109')).toBeInTheDocument()
    expect(screen.getByText('159')).toBeInTheDocument()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(4)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getAllByText('20 Workouts')).toHaveLength(4)
    expect(screen.getAllByText('24/7 Customer support')).toHaveLength(4)
  })
})
