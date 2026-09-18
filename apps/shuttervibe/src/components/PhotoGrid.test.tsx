import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhotoGrid } from './PhotoGrid'

describe('PhotoGrid', () => {
  it('renders the photo grid section', () => {
    render(<PhotoGrid />)
    expect(screen.getByTestId('photo-grid')).toBeInTheDocument()
  })

  it('renders 9 photo items with links', () => {
    render(<PhotoGrid />)
    const photos = screen.getAllByRole('link')
    expect(photos.length).toBe(9)
    photos.forEach((photo) => {
      expect(photo).toHaveAttribute('target', '_blank')
      expect(photo).toHaveAttribute('rel', 'noreferrer')
    })
  })

  it('shows category labels on hover overlays', () => {
    render(<PhotoGrid />)
    expect(screen.getAllByText('Portrait').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Landscape').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Street').length).toBeGreaterThanOrEqual(1)
  })

  it('renders images with correct alt text', () => {
    render(<PhotoGrid />)
    expect(screen.getByAltText('Photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Photo 9')).toBeInTheDocument()
  })
})
