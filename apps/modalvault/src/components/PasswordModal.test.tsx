import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PasswordModal } from './PasswordModal'

describe('PasswordModal', () => {
  it('does not render when closed', () => {
    render(<PasswordModal open={false} onClose={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the dialog when open', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)
    expect(screen.getByRole('dialog', { name: /password-protected modal/i })).toBeInTheDocument()
  })

  it('renders the lock icon container', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)
    const dialog = screen.getByRole('dialog')
    // Lock icon is inside the circular container
    expect(dialog.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the protection label', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)
    expect(screen.getByText('This link is password protected')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)
    expect(screen.getByText(/enter the password to access/i)).toBeInTheDocument()
  })

  it('renders the password input with placeholder', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)
    const input = screen.getByPlaceholderText('Enter password')
    expect(input).toHaveAttribute('type', 'password')
    expect(input).toHaveAttribute('placeholder', 'Enter password')
  })

  it('renders the submit button', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders the close button', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    let closed = false
    const user = userEvent.setup()
    render(
      <PasswordModal
        open={true}
        onClose={() => {
          closed = true
        }}
      />,
    )

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(closed).toBe(true)
  })

  it('calls onClose when the backdrop is clicked', async () => {
    let closed = false
    const user = userEvent.setup()
    render(
      <PasswordModal
        open={true}
        onClose={() => {
          closed = true
        }}
      />,
    )

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)

    expect(closed).toBe(true)
  })

  it('calls onClose when Escape is pressed', async () => {
    let closed = false
    const user = userEvent.setup()
    render(
      <PasswordModal
        open={true}
        onClose={() => {
          closed = true
        }}
      />,
    )

    await user.keyboard('{Escape}')
    expect(closed).toBe(true)
  })

  it('does not close when clicking inside the modal content', async () => {
    let closed = false
    const user = userEvent.setup()
    render(
      <PasswordModal
        open={true}
        onClose={() => {
          closed = true
        }}
      />,
    )

    await user.click(screen.getByPlaceholderText('Enter password'))
    expect(closed).toBe(false)
  })

  it('prevents default on form submit', async () => {
    const user = userEvent.setup()
    render(<PasswordModal open={true} onClose={() => {}} />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    // Form submit should not cause a page reload — dialog stays open
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('traps focus when Tab is pressed on the last focusable element', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)

    // Focus the submit button (last focusable element)
    const submitButton = screen.getByRole('button', { name: /submit/i })
    submitButton.focus()

    // Dispatch Tab keydown on the submit button (bubbles to document handler)
    submitButton.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      }),
    )

    // Focus should have wrapped to the first focusable element (close button)
    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toHaveFocus()
  })

  it('traps focus when Shift+Tab is pressed on the first focusable element', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)

    // Focus the close button (first focusable element)
    const closeButton = screen.getByRole('button', { name: /close/i })
    closeButton.focus()

    // Dispatch Shift+Tab keydown on the close button (bubbles to document handler)
    closeButton.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      }),
    )

    // Focus should have wrapped to the last focusable element (submit button)
    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toHaveFocus()
  })

  it('does not trap focus when a non-Tab non-Escape key is pressed', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)

    const input = screen.getByPlaceholderText('Enter password')
    input.focus()

    // Dispatch a regular keydown (e.g. 'a')
    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'a',
        bubbles: true,
        cancelable: true,
      }),
    )

    // Focus should remain on the input
    expect(input).toHaveFocus()
  })

  it('does not wrap focus when Tab is pressed on a middle element', () => {
    render(<PasswordModal open={true} onClose={() => {}} />)

    // Focus the password input (middle focusable element)
    const input = screen.getByPlaceholderText('Enter password')
    input.focus()

    // Dispatch Tab keydown on the input (not first, not last)
    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      }),
    )

    // Focus should not have wrapped — neither first nor last check applies
    expect(input).toHaveFocus()
  })
})
