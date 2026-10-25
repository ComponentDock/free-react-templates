import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { VideoModal } from '../components/VideoModal'

describe('VideoModal', () => {
  it('renders nothing while closed', () => {
    render(<VideoModal open={false} onClose={() => {}} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('mounts the player only once open, and focuses its close control', () => {
    render(<VideoModal open onClose={() => {}} />)

    expect(screen.getByRole('dialog', { name: 'Veranda tour' })).toBeInTheDocument()
    expect(screen.getByTitle('Veranda tour')).toHaveAttribute(
      'src',
      expect.stringContaining('autoplay=1'),
    )
    expect(screen.getByRole('button', { name: 'Close video' })).toHaveFocus()
  })

  it('closes on the control, on Escape and on a backdrop click', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(onClose).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(document, { key: 'a' })
    expect(onClose).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.click(screen.getByTestId('video-backdrop'))
    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('keeps a click inside the dialog from closing it', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)

    await user.click(screen.getByTitle('Veranda tour'))
    expect(onClose).not.toHaveBeenCalled()
  })
})
