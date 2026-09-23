import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginPage } from './LoginPage'

describe('LoginPage', () => {
  it('renders the login heading', () => {
    render(<LoginPage />)
    expect(screen.getByRole('heading', { name: /login to portico/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<LoginPage />)
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument()
  })

  it('renders username input with label', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  it('renders password input with label', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('password field is masked', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })

  it('username field is required', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Username')).toBeRequired()
  })

  it('password field is required', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Password')).toBeRequired()
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    const input = screen.getByLabelText('Username')
    await user.type(input, 'user@example.com')
    expect(input).toHaveValue('user@example.com')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    const input = screen.getByLabelText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('renders remember me checkbox', () => {
    render(<LoginPage />)
    expect(screen.getByRole('checkbox', { name: /remember me/i })).toBeInTheDocument()
  })

  it('remember me checkbox is unchecked by default', () => {
    render(<LoginPage />)
    expect(screen.getByRole('checkbox', { name: /remember me/i })).not.toBeChecked()
  })

  it('toggles remember me checkbox', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders Forgot Password link', () => {
    render(<LoginPage />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Log In button', () => {
    render(<LoginPage />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    HTMLFormElement.prototype.preventDefault = preventDefault
    render(<LoginPage />)
    await user.type(screen.getByLabelText('Username'), 'user')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /log in/i }))
  })

  it('renders the right panel image on desktop', () => {
    render(<LoginPage />)
    const image = screen.getByRole('img', { name: /city street scene/i })
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass('hidden')
  })
})
