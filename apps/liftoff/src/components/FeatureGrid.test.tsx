import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureGrid } from './FeatureGrid'

describe('FeatureGrid', () => {
  it('renders the title and six feature cards with Learn More links', () => {
    render(<FeatureGrid />)

    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()

    for (const title of [
      'Business Consulting',
      'Market Analysis',
      'User Monitoring',
      'Insurance Consulting',
      'Customer Satisfaction',
      'Plug & Play',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(6)
  })
})
