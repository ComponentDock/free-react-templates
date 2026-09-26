import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2, name: 'My Recent Photos' })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Gallery />)
    expect(screen.getByText(/A curated selection of moments/)).toBeInTheDocument()
  })

  it('renders all 16 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(16)
  })

  it('each image has alt text and lazy loading', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    images.forEach((img, i) => {
      expect(img).toHaveAttribute('alt', `Gallery photo ${i + 1}`)
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })

  it('has the gallery section id', () => {
    const { container } = render(<Gallery />)
    expect(container.querySelector('#gallery')).toBeInTheDocument()
  })
})
