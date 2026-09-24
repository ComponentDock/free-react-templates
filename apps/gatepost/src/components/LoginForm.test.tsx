import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  const defaultProps = {
    onSubmit: vi.fn(),
    submitted: false,
  }

  it('renders username and password inputs', () => {
    render(<LoginForm {...defaultProps} />)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders the sign in button', () => {
    render(<LoginForm {...defaultProps} />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('calls onSubmit with credentials when form is submitted', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()

    render(<LoginForm onSubmit={onSubmit} submitted={false} />)

    await user.type(screen.getByLabelText(/username/i), 'alice')
    await user.type(screen.getByLabelText(/password/i), 'secret')
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    expect(onSubmit).toHaveBeenCalledWith('alice', 'secret')
  })

  it('does not call onSubmit with empty username', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()

    render(<LoginForm onSubmit={onSubmit} submitted={false} />)

    await user.type(screen.getByLabelText(/password/i), 'secret')
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not call onSubmit with empty password', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()

    render(<LoginForm onSubmit={onSubmit} submitted={false} />)

    await user.type(screen.getByLabelText(/username/i), 'alice')
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('shows success message when submitted is true', () => {
    render(<LoginForm onSubmit={vi.fn()} submitted={true} />)
    expect(screen.getByText('Signed in successfully')).toBeInTheDocument()
  })

  it('hides form when submitted is true', () => {
    render(<LoginForm onSubmit={vi.fn()} submitted={true} />)
    expect(screen.queryByLabelText(/username/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/password/i)).not.toBeInTheDocument()
  })
})
