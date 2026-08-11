import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureBand } from './FeatureBand'
import { featureLabel, features } from '../data'

describe('FeatureBand', () => {
  it('renders all three features with titles and icons', () => {
    render(<FeatureBand />)

    expect(screen.getByRole('region', { name: featureLabel })).toBeInTheDocument()
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
    }
    // Icons render inside the feature rows.
    expect(document.querySelectorAll('svg')).toHaveLength(features.length)
  })

  it('renders one feature row per feature', () => {
    render(<FeatureBand />)
    const rows = screen.getByRole('region', { name: featureLabel }).querySelectorAll('div.flex')
    expect(rows).toHaveLength(features.length)
  })
})
