import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoGallery } from './VideoGallery'

describe('VideoGallery', () => {
  it('renders 4 video thumbnails', () => {
    render(<VideoGallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('renders play buttons for each video', () => {
    render(<VideoGallery />)
    expect(screen.getByRole('button', { name: 'Play Summer Concert 2024' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play Acoustic Sessions' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Play Rock Festival Highlights' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play Behind the Scenes' })).toBeInTheDocument()
  })

  it('shows event labels and titles', () => {
    render(<VideoGallery />)
    expect(screen.getByText('Music Event')).toBeInTheDocument()
    expect(screen.getByText('Summer Concert 2024')).toBeInTheDocument()
    expect(screen.getByText('Live Show')).toBeInTheDocument()
    expect(screen.getByText('Acoustic Sessions')).toBeInTheDocument()
  })

  it('uses picsum.photos for images', () => {
    render(<VideoGallery />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.getAttribute('src')).toContain('picsum.photos')
    }
  })
})
