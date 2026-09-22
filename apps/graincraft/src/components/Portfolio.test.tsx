import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and project images', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('renders alt text for each project', () => {
    render(<Portfolio />)
    expect(screen.getByAltText('Custom hardwood kitchen cabinetry')).toBeInTheDocument()
    expect(screen.getByAltText('Hand-carved staircase banister')).toBeInTheDocument()
  })
})
