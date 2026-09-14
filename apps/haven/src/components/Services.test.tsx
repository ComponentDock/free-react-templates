import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title and heading', () => {
    render(<Services />)

    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Discover Our Services' }),
    ).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)

    const serviceNames = [
      'Travel Plan',
      'Catering Service',
      'Babysitting',
      'Laundry',
      'Hire Driver',
      'Bar & Drink',
    ]

    for (const name of serviceNames) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('renders descriptions for each service', () => {
    render(<Services />)

    const descriptions = screen.getAllByText(/Lorem ipsum/)
    expect(descriptions.length).toBe(6)
  })
})
