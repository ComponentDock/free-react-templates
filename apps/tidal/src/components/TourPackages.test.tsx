import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TourPackages } from './TourPackages'

describe('TourPackages', () => {
  it('renders the section heading', () => {
    render(<TourPackages />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Tour Packages' })).toBeInTheDocument()
  })

  it('renders all six tour package cards', () => {
    render(<TourPackages />)

    const titles = [
      'Philippine Island Adventure',
      'Canadian Rockies Explorer',
      'Thai Temple Trail',
      'Australian Outback Safari',
      'Greek Island Hopping',
      'Mediterranean Coast Cruise',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows prices for each package', () => {
    render(<TourPackages />)
    const prices = screen.getAllByText('$550')
    expect(prices).toHaveLength(6)
  })

  it('renders tour images with picsum URLs', () => {
    render(<TourPackages />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
