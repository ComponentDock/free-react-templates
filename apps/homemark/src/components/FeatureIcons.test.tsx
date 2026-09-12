import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureIcons } from './FeatureIcons'

describe('FeatureIcons', () => {
  it('renders all 9 feature icon labels', () => {
    render(<FeatureIcons />)
    const labels = [
      'Easy Buying',
      'Ready to Move',
      'Great Location',
      'Community Pool',
      '30% Park',
      'Sunny Location',
      'Modern Design',
      'Parking Spaces',
      'Garage Included',
    ]
    for (const label of labels) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders the feature-icons section', () => {
    render(<FeatureIcons />)
    expect(screen.getByTestId('feature-icons')).toBeInTheDocument()
  })
})
