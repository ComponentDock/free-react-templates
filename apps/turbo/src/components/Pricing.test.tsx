import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument()
  })

  it('renders all three pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Personal' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Business' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ultimate' })).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
  })

  it('renders CTA buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /get started/i })
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('1 Website')).toBeInTheDocument()
    expect(screen.getByText('10 Websites')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Websites')).toBeInTheDocument()
  })
})
