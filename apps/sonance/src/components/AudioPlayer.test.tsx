import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AudioPlayer } from './AudioPlayer'

describe('AudioPlayer', () => {
  it('renders the track title and artist', () => {
    render(<AudioPlayer />)
    expect(screen.getByText('Understanding Operating Systems')).toBeInTheDocument()
    expect(screen.getByText('Kyle Hawkins')).toBeInTheDocument()
  })

  it('shows the track artwork image', () => {
    render(<AudioPlayer />)
    const img = screen.getByRole('img', { name: /understanding operating systems artwork/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has a play button that toggles to pause', async () => {
    const user = userEvent.setup()
    render(<AudioPlayer />)

    const btn = screen.getByRole('button', { name: /play/i })
    expect(btn).toBeInTheDocument()

    await user.click(btn)
    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /pause/i }))
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument()
  })

  it('has share and download buttons', () => {
    render(<AudioPlayer />)
    expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument()
  })

  it('accepts custom props', () => {
    render(<AudioPlayer trackTitle="Custom Track" artist="Custom Artist" />)
    expect(screen.getByText('Custom Track')).toBeInTheDocument()
    expect(screen.getByText('Custom Artist')).toBeInTheDocument()
  })
})
