import { render, screen } from '@testing-library/react'
import { LoginModal } from './LoginModal'
import { vi, describe, it, expect } from 'vitest'

describe('LoginModal', () => {
  it('does not render when closed', () => {
    render(<LoginModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders modal dialog when open', () => {
    render(<LoginModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByLabelText(/login modal/i)).toBeInTheDocument()
  })

  it('renders login form inside modal', () => {
    render(<LoginModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /log in/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/username or email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('closes when close button is clicked', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<LoginModal open={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when backdrop is clicked', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<LoginModal open={true} onClose={onClose} />)
    await user.click(screen.getByTestId('backdrop'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when Escape key is pressed', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<LoginModal open={true} onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('handles form submission', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<LoginModal open={true} onClose={vi.fn()} />)
    await user.type(screen.getByLabelText(/username or email/i), 'user@test.com')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(consoleSpy).toHaveBeenCalledWith('Login:', {
      email: 'user@test.com',
      password: 'pass123',
    })
    consoleSpy.mockRestore()
  })

  it('traps focus with Tab key on last element', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<LoginModal open={true} onClose={vi.fn()} />)

    // Focus the sign-up link (last focusable element)
    const signupLink = screen.getByRole('link', { name: /sign up here/i })
    signupLink.focus()

    // Tab should wrap to first focusable element (close button)
    await user.tab()

    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toHaveFocus()
  })

  it('traps focus with Shift+Tab on first element', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<LoginModal open={true} onClose={vi.fn()} />)

    // Focus the close button (first focusable element)
    const closeButton = screen.getByRole('button', { name: /close/i })
    closeButton.focus()

    // Shift+Tab should wrap to last focusable element (sign-up link)
    await user.tab({ shift: true })

    const signupLink = screen.getByRole('link', { name: /sign up here/i })
    expect(signupLink).toHaveFocus()
  })

  it('has correct accent styling', () => {
    render(<LoginModal open={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog')
    const content = dialog.querySelector('[class*="border-t-4"]')
    expect(content).toBeInTheDocument()
  })
})
