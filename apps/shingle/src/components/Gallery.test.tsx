import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Done Projects' })).toBeInTheDocument()
  })

  it('renders 8 project images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(8)
  })

  it('images have alt text', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('alt', expect.stringContaining('Roofing project'))
    }
  })
})
