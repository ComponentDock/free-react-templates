import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedAlbum } from './FeaturedAlbum'

describe('FeaturedAlbum', () => {
  it('renders section heading', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByText('Featured Album')).toBeInTheDocument()
  })

  it('renders Events subtitle', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders artist name', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByText('Maria Smith')).toBeInTheDocument()
  })

  it('renders track title', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByText('Love is all Around')).toBeInTheDocument()
  })

  it('renders buy on iTunes link', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByText('Buy it on iTunes')).toBeInTheDocument()
  })

  it('has album artwork image', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByAltText('Featured album artwork')).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<FeaturedAlbum />)
    const playBtn = screen.getByRole('button', { name: /play/i })
    await user.click(playBtn)
    expect(playBtn).toBeInTheDocument()
  })
})
