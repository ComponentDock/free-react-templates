import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureGrid } from './FeatureGrid'

describe('FeatureGrid', () => {
  it('renders heading and all feature cards', () => {
    render(<FeatureGrid />)
    expect(screen.getByText('Top Features That Set Us Apart')).toBeInTheDocument()
    expect(screen.getByText('High Performance')).toBeInTheDocument()
    expect(screen.getByText('Advanced Settings')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Ready')).toBeInTheDocument()
    expect(screen.getByText('Mobile First')).toBeInTheDocument()
  })

  it('renders product image in center', () => {
    render(<FeatureGrid />)
    const img = screen.getByAltText('Featured smartwatch')
    expect(img).toBeInTheDocument()
  })
})
