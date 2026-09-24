import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestPosts } from './LatestPosts'

describe('LatestPosts', () => {
  it('renders the section heading', () => {
    render(<LatestPosts />)
    expect(screen.getByRole('heading', { level: 2, name: /latest posts/i })).toBeInTheDocument()
  })

  it('renders the featured post', () => {
    render(<LatestPosts />)
    expect(screen.getByText(/Building On Consumer Preferences/)).toBeInTheDocument()
  })

  it('renders side posts with badges', () => {
    render(<LatestPosts />)
    expect(screen.getAllByText('Trending').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Technology').length).toBeGreaterThanOrEqual(1)
  })

  it('renders side post excerpts', () => {
    render(<LatestPosts />)
    expect(screen.getByText(/Passion for their subjects/)).toBeInTheDocument()
    expect(screen.getByText(/How remote work reshaped/)).toBeInTheDocument()
  })

  it('renders images with picsum placeholder URLs', () => {
    render(<LatestPosts />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.getAttribute('src')).toMatch(/picsum\.photos\/seed\/headliner-/)
    }
  })
})
