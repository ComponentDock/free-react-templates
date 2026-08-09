import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the heading and a play button', () => {
    render(<Video />)
    expect(
      screen.getByRole('heading', { name: /Watch the Video How we Work\?/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Play the shop tour video/i })).toBeInTheDocument()
  })
})
