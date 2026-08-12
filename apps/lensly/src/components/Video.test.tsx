import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Video } from './Video'

describe('Video', () => {
  it('renders the centered header and the 70px circular play button', () => {
    const { container } = render(<Video />)
    expect(screen.getAllByText('See The Video')).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 2, name: 'See The Video' })).toBeInTheDocument()

    const play = screen.getByRole('button', { name: 'Play video' })
    expect(play.className).toContain('h-[70px]')
    expect(play.className).toContain('w-[70px]')
    expect(play.className).toContain('rounded-full')
    expect(play.className).toContain('border-2')
    expect(screen.getByAltText('Wedding photography highlight video')).toBeInTheDocument()
    expect(container.querySelector('.bg-black\\/20')).not.toBeNull()
  })

  it('opens and closes the video lightbox', async () => {
    const user = userEvent.setup()
    render(<Video />)
    expect(screen.queryByRole('dialog', { name: 'Video player' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog', { name: 'Video player' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'Video player' })).not.toBeInTheDocument()
  })
})
