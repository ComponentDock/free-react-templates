import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PasswordInput } from './PasswordInput'

describe('PasswordInput', () => {
  it('renders a visible label, password-type input, and toggle button', () => {
    render(<PasswordInput id="password" label="Password" toggleName="password" />)
    const input = screen.getByLabelText(/^password$/i)
    expect(input).toHaveAttribute('type', 'password')
    expect(input).toHaveAttribute('placeholder', 'Password')
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('associates the label with the input via htmlFor/id', () => {
    render(
      <PasswordInput
        id="password-confirm"
        label="Confirm Password"
        toggleName="confirm password"
      />,
    )
    expect(screen.getByLabelText(/^confirm password$/i)).toHaveAttribute('id', 'password-confirm')
  })

  it('renders the left lock icon (decorative)', () => {
    const { container } = render(
      <PasswordInput id="password" label="Password" toggleName="password" />,
    )
    const icons = container.querySelectorAll('svg.lucide-lock')
    expect(icons).toHaveLength(1)
    expect(icons[0]).toHaveAttribute('aria-hidden', 'true')
  })

  it('shows the password when the toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<PasswordInput id="password" label="Password" toggleName="password" />)
    await user.click(screen.getByRole('button', { name: /show password/i }))
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()
  })

  it('hides the password when the toggle is clicked twice', async () => {
    const user = userEvent.setup()
    render(<PasswordInput id="password" label="Password" toggleName="password" />)
    await user.click(screen.getByRole('button', { name: /show password/i }))
    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('uses the toggleName fragment in the toggle accessible name', () => {
    render(
      <PasswordInput
        id="password-confirm"
        label="Confirm Password"
        toggleName="confirm password"
      />,
    )
    expect(screen.getByRole('button', { name: /show confirm password/i })).toBeInTheDocument()
  })
})
