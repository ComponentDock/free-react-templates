import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShowCard } from './ShowCard'
import type { AnimeShow } from '../data'

const mockShow: AnimeShow = {
  title: 'Test Anime',
  episodes: '12 / 12',
  comments: 42,
  views: 5000,
  genres: ['Action', 'Fantasy'],
  image: 'https://picsum.photos/seed/test/400/325',
}

describe('ShowCard', () => {
  it('renders the show title', () => {
    render(<ShowCard show={mockShow} />)
    expect(screen.getByText('Test Anime')).toBeInTheDocument()
  })

  it('renders the episode badge', () => {
    render(<ShowCard show={mockShow} />)
    expect(screen.getByText('12 / 12')).toBeInTheDocument()
  })

  it('renders the comment count', () => {
    render(<ShowCard show={mockShow} />)
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('renders the view count formatted', () => {
    render(<ShowCard show={mockShow} />)
    expect(screen.getByText('5,000')).toBeInTheDocument()
  })

  it('renders genre tag pills', () => {
    render(<ShowCard show={mockShow} />)
    expect(screen.getByText('Action')).toBeInTheDocument()
    expect(screen.getByText('Fantasy')).toBeInTheDocument()
  })

  it('renders the thumbnail image with alt text', () => {
    render(<ShowCard show={mockShow} />)
    expect(screen.getByRole('img', { name: 'Test Anime' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/test/400/325',
    )
  })
})
