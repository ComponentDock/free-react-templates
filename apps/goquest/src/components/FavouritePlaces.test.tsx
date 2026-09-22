import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FavouritePlaces } from './FavouritePlaces'

describe('FavouritePlaces', () => {
  it('renders the section heading', () => {
    render(<FavouritePlaces />)
    expect(screen.getByText('Favourite Places')).toBeInTheDocument()
    expect(screen.getByText('FEATURED TOURS Packages')).toBeInTheDocument()
  })

  it('renders all six tour cards', () => {
    render(<FavouritePlaces />)
    expect(screen.getByText('Greek Islands Tour')).toBeInTheDocument()
    expect(screen.getByText('Swiss Alps Adventure')).toBeInTheDocument()
    expect(screen.getByText('Tokyo Cultural Journey')).toBeInTheDocument()
    expect(screen.getByText('Bali Beach Retreat')).toBeInTheDocument()
    expect(screen.getByText('Safari Wildlife Quest')).toBeInTheDocument()
    expect(screen.getByText('Patagonia Trek')).toBeInTheDocument()
  })

  it('displays tour prices', () => {
    render(<FavouritePlaces />)
    expect(screen.getByText('$1,299')).toBeInTheDocument()
    expect(screen.getByText('$1,599')).toBeInTheDocument()
    expect(screen.getByText('$2,199')).toBeInTheDocument()
  })

  it('displays tour durations', () => {
    render(<FavouritePlaces />)
    expect(screen.getByText('7 Days')).toBeInTheDocument()
    expect(screen.getByText('10 Days')).toBeInTheDocument()
    expect(screen.getByText('12 Days')).toBeInTheDocument()
  })

  it('displays tour locations', () => {
    render(<FavouritePlaces />)
    expect(screen.getByText('Greece')).toBeInTheDocument()
    expect(screen.getByText('Switzerland')).toBeInTheDocument()
    expect(screen.getByText('Japan')).toBeInTheDocument()
  })

  it('renders tour images', () => {
    render(<FavouritePlaces />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
