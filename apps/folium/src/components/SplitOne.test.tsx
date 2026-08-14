import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SplitOne } from './SplitOne'
import { splitOne } from '../data'

describe('SplitOne', () => {
  it('renders the image with a play button and a heading with two paragraphs', () => {
    const { container } = render(<SplitOne />)
    expect(container.querySelector('button[aria-label="Play video"]')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: splitOne.heading })).toBeInTheDocument()
    for (const paragraph of splitOne.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('opens a video modal on play and closes it', async () => {
    const user = userEvent.setup()
    render(<SplitOne />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'Video player' })
    expect(dialog).toBeInTheDocument()
    expect(dialog.querySelector('iframe')).toHaveAttribute('src', splitOne.videoUrl)
    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the video modal with the Escape key', async () => {
    const user = userEvent.setup()
    render(<SplitOne />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('ignores other keys while the modal is open', async () => {
    const user = userEvent.setup()
    render(<SplitOne />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    await user.keyboard('a')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('keeps the modal open when clicking inside it', async () => {
    const user = userEvent.setup()
    render(<SplitOne />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'Video player' })
    await user.click(dialog.querySelector('.aspect-video')!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the video modal when clicking the backdrop', async () => {
    const user = userEvent.setup()
    render(<SplitOne />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('dialog'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
