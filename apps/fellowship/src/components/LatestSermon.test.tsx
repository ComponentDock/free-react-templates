import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LatestSermon } from './LatestSermon'

describe('LatestSermon', () => {
  it('renders sermon info', () => {
    render(<LatestSermon />)
    expect(screen.getByText('Latest Sermon:')).toBeInTheDocument()
    expect(screen.getByText('Rebuilding The Walls')).toBeInTheDocument()
    expect(screen.getByText(/Posted on June 28, 2018, Pastor John Smith/)).toBeInTheDocument()
  })

  it('renders media buttons', () => {
    render(<LatestSermon />)
    expect(screen.getByLabelText('Watch video')).toBeInTheDocument()
    expect(screen.getByLabelText('Listen audio')).toBeInTheDocument()
    expect(screen.getByLabelText('Download')).toBeInTheDocument()
    expect(screen.getByLabelText('Read transcript')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<LatestSermon />)
    expect(screen.getByLabelText('Latest sermon')).toBeInTheDocument()
  })
})
