import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { VideoModal } from './VideoModal'

describe('VideoModal', () => {
  it('renders nothing when closed', () => {
    render(<VideoModal open={false} onClose={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the embedded video when open', () => {
    render(<VideoModal open onClose={() => {}} />)
    expect(screen.getByRole('dialog', { name: 'Demo video' })).toBeInTheDocument()
    expect(screen.getByTitle('Sooth spa demo video')).toBeInTheDocument()
  })

  it('closes on Escape but ignores other keys', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)
    await user.keyboard('a')
    expect(onClose).not.toHaveBeenCalled()
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when the backdrop is clicked but not the inner content', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)
    await user.click(screen.getByTitle('Sooth spa demo video'))
    expect(onClose).not.toHaveBeenCalled()
    await user.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes via the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
