import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the video band heading and an accessible play button', () => {
    render(<Video />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Being unique is the preference' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Play video' })).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=ARA0AxrnHdM',
    )
  })
})
