import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoCallout } from './VideoCallout'

describe('VideoCallout', () => {
  it('renders the heading', () => {
    render(<VideoCallout />)
    expect(screen.getByRole('heading', { name: /New Features/i })).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoCallout />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<VideoCallout />)
    expect(screen.getByText(/Discover how our latest/)).toBeInTheDocument()
  })
})
