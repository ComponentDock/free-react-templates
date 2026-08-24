import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoGallery } from './VideoGallery'

describe('VideoGallery', () => {
  it('renders the section title', () => {
    render(<VideoGallery />)
    expect(screen.getByText('Video Gallery')).toBeInTheDocument()
  })

  it('renders the feature video headline', () => {
    render(<VideoGallery />)
    expect(
      screen.getByText("The world's first fitness influencer was a Victorian strongman"),
    ).toBeInTheDocument()
  })

  it('renders three rail stories', () => {
    render(<VideoGallery />)
    expect(screen.getByText('Needs to Rename the James Webb Space Telescope')).toBeInTheDocument()
    expect(
      screen.getByText('These striking photos capture the future of human flight'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Exploring the origins of punk across America with Kid Karate'),
    ).toBeInTheDocument()
  })

  it('renders with dark background', () => {
    render(<VideoGallery />)
    const section = screen.getByText('Video Gallery').closest('section')
    expect(section).toHaveClass('bg-ink')
  })

  it('renders the pulsing play button', () => {
    render(<VideoGallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })

  it('renders white text on dark background', () => {
    render(<VideoGallery />)
    const heading = screen.getByText('Video Gallery')
    expect(heading).toHaveClass('text-white')
  })
})
