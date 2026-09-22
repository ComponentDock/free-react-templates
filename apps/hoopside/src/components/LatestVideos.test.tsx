import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestVideos } from './LatestVideos'

describe('LatestVideos', () => {
  it('renders the section heading', () => {
    render(<LatestVideos />)
    expect(screen.getByText('Latest Videos')).toBeInTheDocument()
  })

  it('renders video titles', () => {
    render(<LatestVideos />)
    expect(screen.getByText(/Top 10 Plays/)).toBeInTheDocument()
    expect(screen.getByText(/Game Day Recap/)).toBeInTheDocument()
    expect(screen.getByText(/Player Interview/)).toBeInTheDocument()
  })

  it('renders video thumbnails', () => {
    render(<LatestVideos />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
