import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureStrip } from './FeatureStrip'

describe('FeatureStrip', () => {
  it('renders three feature cards', () => {
    render(<FeatureStrip />)

    expect(screen.getByRole('heading', { level: 3, name: /primary care/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /emergency cases/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /online appointment/i }),
    ).toBeInTheDocument()
  })

  it('renders the features section with aria label', () => {
    render(<FeatureStrip />)

    expect(screen.getByRole('region', { name: /features/i })).toBeInTheDocument()
  })
})
