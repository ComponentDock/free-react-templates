import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureStrip } from './FeatureStrip'
import { financeItems, financeLabel } from '../data'

describe('FeatureStrip', () => {
  it('renders four icon + title items on the light background', () => {
    const { container } = render(<FeatureStrip />)

    expect(screen.getByRole('region', { name: financeLabel })).toBeInTheDocument()
    const icons = container.querySelectorAll('svg')
    expect(icons).toHaveLength(financeItems.length)
    for (const item of financeItems) {
      expect(screen.getByRole('heading', { level: 2, name: item.title })).toBeInTheDocument()
    }
  })
})
