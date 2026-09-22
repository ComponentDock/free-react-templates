import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramGallery } from './InstagramGallery'

describe('InstagramGallery', () => {
  it('renders 6 instagram images', () => {
    render(<InstagramGallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    expect(screen.getByLabelText('Instagram photo 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram photo 6')).toBeInTheDocument()
  })
})
