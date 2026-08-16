import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows two tall photo tiles', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('reveals captions with titles and blurbs on hover', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Office Deep Clean' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Home Move-Out' })).toBeInTheDocument()
    expect(screen.getByText(/A complete top-to-bottom office refresh/i)).toBeInTheDocument()
  })

  it('links each tile to the contact section with a yellow arrow', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link', { name: /View the .* project/ })
    expect(links).toHaveLength(2)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
