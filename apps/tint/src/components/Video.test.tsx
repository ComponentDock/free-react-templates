import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the video play button', () => {
    render(<Video />)
    expect(screen.getByRole('link', { name: /Play video/i })).toBeInTheDocument()
  })

  it('renders the heading text', () => {
    render(<Video />)
    expect(screen.getByRole('heading', { name: /Interior Design Conference/i })).toBeInTheDocument()
  })
})
