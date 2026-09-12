import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Choose Your Plan')
  })

  it('renders 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Starters')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$19')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /get started/i })
    expect(buttons.length).toBeGreaterThanOrEqual(3)
  })
})
