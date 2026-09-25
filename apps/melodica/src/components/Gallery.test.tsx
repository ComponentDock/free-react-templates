import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Moments Captured')
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('renders six gallery images', () => {
    render(<Gallery />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders image alt text', () => {
    render(<Gallery />)

    expect(screen.getByAltText('Concert crowd with lights')).toBeInTheDocument()
    expect(screen.getByAltText('Artist performing on stage')).toBeInTheDocument()
    expect(screen.getByAltText('Behind the scenes in studio')).toBeInTheDocument()
    expect(screen.getByAltText('Fans at live show')).toBeInTheDocument()
    expect(screen.getByAltText('Festival atmosphere')).toBeInTheDocument()
    expect(screen.getByAltText('Sound check preparation')).toBeInTheDocument()
  })

  it('renders images with picsum placeholder URLs', () => {
    render(<Gallery />)

    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
