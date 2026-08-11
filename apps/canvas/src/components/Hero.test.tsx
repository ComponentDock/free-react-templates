import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HERO_HEADLINE, HERO_LEAD, VIMEO_VIDEO_URL } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the black hero with headline, lead and play button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: HERO_HEADLINE })).toBeInTheDocument()
    expect(screen.getByText(HERO_LEAD)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('opens the Vimeo lightbox on play and closes it', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.queryByRole('dialog', { name: 'Video player' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog', { name: 'Video player' })).toBeInTheDocument()
    expect(screen.getByTitle('Video player')).toHaveAttribute('src', VIMEO_VIDEO_URL)

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'Video player' })).not.toBeInTheDocument()
  })
})
