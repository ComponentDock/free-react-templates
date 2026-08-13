import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrideGroom } from './BrideGroom'

describe('BrideGroom', () => {
  it('shows the section heading and both portrait cards', () => {
    render(<BrideGroom />)
    expect(screen.getByRole('heading', { name: 'Bride & Groom' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Francisco Fredricksen' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Laura Moorey' })).toBeInTheDocument()
  })

  it('renders a photo and copy for each portrait', () => {
    render(<BrideGroom />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
    expect(screen.getAllByRole('paragraph')).toHaveLength(2)
  })
})
