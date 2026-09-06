import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LaunchSection } from './LaunchSection'

describe('LaunchSection', () => {
  it('renders heading and launch button', () => {
    const onOpenModal = vi.fn()
    render(<LaunchSection onOpenModal={onOpenModal} />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ModalShift')
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('calls onOpenModal when launch button is clicked', async () => {
    const user = userEvent.setup()
    const onOpenModal = vi.fn()
    render(<LaunchSection onOpenModal={onOpenModal} />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(onOpenModal).toHaveBeenCalledTimes(1)
  })

  it('displays description text', () => {
    const onOpenModal = vi.fn()
    render(<LaunchSection onOpenModal={onOpenModal} />)

    expect(screen.getByText(/login form popup with a clean design/i)).toBeInTheDocument()
  })
})
