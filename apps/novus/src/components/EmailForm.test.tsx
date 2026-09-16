import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EmailForm } from './EmailForm'

describe('EmailForm', () => {
  it('renders email input and submit button', () => {
    const onSubmit = vi.fn()
    render(<EmailForm onSubmit={onSubmit} />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted with an email', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault())
    render(<EmailForm onSubmit={onSubmit} />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('has required attribute on email input', () => {
    const onSubmit = vi.fn()
    render(<EmailForm onSubmit={onSubmit} />)
    expect(screen.getByLabelText('Email address')).toBeRequired()
  })
})
