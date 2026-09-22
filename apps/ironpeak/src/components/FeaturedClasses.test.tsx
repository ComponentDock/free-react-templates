import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedClasses } from './FeaturedClasses'

describe('FeaturedClasses', () => {
  it('renders the section heading', () => {
    render(<FeaturedClasses />)
    expect(screen.getByRole('heading', { name: 'Featured Classes' })).toBeInTheDocument()
  })

  it('shows all four class cards with prices', () => {
    render(<FeaturedClasses />)
    const names = ['Body Building', 'Yoga Pilates', 'Cardio Blast', 'Power Lift']
    for (const name of names) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    const prices = screen.getAllByText('$30.99')
    expect(prices).toHaveLength(4)
  })
})
