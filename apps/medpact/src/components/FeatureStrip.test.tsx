import { render, screen } from '@testing-library/react'
import { FeatureStrip } from './FeatureStrip'
import { features } from '../data'
import { describe, expect, it } from 'vitest'

describe('FeatureStrip', () => {
  it('renders all feature cards', () => {
    render(<FeatureStrip />)
    for (const feature of features) {
      expect(screen.getByText(feature.title)).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
    }
  })

  it('renders exactly 4 feature cards', () => {
    render(<FeatureStrip />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(features.length)
  })
})
