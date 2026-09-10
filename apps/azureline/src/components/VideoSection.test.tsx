import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the video thumbnail image', () => {
    render(<VideoSection />)
    expect(screen.getByAltText('Video thumbnail')).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders the heading with bold emphasis', () => {
    render(<VideoSection />)
    expect(screen.getByText(/Great/)).toBeInTheDocument()
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    expect(screen.getByText('usability')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<VideoSection />)
    expect(screen.getByText(/Crafting interfaces/)).toBeInTheDocument()
  })
})
