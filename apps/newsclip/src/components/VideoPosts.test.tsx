import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoPosts } from './VideoPosts'
import { videoPosts } from '../data'

describe('VideoPosts', () => {
  it('renders the Video Posts heading', () => {
    render(<VideoPosts />)
    expect(screen.getByText('Video Posts')).toBeInTheDocument()
  })

  it('renders all video post titles', () => {
    render(<VideoPosts />)
    for (const post of videoPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders duration labels for each video', () => {
    render(<VideoPosts />)
    for (const post of videoPosts) {
      expect(screen.getByText(post.duration)).toBeInTheDocument()
    }
  })

  it('renders category labels for each video', () => {
    render(<VideoPosts />)
    // Some categories appear multiple times (e.g. Entertainment), so use getAllByText
    for (const post of videoPosts) {
      expect(screen.getAllByText(post.category).length).toBeGreaterThanOrEqual(1)
    }
  })
})
