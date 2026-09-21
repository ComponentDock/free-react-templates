import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { describe, it, expect } from 'vitest'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Gallery')
  })

  it('renders 4 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('each image has an alt description', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })
})
