import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Capabilities } from './Capabilities'

describe('Capabilities', () => {
  it('renders the section heading and six capability cards', () => {
    render(<Capabilities />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'AI That Actually Works' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(6)
    for (const title of [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Voice AI',
      'Code Generation',
      'Custom Models',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/understand, generate and reason over text/i)).toBeInTheDocument()
    expect(screen.getByText(/train bespoke models on your own data/i)).toBeInTheDocument()
  })
})
