import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesSpecs } from './FeaturesSpecs'

describe('FeaturesSpecs', () => {
  it('renders the heading, blurb, and supporting feature rows', () => {
    render(<FeaturesSpecs />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Amazing Features That make it Awesome!/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Features Specifications/)).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })
})
