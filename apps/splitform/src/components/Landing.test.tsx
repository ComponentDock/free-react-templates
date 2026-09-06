import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Landing } from './Landing'

describe('Landing', () => {
  it('renders the heading, description, and launch modal button', () => {
    render(<Landing onOpenModal={vi.fn()} />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Splitform/)
    expect(screen.getByText(/a dual-panel sign-in/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Launch Modal' })).toBeInTheDocument()
  })

  it('calls onOpenModal when the launch modal button is clicked', async () => {
    const onOpenModal = vi.fn()
    const user = userEvent.setup()
    render(<Landing onOpenModal={onOpenModal} />)

    await user.click(screen.getByRole('button', { name: 'Launch Modal' }))
    expect(onOpenModal).toHaveBeenCalledOnce()
  })
})
