import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders all six gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('has correct alt text for each image', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Campus life photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Campus life photo 6')).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    render(<Gallery />)
    expect(screen.getByRole('region', { name: 'Gallery' })).toBeInTheDocument()
  })
})
