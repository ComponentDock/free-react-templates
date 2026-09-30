import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubmitButton } from './SubmitButton'

describe('SubmitButton', () => {
  it('renders a button', () => {
    render(<SubmitButton onClick={() => {}} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has circular shape', () => {
    render(<SubmitButton onClick={() => {}} />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('rounded-full')
  })

  it('has brand red background', () => {
    render(<SubmitButton onClick={() => {}} />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-brand')
  })

  it('shows a send icon', () => {
    render(<SubmitButton onClick={() => {}} />)
    const btn = screen.getByRole('button')
    expect(btn.querySelector('svg')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    render(<SubmitButton onClick={handleClick} />)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('has hover shadow effect', () => {
    render(<SubmitButton onClick={() => {}} />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('hover:shadow-brand/40')
  })

  it('has accessible label', () => {
    render(<SubmitButton onClick={() => {}} />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })
})
