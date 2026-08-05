import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders a play button with the accessible label and video link', () => {
    render(<Video />)

    const play = screen.getByRole('link', { name: 'Play video' })
    expect(play).toHaveAttribute('href', 'https://www.youtube.com/watch?v=up68UAfH0d0')
  })
})
