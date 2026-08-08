import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Markets } from './Markets'

describe('Markets', () => {
  it('shows the heading and all eight market cards with descriptions and links', () => {
    render(<Markets />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose Your Market' }),
    ).toBeInTheDocument()

    const expected = [
      'Cryptocurrency',
      'Stock Trading',
      'Forex',
      'Options Trading',
      'Prediction Markets',
      'Technical Analysis',
      'Risk Management',
      'Algorithmic Trading',
    ]
    for (const title of expected) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: /Learn more/ })).toHaveLength(8)
  })
})
