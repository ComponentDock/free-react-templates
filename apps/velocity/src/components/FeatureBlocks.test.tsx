import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureBlocks } from './FeatureBlocks'

describe('FeatureBlocks', () => {
  it('renders the three feature blocks with headings, copy, and images', () => {
    render(<FeatureBlocks />)

    for (const title of [
      'Manage team in One Place',
      'All-powerful Pointing has no control',
      'Establish a solid online presence',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })
})
