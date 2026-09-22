import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2, name: /our gallery/i })).toBeInTheDocument()
  })

  it('renders 6 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('has the gallery section landmark', () => {
    render(<Gallery />)
    expect(screen.getByRole('region', { name: /photo gallery/i })).toBeInTheDocument()
  })
})
