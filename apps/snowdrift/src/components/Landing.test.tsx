import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Landing } from './Landing'

describe('Landing', () => {
  it('renders the heading, description, and launch button', () => {
    render(<Landing onOpenModal={vi.fn()} />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Snowdrift/)
    expect(screen.getByText(/winter sale modal popup/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Launch Sale' })).toBeInTheDocument()
  })

  it('calls onOpenModal when the launch button is clicked', async () => {
    const onOpenModal = vi.fn()
    const user = userEvent.setup()
    render(<Landing onOpenModal={onOpenModal} />)

    await user.click(screen.getByRole('button', { name: 'Launch Sale' }))
    expect(onOpenModal).toHaveBeenCalledOnce()
  })
})
