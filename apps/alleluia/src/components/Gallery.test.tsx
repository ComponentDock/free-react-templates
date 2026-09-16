import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Gallery')
  })

  it('renders 9 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(9)
  })

  it('each image links to full size', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(9)
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('images have correct alt text', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Church gallery image 1')).toBeInTheDocument()
    expect(screen.getByAltText('Church gallery image 9')).toBeInTheDocument()
  })
})
