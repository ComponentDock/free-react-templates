import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SuccessScreen } from './SuccessScreen'

describe('SuccessScreen', () => {
  it('renders confirmation message', () => {
    render(<SuccessScreen onStartOver={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /booking confirmed/i })).toBeInTheDocument()
  })

  it('renders confirmation description', () => {
    render(<SuccessScreen onStartOver={vi.fn()} />)
    expect(screen.getByText(/successfully booked/i)).toBeInTheDocument()
  })

  it('renders Start Over button', () => {
    render(<SuccessScreen onStartOver={vi.fn()} />)
    expect(screen.getByRole('button', { name: /start over/i })).toBeInTheDocument()
  })

  it('calls onStartOver when button is clicked', async () => {
    const onStartOver = vi.fn()
    render(<SuccessScreen onStartOver={onStartOver} />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /start over/i }))
    expect(onStartOver).toHaveBeenCalledOnce()
  })
})
