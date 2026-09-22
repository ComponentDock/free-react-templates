import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeatureBlocks } from './FeatureBlocks'

describe('FeatureBlocks', () => {
  it('renders four feature blocks', () => {
    render(<FeatureBlocks />)
    const blocks = screen.getAllByRole('article')
    expect(blocks.length).toBe(4)
  })

  it('displays feature titles', () => {
    render(<FeatureBlocks />)
    expect(screen.getByText('Yoga')).toBeInTheDocument()
    expect(screen.getByText('Weight Lifting')).toBeInTheDocument()
    expect(screen.getByText('Boxing')).toBeInTheDocument()
    expect(screen.getByText('Running')).toBeInTheDocument()
  })

  it('renders icons for each feature', () => {
    render(<FeatureBlocks />)
    const articles = screen.getAllByRole('article')
    for (const article of articles) {
      expect(article.querySelector('svg')).toBeTruthy()
    }
  })
})
