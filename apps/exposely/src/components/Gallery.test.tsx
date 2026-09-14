import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the photography quote', () => {
    render(<Gallery />)
    expect(screen.getByText(/in photography there is a reality/i)).toBeInTheDocument()
  })

  it('renders all 7 portfolio items', () => {
    render(<Gallery />)
    const grid = screen.getByRole('list', { name: /portfolio/i })
    const items = within(grid).getAllByRole('listitem')
    expect(items).toHaveLength(7)
  })

  it('renders titles for portfolio items', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 3, name: 'Reality' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Light & Shadow' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Urban Stories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Horizons' })).toBeInTheDocument()
  })

  it('renders images with picsum.photos src', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img.getAttribute('src')).toContain('picsum.photos')
    })
  })

  it('renders portfolio item dates', () => {
    render(<Gallery />)
    expect(screen.getByText('January 2024')).toBeInTheDocument()
    expect(screen.getByText('February 2024')).toBeInTheDocument()
  })
})
