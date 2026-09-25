import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading and 3 pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Choose Your Plan' })).toBeInTheDocument()
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('shows correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('72')).toBeInTheDocument()
    expect(screen.getByText('149')).toBeInTheDocument()
  })

  it('has Buy Now buttons', () => {
    render(<Pricing />)
    const buyButtons = screen.getAllByText('Buy Now')
    expect(buyButtons).toHaveLength(3)
  })
})
