import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { PLANS } from '../data'

describe('Pricing', () => {
  it('renders three plan cards with the middle one highlighted', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Pricing Plans')
    for (const plan of PLANS) {
      expect(screen.getByRole('heading', { level: 3, name: plan.name })).toBeInTheDocument()
    }
    expect(
      screen.getByRole('heading', { level: 3, name: 'Golden Package' }).closest('article'),
    ).toHaveClass('ring-2')
  })

  it('renders prices, features, and Order Now buttons', () => {
    render(<Pricing />)
    expect(screen.getByText('$49.00')).toBeInTheDocument()
    expect(screen.getByText('$69.00')).toBeInTheDocument()
    expect(screen.getByText('$99.00')).toBeInTheDocument()
    for (const plan of PLANS) {
      for (const feature of plan.features) {
        expect(screen.getByText(feature)).toBeInTheDocument()
      }
    }
    expect(screen.getAllByRole('link', { name: /order now/i })).toHaveLength(3)
  })
})
