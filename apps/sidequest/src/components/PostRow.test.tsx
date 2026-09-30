import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PostRow from './PostRow'

describe('PostRow', () => {
  it('renders title and date', () => {
    render(<PostRow title="Test Post Title" date="Dec 17, 2019" avatarSeed="test-seed" />)
    expect(screen.getAllByText('Test Post Title')).toHaveLength(2)
    expect(screen.getAllByText('Posted: Dec 17, 2019')).toHaveLength(2)
  })

  it('renders avatar image with correct seed', () => {
    render(<PostRow title="Test Post" date="Jan 1, 2020" avatarSeed="my-seed" />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/my-seed/60/60')
  })
})
