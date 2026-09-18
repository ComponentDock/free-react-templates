import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders the heading and all three practice area cards', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { name: /Practice Areas/i })).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Drug Offense')).toBeInTheDocument()
    expect(screen.getByText('Assault')).toBeInTheDocument()
  })

  it('renders images for each practice area', () => {
    render(<PracticeAreas />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
