import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders all three pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
  })

  it('renders pricing amounts', () => {
    render(<Pricing />)
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('99')).toBeInTheDocument()
    expect(screen.getByText('149')).toBeInTheDocument()
  })

  it('marks Premium as popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders Buy Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: 'Buy Now' })
    expect(buttons).toHaveLength(3)
  })
})
