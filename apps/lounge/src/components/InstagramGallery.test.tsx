import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramGallery } from './InstagramGallery'

describe('InstagramGallery', () => {
  it('renders section heading', () => {
    render(<InstagramGallery />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  it('renders instagram images', () => {
    render(<InstagramGallery />)
    const images = screen.getAllByAltText(/Instagram/)
    expect(images).toHaveLength(5)
  })
})
