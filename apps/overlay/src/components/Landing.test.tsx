import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Landing } from './Landing'

describe('Landing', () => {
  it('renders the heading, description, and sign-in button', () => {
    render(<Landing onOpenModal={vi.fn()} />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Overlay/)
    expect(screen.getByText(/a clean sign-in popup/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('calls onOpenModal when the sign-in button is clicked', async () => {
    const onOpenModal = vi.fn()
    const user = userEvent.setup()
    render(<Landing onOpenModal={onOpenModal} />)

    await user.click(screen.getByRole('button', { name: 'Sign In' }))
    expect(onOpenModal).toHaveBeenCalledOnce()
  })
})
