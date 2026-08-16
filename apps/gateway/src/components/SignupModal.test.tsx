import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupModal } from './SignupModal'

function renderModal() {
  render(<SignupModal onClose={vi.fn()} />)
  return screen.getByRole('dialog')
}

describe('SignupModal', () => {
  it('renders an accessible dialog with two tone-coded panels', () => {
    const dialog = renderModal()

    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog.getAttribute('aria-label')).toMatch(/create your account/i)

    // Left teal panel: headline + bicycle icon.
    expect(
      screen.getByText(/plan your activities and control your progress online/i),
    ).toBeInTheDocument()
    // Right navy panel: heading.
    expect(screen.getByRole('heading', { name: /create your account/i })).toBeInTheDocument()
  })

  it('renders the three underline signup fields with labels', () => {
    renderModal()

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password')

    expect(screen.getByLabelText(/full name/i)).toHaveAttribute('placeholder', 'John Doe')
    expect(screen.getByLabelText(/email address/i)).toHaveAttribute(
      'placeholder',
      'johndoe@gmail.com',
    )
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('placeholder', 'Password')
  })

  it('renders the agreement checkbox, Sign Up button, and login link', () => {
    renderModal()

    const checkbox = screen.getByRole('checkbox', { name: /i agree all statements/i })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    const signUp = screen.getByRole('button', { name: /^sign up$/i })
    expect(signUp).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /already a member/i })).toBeInTheDocument()
  })

  it('checks the mint agreement checkbox on click', async () => {
    const user = userEvent.setup()
    renderModal()

    const checkbox = screen.getByRole('checkbox', { name: /i agree all statements/i })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('confirms submission by swapping the form for a success message', async () => {
    const user = userEvent.setup()
    renderModal()

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/password/i), 'secret')
    await user.click(screen.getByRole('checkbox', { name: /i agree all statements/i }))
    await user.click(screen.getByRole('button', { name: /^sign up$/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/check your inbox/i)
    // Inputs unmount on success.
    expect(screen.queryByLabelText(/full name/i)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('closes on the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SignupModal onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /^close$/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on Escape and on backdrop click', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SignupModal onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)

    // Backdrop click (the dialog wrapper) closes; inner content is safe.
    await user.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(2)
  })
})
