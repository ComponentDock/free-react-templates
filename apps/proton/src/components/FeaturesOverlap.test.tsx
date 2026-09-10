import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesOverlap } from './FeaturesOverlap'

describe('FeaturesOverlap', () => {
  it('renders three feature cards with titles and descriptions', () => {
    render(<FeaturesOverlap />)
    for (const title of ['Intuitive Thinking', 'Orange for Carrots', 'Infinite Possibilities']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    const descriptions = screen.getAllByText(/We approach|Bold design|From concept/)
    expect(descriptions).toHaveLength(3)
  })

  it('renders icons', () => {
    render(<FeaturesOverlap />)
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })
})
