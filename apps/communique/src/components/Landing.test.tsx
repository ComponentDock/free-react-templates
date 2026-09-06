import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Landing } from './Landing'

describe('Landing', () => {
  it('renders the heading and description', () => {
    render(<Landing onOpenModal={vi.fn()} />)
    expect(screen.getByText('Communique')).toBeInTheDocument()
    expect(screen.getByText(/Book your free consultation/)).toBeInTheDocument()
  })

  it('renders the Launch Modal button', () => {
    render(<Landing onOpenModal={vi.fn()} />)
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('calls onOpenModal when Launch Modal is clicked', async () => {
    const user = userEvent.setup()
    const onOpenModal = vi.fn()
    render(<Landing onOpenModal={onOpenModal} />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(onOpenModal).toHaveBeenCalledTimes(1)
  })

  it('renders the Free Consultation badge', () => {
    render(<Landing onOpenModal={vi.fn()} />)
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
  })
})
