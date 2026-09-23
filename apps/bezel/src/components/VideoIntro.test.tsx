import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VideoIntro } from './VideoIntro'

describe('VideoIntro', () => {
  it('renders heading, description, and play button', () => {
    render(<VideoIntro />)
    expect(screen.getByText(/Brand new app to blow your mind/)).toBeInTheDocument()
    expect(screen.getByText(/We have made a life/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('play button is focusable', () => {
    render(<VideoIntro />)
    const playButton = screen.getByRole('button', { name: 'Play video' })
    playButton.focus()
    expect(playButton).toHaveFocus()
  })
})
