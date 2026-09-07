import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonRow } from './ButtonRow'

describe('ButtonRow', () => {
  const defaultProps = {
    totalSteps: 3,
    onPrev: vi.fn(),
    onNext: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders Forward button on step 1', () => {
    render(<ButtonRow {...defaultProps} step={0} />)
    expect(screen.getByRole('button', { name: /next step/i })).toBeInTheDocument()
  })

  it('hides Backward on step 1 (disabled)', () => {
    render(<ButtonRow {...defaultProps} step={0} />)
    const backward = screen.getByRole('button', { name: /previous step/i })
    expect(backward).toBeDisabled()
  })

  it('shows Backward on step 2', () => {
    render(<ButtonRow {...defaultProps} step={1} />)
    expect(screen.getByRole('button', { name: /previous step/i })).not.toBeDisabled()
  })

  it('shows Submit on the last step', () => {
    render(<ButtonRow {...defaultProps} step={2} />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /next step/i })).not.toBeInTheDocument()
  })

  it('calls onNext when Forward is clicked', async () => {
    const onNext = vi.fn()
    const user = userEvent.setup()
    render(<ButtonRow {...defaultProps} step={0} onNext={onNext} />)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrev when Backward is clicked', async () => {
    const onPrev = vi.fn()
    const user = userEvent.setup()
    render(<ButtonRow {...defaultProps} step={1} onPrev={onPrev} />)
    await user.click(screen.getByRole('button', { name: /previous step/i }))
    expect(onPrev).toHaveBeenCalledTimes(1)
  })
})
