import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Player } from './Player'

describe('Player', () => {
  it('renders the track info and playback controls', () => {
    render(<Player />)

    expect(screen.getByText('Sweet But Psycho')).toBeInTheDocument()
    expect(screen.getByText('Ava Max')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous track' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next track' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shuffle' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Volume' })).toBeInTheDocument()
  })

  it('shows the album art and latest album label', () => {
    render(<Player />)

    const img = screen.getByRole('img', { name: /latest album artwork/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))

    expect(screen.getByText('Latest album')).toBeInTheDocument()
    expect(screen.getByText('WHEN WE ALL FALL ASLEEP')).toBeInTheDocument()
  })

  it('displays progress bar timestamps', () => {
    render(<Player />)

    expect(screen.getByText('1:24')).toBeInTheDocument()
    expect(screen.getByText('3:42')).toBeInTheDocument()
  })
})
