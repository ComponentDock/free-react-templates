import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoAbout } from './VideoAbout'

describe('VideoAbout', () => {
  it('renders heading and text', () => {
    render(<VideoAbout />)
    expect(screen.getByText('We Telecast our Coffee Making Live')).toBeInTheDocument()
    expect(screen.getByText('Tutorial for beginner')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<VideoAbout />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<VideoAbout />)
    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
  })
})
