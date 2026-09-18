import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders the section heading', () => {
    render(<Destinations />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Destinations' }),
    ).toBeInTheDocument()
  })

  it('renders 4 destination cards with images and names', () => {
    render(<Destinations />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    const names = ['Bali, Indonesia', 'Santorini, Greece', 'Kyoto, Japan', 'Machu Picchu, Peru']
    for (const name of names) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
