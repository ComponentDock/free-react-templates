import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepInput } from './StepInput'

describe('StepInput', () => {
  it('renders an input with the given placeholder', () => {
    render(<StepInput placeholder="Username here" value="" onChange={vi.fn()} onSubmit={vi.fn()} />)

    expect(screen.getByPlaceholderText('Username here')).toBeInTheDocument()
  })

  it('renders the next step button by default', () => {
    render(<StepInput placeholder="Username here" value="" onChange={vi.fn()} onSubmit={vi.fn()} />)

    expect(screen.getByRole('button', { name: /next step/i })).toBeInTheDocument()
  })

  it('renders Confirm button when isLastStep is true', () => {
    render(
      <StepInput
        placeholder="Password"
        value=""
        onChange={vi.fn()}
        onSubmit={vi.fn()}
        isLastStep
      />,
    )

    expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /next step/i })).not.toBeInTheDocument()
  })

  it('calls onChange when text is typed', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(
      <StepInput placeholder="Username here" value="" onChange={onChange} onSubmit={vi.fn()} />,
    )

    await user.type(screen.getByPlaceholderText('Username here'), 'j')
    expect(onChange).toHaveBeenCalledWith('j')
  })

  it('calls onSubmit when button is clicked', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(
      <StepInput placeholder="Username here" value="" onChange={vi.fn()} onSubmit={onSubmit} />,
    )

    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('uses password type when type is password', () => {
    render(
      <StepInput
        placeholder="Password"
        type="password"
        value=""
        onChange={vi.fn()}
        onSubmit={vi.fn()}
      />,
    )

    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password')
  })

  it('uses email type when type is email', () => {
    render(
      <StepInput
        placeholder="ex: example@email.com"
        type="email"
        value=""
        onChange={vi.fn()}
        onSubmit={vi.fn()}
      />,
    )

    expect(screen.getByPlaceholderText('ex: example@email.com')).toHaveAttribute('type', 'email')
  })

  it('displays the current value', () => {
    render(
      <StepInput
        placeholder="Username here"
        value="john_doe"
        onChange={vi.fn()}
        onSubmit={vi.fn()}
      />,
    )

    expect(screen.getByPlaceholderText('Username here')).toHaveValue('john_doe')
  })

  it('has required attribute on input', () => {
    render(<StepInput placeholder="Username here" value="" onChange={vi.fn()} onSubmit={vi.fn()} />)

    expect(screen.getByPlaceholderText('Username here')).toBeRequired()
  })
})
