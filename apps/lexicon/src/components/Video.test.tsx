import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Video } from './Video'

describe('Video', () => {
  it('renders play button', () => {
    render(<Video />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('opens modal on play click', async () => {
    const user = userEvent.setup()
    render(<Video />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog', { name: 'Video player' })).toBeInTheDocument()
  })

  it('closes modal on close button click', async () => {
    const user = userEvent.setup()
    render(<Video />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes modal on backdrop click', async () => {
    const user = userEvent.setup()
    render(<Video />)
    await user.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'Video player' })
    await user.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
