import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section title', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /image gallery/i })).toBeInTheDocument()
  })

  it('renders 6 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('uses correct image seeds', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    images.forEach((img, i) => {
      expect(img).toHaveAttribute('src', expect.stringContaining(`cabspot-g${i + 1}`))
    })
  })
})
