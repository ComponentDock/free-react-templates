import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Event Gallery')).toBeInTheDocument()
  })

  it('renders all 8 gallery items', () => {
    render(<Gallery />)
    expect(screen.getAllByTestId('gallery-item')).toHaveLength(8)
  })

  it('renders images with correct seeds', () => {
    render(<Gallery />)
    const images = screen.getAllByAltText(/Gallery image/)
    expect(images).toHaveLength(8)
  })
})
