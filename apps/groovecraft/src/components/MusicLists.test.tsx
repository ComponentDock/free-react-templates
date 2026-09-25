import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MusicLists } from './MusicLists'

describe('MusicLists', () => {
  it('renders the three column headings', () => {
    render(<MusicLists />)
    expect(screen.getByRole('heading', { name: /this week/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /new hits/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /popular artist/i })).toBeInTheDocument()
  })

  it('renders top tracks', () => {
    render(<MusicLists />)
    const underground = screen.getAllByText('Underground')
    expect(underground.length).toBeGreaterThanOrEqual(1)
    const powerPlay = screen.getAllByText('Power Play')
    expect(powerPlay.length).toBeGreaterThanOrEqual(1)
  })

  it('renders new hits play buttons', () => {
    render(<MusicLists />)
    const playBtns = screen.getAllByRole('button', { name: /play/i })
    expect(playBtns.length).toBeGreaterThanOrEqual(5)
  })

  it('renders popular artists', () => {
    render(<MusicLists />)
    expect(screen.getByText('William Parker')).toBeInTheDocument()
    expect(screen.getByText('DJ Ajay')).toBeInTheDocument()
  })

  it('renders artist thumbnails', () => {
    render(<MusicLists />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(15)
  })
})
