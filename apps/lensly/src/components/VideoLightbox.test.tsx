import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { VIDEO_URL } from '../data'
import { VideoLightbox } from './VideoLightbox'

describe('VideoLightbox', () => {
  it('renders the dialog with the video iframe', () => {
    render(<VideoLightbox onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: 'Video player' })).toBeInTheDocument()
    expect(screen.getByTitle('Video player')).toHaveAttribute('src', VIDEO_URL)
  })

  it('closes on Escape', () => {
    const onClose = vi.fn()
    render(<VideoLightbox onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores other keys', () => {
    const onClose = vi.fn()
    render(<VideoLightbox onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Enter' })
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closes when the backdrop is clicked but not the inner panel', () => {
    const onClose = vi.fn()
    const { container } = render(<VideoLightbox onClose={onClose} />)
    const backdrop = container.querySelector('[role="dialog"]')
    fireEvent.click(backdrop as HTMLElement)
    expect(onClose).toHaveBeenCalledTimes(1)

    fireEvent.click(container.querySelector('iframe') as HTMLElement)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes via the close button and removes the key listener on unmount', () => {
    const onClose = vi.fn()
    const { unmount } = render(<VideoLightbox onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(onClose).toHaveBeenCalledTimes(1)

    unmount()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
