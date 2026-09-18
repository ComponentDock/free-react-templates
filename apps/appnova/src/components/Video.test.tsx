import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the play button linking to a video', () => {
    render(<Video />)

    expect(screen.getByRole('link', { name: 'Play video' })).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=ARA0AxrnHdM',
    )
  })
})
