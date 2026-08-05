import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureRows } from './FeatureRows'

describe('FeatureRows', () => {
  it('renders three alternating feature rows with learn-more buttons', () => {
    render(<FeatureRows />)

    expect(
      screen.getAllByRole('heading', { level: 2, name: 'Far far away Behind the Word Mountains' }),
    ).toHaveLength(3)

    expect(screen.getAllByRole('link', { name: 'Learn more' })).toHaveLength(3)

    expect(screen.getAllByRole('img', { name: /Bold feature illustration/ })).toHaveLength(3)
  })
})
