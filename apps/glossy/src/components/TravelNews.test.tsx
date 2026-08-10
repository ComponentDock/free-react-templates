import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TravelNews } from './TravelNews'
import { travelNewsTitle, travelSidePosts, travelVideo, videoButtonLabel } from '../data'

describe('TravelNews', () => {
  it('renders on the light-pink background with the section heading', () => {
    render(<TravelNews />)
    expect(screen.getByRole('region', { name: travelNewsTitle })).toHaveClass('bg-blush')
    expect(screen.getByRole('heading', { level: 3, name: travelNewsTitle })).toBeInTheDocument()
  })

  it('renders the video post with a circular play button and meta counts', () => {
    render(<TravelNews />)
    expect(screen.getByRole('link', { name: videoButtonLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: travelVideo.title })).toBeInTheDocument()
    expect(screen.getByText(travelVideo.comments)).toBeInTheDocument()
    expect(screen.getByText(travelVideo.likes)).toBeInTheDocument()
    expect(screen.getByText(travelVideo.views)).toBeInTheDocument()
  })

  it('renders the side post cards', () => {
    render(<TravelNews />)
    for (const post of travelSidePosts) {
      expect(screen.getByRole('heading', { level: 4, name: post.title })).toBeInTheDocument()
    }
  })
})
