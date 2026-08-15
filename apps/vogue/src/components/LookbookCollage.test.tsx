import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LookbookCollage } from './LookbookCollage'
import { collageBoxes, largeBox } from '../data'

describe('LookbookCollage', () => {
  it('renders the three collage boxes with letter-spaced captions', () => {
    render(<LookbookCollage />)
    expect(screen.getByRole('region', { name: 'Lookbook collage' })).toBeInTheDocument()

    const first = collageBoxes.find((box) => box.id === 'first')!
    for (const caption of first.captions) {
      expect(screen.getAllByText(caption.text).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'See More' })).toBeInTheDocument()

    const second = collageBoxes.find((box) => box.id === 'second')!
    for (const caption of second.captions) {
      expect(screen.getByText(caption.text)).toBeInTheDocument()
    }

    for (const caption of largeBox.captions) {
      expect(screen.getAllByText(caption.text).length).toBeGreaterThan(0)
    }
  })

  it('duplicates shared captions across the first and large boxes', () => {
    render(<LookbookCollage />)
    expect(screen.getAllByText('2019 Party')).toHaveLength(2)
    expect(screen.getAllByText('Trend Allert')).toHaveLength(2)
  })

  it('renders images with descriptive alt text', () => {
    render(<LookbookCollage />)
    expect(screen.getByAltText('Jewelry lookbook editorial photo')).toBeInTheDocument()
    expect(screen.getByAltText('Footwear lookbook editorial photo')).toBeInTheDocument()
    expect(screen.getByAltText('Collection lookbook editorial photo')).toBeInTheDocument()
  })
})
