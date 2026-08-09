import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and six captioned image tiles', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { name: 'A Glimpse of Paradise' })).toBeInTheDocument()

    for (const caption of [
      'Resort infinity pool overlooking the ocean',
      'Luxurious hotel suite with ocean view',
      'Pristine private beach at sunset',
      'Spa treatment room with relaxing ambiance',
      'Elegant restaurant with ambient lighting',
      'Grand hotel lobby with modern design',
    ]) {
      expect(screen.getByAltText(caption)).toBeInTheDocument()
    }
  })
})
