import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EmailForm } from './EmailForm'

describe('EmailForm', () => {
  it('renders email input and submit button', () => {
    const onSubmit = vi.fn()
    render(<EmailForm onSubmit={onSubmit} />)

    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /notify us/i })).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn((e) => e.preventDefault())
    render(<EmailForm onSubmit={onSubmit} />)

    await user.type(screen.getByRole('textbox', { name: /email/i }), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /notify us/i }))

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('has placeholder text in the input', () => {
    const onSubmit = vi.fn()
    render(<EmailForm onSubmit={onSubmit} />)

    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })
})
