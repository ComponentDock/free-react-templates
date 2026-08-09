import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('shows the heading and a play button', () => {
    render(<Video />)

    expect(screen.getByRole('heading', { name: 'View Our Work' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Play the shop tour video' })).toHaveAttribute(
      'href',
      '#video',
    )
  })
})
