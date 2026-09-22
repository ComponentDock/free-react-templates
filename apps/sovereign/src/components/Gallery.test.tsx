import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument()
  })

  it('renders all 8 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(8)
  })

  it('has alt text for gallery images', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Hotel gallery image 1')).toBeInTheDocument()
    expect(screen.getByAltText('Hotel gallery image 8')).toBeInTheDocument()
  })
})
