import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the heading and eight alt-tagged image tiles', () => {
    render(<Gallery />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'A Glimpse of Sapor' }),
    ).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)

    for (const alt of [
      'Elegant dining room',
      'Fresh pasta dish',
      'Italian wine selection',
      'Restaurant interior',
      'Chef plating a dish',
      'Wood-fired pizza',
      'Candlelit table setting',
      'Espresso and dessert',
    ]) {
      expect(screen.getByAltText(alt)).toBeInTheDocument()
    }
  })
})
