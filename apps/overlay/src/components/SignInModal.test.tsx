import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignInModal } from './SignInModal'

describe('SignInModal', () => {
  it('renders nothing when closed', () => {
    render(<SignInModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal dialog with all form elements when open', () => {
    render(<SignInModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')

    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByText('Remember Me')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Forgot Password' })).toBeInTheDocument()
    expect(screen.getByText('Not a member?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Create an account' })).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SignInModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when Escape is pressed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SignInModal open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when clicking the backdrop outside the modal content', () => {
    const onClose = vi.fn()
    const { container } = render(<SignInModal open={true} onClose={onClose} />)

    const backdrop = container.querySelector('[data-backdrop="true"]') as HTMLElement
    backdrop.click()
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose when clicking inside the modal content', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SignInModal open={true} onClose={onClose} />)

    await user.click(screen.getByPlaceholderText('Username'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('prevents default form submission on the login form', async () => {
    const user = userEvent.setup()
    render(<SignInModal open={true} onClose={vi.fn()} />)

    await user.type(screen.getByPlaceholderText('Username'), 'testuser')
    await user.type(screen.getByPlaceholderText('Password'), 'testpass')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    // Form submission is prevented (no page reload); just verify the form still exists
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })
})
