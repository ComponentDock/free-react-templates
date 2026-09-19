import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 4 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('has alt text for each image', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Dental clinic photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Dental clinic photo 2')).toBeInTheDocument()
    expect(screen.getByAltText('Dental clinic photo 3')).toBeInTheDocument()
    expect(screen.getByAltText('Dental clinic photo 4')).toBeInTheDocument()
  })
})
