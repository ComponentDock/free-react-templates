import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'A Glimpse of Paradise' })).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Resort')).toBeInTheDocument()
  })

  it('renders six gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('alt', 'Gallery photo 1')
    expect(images[5]).toHaveAttribute('alt', 'Gallery photo 6')
  })

  it('uses picsum.photos for all images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
