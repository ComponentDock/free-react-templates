import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureTiles } from './FeatureTiles'

describe('FeatureTiles', () => {
  it('renders the heading and the three feature tiles with blurbs', () => {
    render(<FeatureTiles />)

    expect(screen.getByRole('heading', { level: 2, name: 'Stunning Visuals' })).toBeInTheDocument()
    for (const title of ['Design Trends', 'Development', 'Delivery']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
