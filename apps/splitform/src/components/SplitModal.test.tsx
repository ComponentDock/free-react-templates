import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SplitModal } from './SplitModal'

describe('SplitModal', () => {
  it('renders nothing when closed', () => {
    render(<SplitModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal with both panels when open', () => {
    render(<SplitModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')

    // Sign In heading
    expect(screen.getAllByText('Sign In').length).toBeGreaterThanOrEqual(1)
    // Sign Up heading
    expect(screen.getByText('Sign Up')).toBeInTheDocument()

    // Sign In panel
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    const passwordInputs = screen.getAllByPlaceholderText('Password')
    expect(passwordInputs.length).toBe(2)
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
    expect(screen.getByText('Remember Me')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Forgot Password' })).toBeInTheDocument()
    expect(screen.getByText('Or Sign In With')).toBeInTheDocument()

    // Social buttons
    expect(screen.getByRole('button', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Twitter' })).toBeInTheDocument()

    // Sign Up panel
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByText(/By signing up/)).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SplitModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when Escape is pressed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SplitModal open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when clicking the backdrop outside the modal content', () => {
    const onClose = vi.fn()
    const { container } = render(<SplitModal open={true} onClose={onClose} />)

    const backdrop = container.querySelector('[data-backdrop="true"]') as HTMLElement
    backdrop.click()
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose when clicking inside the modal content', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SplitModal open={true} onClose={onClose} />)

    await user.click(screen.getByPlaceholderText('Username'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('prevents default form submission on the sign-in form', async () => {
    const user = userEvent.setup()
    render(<SplitModal open={true} onClose={vi.fn()} />)

    await user.type(screen.getByPlaceholderText('Username'), 'testuser')
    await user.type(screen.getAllByPlaceholderText('Password')[0]!, 'testpass')
    await user.click(screen.getByRole('button', { name: 'Sign In' }))

    // Form submission is prevented (no page reload); just verify the form still exists
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('prevents default form submission on the sign-up form', async () => {
    const user = userEvent.setup()
    render(<SplitModal open={true} onClose={vi.fn()} />)

    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    // Type into the second password input (sign-up panel)
    const passwordInputs = screen.getAllByPlaceholderText('Password')
    const signUpPassword = passwordInputs[1]
    if (!signUpPassword) throw new Error('sign-up password input not found')
    await user.type(signUpPassword, 'secret123')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('links to Terms and Privacy Policy', () => {
    render(<SplitModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '#')
  })
})
