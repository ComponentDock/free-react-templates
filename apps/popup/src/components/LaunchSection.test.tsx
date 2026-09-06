import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LaunchSection } from './LaunchSection'

describe('LaunchSection', () => {
  it('renders the heading', () => {
    const onOpenModal = vi.fn()
    render(<LaunchSection onOpenModal={onOpenModal} />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Popup')
  })

  it('renders the description text', () => {
    const onOpenModal = vi.fn()
    render(<LaunchSection onOpenModal={onOpenModal} />)

    expect(screen.getByText(/sharing messages/i)).toBeInTheDocument()
  })

  it('renders the Show Message button', () => {
    const onOpenModal = vi.fn()
    render(<LaunchSection onOpenModal={onOpenModal} />)

    expect(screen.getByRole('button', { name: /show message/i })).toBeInTheDocument()
  })

  it('calls onOpenModal when the button is clicked', async () => {
    const onOpenModal = vi.fn()
    const user = userEvent.setup()
    render(<LaunchSection onOpenModal={onOpenModal} />)

    await user.click(screen.getByRole('button', { name: /show message/i }))
    expect(onOpenModal).toHaveBeenCalledTimes(1)
  })
})
