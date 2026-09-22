import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders play button', () => {
    render(<Video />)
    expect(screen.getByRole('link', { name: /play video/i })).toBeInTheDocument()
  })

  it('play button opens external link', () => {
    render(<Video />)
    const link = screen.getByRole('link', { name: /play video/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
