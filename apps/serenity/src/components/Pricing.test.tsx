import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the pricing section headings', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Tables')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pricing Treatments' })).toBeInTheDocument()
  })

  it('renders three pricing cards with amounts, features and actions', () => {
    render(<Pricing />)
    for (const name of ['Year Card', 'Monthly Card', 'Weekly Card']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('449')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getAllByText('Enjoy All The Features')).toHaveLength(3)
    expect(screen.getAllByText('Face Treatments')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })
})
