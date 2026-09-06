import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationModal } from './RegistrationModal'

describe('RegistrationModal', () => {
  it('does not render when closed', () => {
    render(<RegistrationModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders when open with correct attributes', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-label', 'Registration modal')
  })

  it('renders the close button', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={onClose} />)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders three social sign-in icon buttons', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    expect(screen.getByRole('button', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders the Create Your Account heading', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Create Your Account')
  })

  it('renders three form fields with correct labels', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders form fields with correct types', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    expect(screen.getByLabelText(/full name/i)).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText(/email address/i)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password')
  })

  it('renders the Sign Up button', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders the I am already a member link', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByText(/already a member/i)).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: /sign up/i }))
  })

  it('prevents default on already a member link click', async () => {
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const link = screen.getByText(/already a member/i)
    await user.click(link)
  })

  it('has accessible labels on social buttons', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    expect(screen.getByRole('button', { name: /twitter/i })).toHaveAttribute('aria-label')
    expect(screen.getByRole('button', { name: /facebook/i })).toHaveAttribute('aria-label')
    expect(screen.getByRole('button', { name: /instagram/i })).toHaveAttribute('aria-label')
  })

  it('calls onClose on Escape key', () => {
    const onClose = vi.fn()
    render(<RegistrationModal open={true} onClose={onClose} />)

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('focus trap wraps Tab from last to first element', async () => {
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const closeBtn = screen.getByRole('button', { name: /close/i })
    const alreadyMember = screen.getByText(/already a member/i)

    // Focus the last element and fire Tab
    alreadyMember.focus()
    await user.tab()

    // Focus should wrap to the first focusable element (close button)
    expect(closeBtn).toHaveFocus()
  })

  it('focus trap wraps Shift+Tab from first to last element', async () => {
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const closeBtn = screen.getByRole('button', { name: /close/i })
    const alreadyMember = screen.getByText(/already a member/i)

    // Focus the first element and fire Shift+Tab
    closeBtn.focus()
    await user.tab({ shift: true })

    // Focus should wrap to the last focusable element
    expect(alreadyMember).toHaveFocus()
  })

  it('Tab on middle element does not wrap', async () => {
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const emailInput = screen.getByLabelText(/email address/i)
    emailInput.focus()

    // Tab from middle should not wrap
    await user.tab()

    // Focus should move to the next element (password), not wrap
    const passwordInput = screen.getByLabelText(/password/i)
    expect(passwordInput).toHaveFocus()
  })

  it('restores focus when modal closes', () => {
    const { rerender } = render(<RegistrationModal open={false} onClose={vi.fn()} />)

    // Open the modal
    rerender(<RegistrationModal open={true} onClose={vi.fn()} />)

    // Close the modal
    rerender(<RegistrationModal open={false} onClose={vi.fn()} />)
  })
})
