import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LaunchSection } from './LaunchSection'

describe('LaunchSection', () => {
  it('renders the heading and launch button', () => {
    const onOpen = vi.fn()
    render(<LaunchSection onOpenModal={onOpen} />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/CouponModal/i)
    expect(screen.getByRole('button', { name: /launch/i })).toBeInTheDocument()
  })

  it('calls onOpenModal when the launch button is clicked', async () => {
    const user = userEvent.setup()
    const onOpen = vi.fn()
    render(<LaunchSection onOpenModal={onOpen} />)

    await user.click(screen.getByRole('button', { name: /launch/i }))
    expect(onOpen).toHaveBeenCalledTimes(1)
  })
})
