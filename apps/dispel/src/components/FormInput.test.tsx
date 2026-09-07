import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormInput } from './FormInput'

describe('FormInput', () => {
  const defaultProps = {
    label: 'Email',
    id: 'email',
    value: '',
    onChange: vi.fn(),
  }

  it('renders with label and input', () => {
    render(<FormInput {...defaultProps} />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('shows required asterisk when required', () => {
    render(<FormInput {...defaultProps} required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('does not show asterisk when not required', () => {
    render(<FormInput {...defaultProps} />)
    expect(screen.queryByText('*')).not.toBeInTheDocument()
  })

  it('calls onChange with new value', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<FormInput {...defaultProps} onChange={onChange} />)
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onBlur when field loses focus', async () => {
    const user = userEvent.setup()
    const onBlur = vi.fn()
    render(
      <div>
        <FormInput {...defaultProps} onBlur={onBlur} />
        <button type="button">next</button>
      </div>,
    )
    await user.click(screen.getByLabelText(/email/i))
    await user.tab()
    expect(onBlur).toHaveBeenCalled()
  })

  it('shows error icon when error is true', () => {
    render(<FormInput {...defaultProps} error />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('does not show error icon when error is false', () => {
    render(<FormInput {...defaultProps} error={false} />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('applies error border class when error', () => {
    render(<FormInput {...defaultProps} error />)
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveClass('border-error')
  })

  it('applies normal border class when no error', () => {
    render(<FormInput {...defaultProps} error={false} />)
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveClass('border-line')
  })

  it('supports different input types', () => {
    render(<FormInput {...defaultProps} type="password" id="pwd" label="Password" />)
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password')
  })

  it('sets aria-required when required', () => {
    render(<FormInput {...defaultProps} required />)
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-required', 'true')
  })

  it('sets aria-invalid when error', () => {
    render(<FormInput {...defaultProps} error />)
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-invalid', 'true')
  })
})
