import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesCta } from './FeaturesCta'

describe('FeaturesCta', () => {
  it('shows the pink eyebrow and the section headline', () => {
    render(<FeaturesCta />)

    expect(screen.getByText('Our Features')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Building brands with purpose' }),
    ).toBeInTheDocument()
  })
})
