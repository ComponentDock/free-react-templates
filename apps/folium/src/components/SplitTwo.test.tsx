import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SplitTwo } from './SplitTwo'
import { splitTwo } from '../data'

describe('SplitTwo', () => {
  it('renders the two text blocks on the left', () => {
    render(<SplitTwo />)
    for (const block of splitTwo.blocks) {
      expect(screen.getByRole('heading', { name: block.heading })).toBeInTheDocument()
      // Copy may also appear in the mint quote block — allow duplicates.
      expect(screen.getAllByText(block.copy).length).toBeGreaterThan(0)
    }
  })

  it('renders the image with the mint quote overlay and author', () => {
    const { container } = render(<SplitTwo />)
    expect(container.querySelector('[style*="folium-split-2"]')).toBeTruthy()
    // Quote text is identical to one block's copy — scope to the mint block.
    const quoteBlocks = container.querySelectorAll('.bg-primary')
    expect(quoteBlocks.length).toBeGreaterThan(0)
    expect(quoteBlocks[0]).toHaveTextContent('small river named Duden')
    expect(screen.getByText(splitTwo.author)).toBeInTheDocument()
  })
})
