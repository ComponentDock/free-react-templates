import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Practices } from './Practices'

const practices = [
  'Chicken Farmed For Meat',
  'Pig Farm Management',
  'Beef Cattle Farming',
  'Improved Rice Cultivation',
  'Soil Improvement Techniques',
  'Intensive Fruit Farming',
] as const

describe('Practices', () => {
  it('shows the heading and the six practice items', () => {
    render(<Practices />)

    expect(
      screen.getByRole('heading', { name: 'Farming Practices To Preserve Land & Water' }),
    ).toBeInTheDocument()
    for (const practice of practices) {
      expect(screen.getByRole('heading', { name: practice })).toBeInTheDocument()
    }
  })

  it('renders a card for every practice', () => {
    render(<Practices />)

    expect(screen.getAllByRole('article')).toHaveLength(6)
  })
})
