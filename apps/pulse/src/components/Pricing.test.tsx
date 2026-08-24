import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { name: /Find Plan that is Right for You/i }),
    ).toBeInTheDocument()
  })

  it('renders all 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
  })

  it('renders GET STARTED buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: 'GET STARTED' })
    expect(buttons.length).toBe(3)
  })

  it('marks Professional as Most Popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('5 Projects')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Projects')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Everything')).toBeInTheDocument()
  })
})
