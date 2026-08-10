import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoPromo } from './VideoPromo'
import { closeVideoLabel, playVideoLabel, videoParagraph, videoTitle, videoUrl } from '../data'

describe('VideoPromo', () => {
  it('renders the play button, heading and caption', () => {
    render(<VideoPromo />)
    expect(screen.getByRole('button', { name: playVideoLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: videoTitle })).toBeInTheDocument()
    expect(screen.getByText(videoParagraph)).toBeInTheDocument()
  })

  it('opens the YouTube modal from the play button and closes via the X button', async () => {
    const user = userEvent.setup()
    render(<VideoPromo />)
    await user.click(screen.getByRole('button', { name: playVideoLabel }))
    const dialog = screen.getByRole('dialog', { name: videoTitle })
    expect(dialog).toBeInTheDocument()
    expect(screen.getByTitle(videoTitle)).toHaveAttribute('src', videoUrl)
    await user.click(screen.getByRole('button', { name: closeVideoLabel }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal on Escape', async () => {
    const user = userEvent.setup()
    render(<VideoPromo />)
    await user.click(screen.getByRole('button', { name: playVideoLabel }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('ignores non-Escape keys while the modal is open', async () => {
    const user = userEvent.setup()
    render(<VideoPromo />)
    await user.click(screen.getByRole('button', { name: playVideoLabel }))
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the modal when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<VideoPromo />)
    await user.click(screen.getByRole('button', { name: playVideoLabel }))
    fireEvent.click(screen.getByRole('dialog'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
