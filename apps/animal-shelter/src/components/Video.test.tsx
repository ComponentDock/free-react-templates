import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the video teaser with a play button and caption', () => {
    render(<Video />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Watch this video how they live here',
    )
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
