import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the video caption and an accessible play button', () => {
    render(<Video />)

    expect(screen.getByText('Play the video to see more')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play the video' })).toBeInTheDocument()
  })
})
