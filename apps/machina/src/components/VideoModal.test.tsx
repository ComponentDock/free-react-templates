import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { VideoModal } from './VideoModal'
import { HERO_VIDEO_IMAGE } from '../data'

describe('VideoModal', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<VideoModal open={false} onClose={vi.fn()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('shows the video poster dialog and closes on Escape', () => {
    const onClose = vi.fn()
    const { container } = render(<VideoModal open onClose={onClose} />)
    expect(screen.getByRole('dialog', { name: 'Company video' })).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute('src', HERO_VIDEO_IMAGE)
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on Escape but ignores other keys', () => {
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)
    fireEvent.keyDown(window, { key: 'a' })
    expect(onClose).not.toHaveBeenCalled()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes via the close button', () => {
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on backdrop click but not on inner panel click', () => {
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)
    const dialog = screen.getByRole('dialog')
    fireEvent.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
    fireEvent.click(dialog.firstChild as HTMLElement)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
