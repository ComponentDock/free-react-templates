import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders three membership cards with prices and excerpts', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Membership Cards' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Year Card' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Monthly Card' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Weekly Card' })).toBeInTheDocument()
    expect(screen.getByText('449')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getByText('For 1 Year')).toBeInTheDocument()
    expect(screen.getByText('For 1 Month')).toBeInTheDocument()
    expect(screen.getByText('For 1 Week')).toBeInTheDocument()
  })

  it('renders the feature lists and Get Started buttons', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Enjoy All The Features').length).toBe(3)
    expect(screen.getByText('Onetime Access To All Club')).toBeInTheDocument()
    expect(screen.getAllByText('Group Trainer').length).toBe(3)
    expect(screen.getByText('Book A Group Class')).toBeInTheDocument()
    expect(screen.getAllByText('Fitness Orientation').length).toBe(3)
    expect(screen.getAllByText('Discuss Fitness Goals').length).toBe(2)
    expect(screen.getAllByRole('link', { name: /Get Started/i }).length).toBe(3)
  })
})
