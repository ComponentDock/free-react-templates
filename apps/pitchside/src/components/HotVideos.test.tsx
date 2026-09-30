import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { videos } from '../data'
import { HotVideos } from './HotVideos'

describe('HotVideos', () => {
  it('renders the section title and video grid with duration chips', () => {
    render(<HotVideos />)
    expect(screen.getByRole('heading', { level: 3, name: 'Hot Videos' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(videos.length)
    for (const video of videos) {
      expect(screen.getByText(video.title)).toBeInTheDocument()
      expect(screen.getByText(video.duration)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: `Play ${video.title}` })).toBeInTheDocument()
    }
  })

  it('opens the modal on play and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<HotVideos />)

    await user.click(screen.getByRole('button', { name: `Play ${videos[0].title}` }))
    const dialog = screen.getByRole('dialog', { name: videos[0].title })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByRole('button', { name: 'Close video' })).toHaveFocus()

    // non-Escape keys do not close the modal
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('dialog', { name: videos[0].title })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal via the close button', async () => {
    const user = userEvent.setup()
    render(<HotVideos />)

    await user.click(screen.getByRole('button', { name: `Play ${videos[1].title}` }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal when clicking the backdrop', async () => {
    const user = userEvent.setup()
    const { container } = render(<HotVideos />)

    await user.click(screen.getByRole('button', { name: `Play ${videos[2].title}` }))
    const dialog = screen.getByRole('dialog')
    fireEvent.click(dialog.parentElement!)
    expect(container.querySelector('[role="dialog"]')).not.toBeInTheDocument()
  })
})
