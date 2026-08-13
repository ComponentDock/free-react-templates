import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureBlocks } from './FeatureBlocks'
import { featureBlocks } from '../data'

describe('FeatureBlocks', () => {
  it('renders the four alternating blocks in order with headings and images', () => {
    render(<FeatureBlocks />)

    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(4)
    expect(headings[0]).toHaveTextContent('Communicate with ease')
    expect(headings[1]).toHaveTextContent('Scheduling when you want')
    expect(headings[2]).toHaveTextContent('Realtime Messaging service')
    expect(headings[3]).toHaveTextContent('Live chat when you needed')

    for (const block of featureBlocks) {
      expect(screen.getByRole('img', { name: block.alt })).toHaveAttribute('src', block.image)
    }
  })
})
