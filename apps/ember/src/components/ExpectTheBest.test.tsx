import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExpectTheBest } from './ExpectTheBest'

describe('ExpectTheBest', () => {
  it('renders the heading', () => {
    render(<ExpectTheBest />)
    expect(screen.getByRole('heading', { name: /Expect The Best/i })).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<ExpectTheBest />)
    expect(screen.getByRole('link', { name: /play restaurant story video/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<ExpectTheBest />)
    expect(screen.getByRole('img', { name: /Chef preparing/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
