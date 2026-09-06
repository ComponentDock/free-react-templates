import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LaunchSection } from './LaunchSection'

describe('LaunchSection', () => {
  it('renders the heading', () => {
    render(<LaunchSection onOpenModal={vi.fn()} />)
    expect(screen.getByText('Postern')).toBeInTheDocument()
  })

  it('renders the launch button', () => {
    render(<LaunchSection onOpenModal={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Launch Postern' })).toBeInTheDocument()
  })

  it('calls onOpenModal when the button is clicked', async () => {
    const user = userEvent.setup()
    const onOpenModal = vi.fn()
    render(<LaunchSection onOpenModal={onOpenModal} />)
    await user.click(screen.getByRole('button', { name: 'Launch Postern' }))
    expect(onOpenModal).toHaveBeenCalledTimes(1)
  })
})
