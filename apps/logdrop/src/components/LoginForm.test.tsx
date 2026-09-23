import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Sign In heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders a Username input with placeholder', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Username')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders a Password input with placeholder and type=password', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders a Remember Me checkbox checked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).toBeChecked()
  })

  it('renders a Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByRole('link', { name: /forgot password/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders a Login button', () => {
    render(<LoginForm />)
    const button = screen.getByRole('button', { name: /login/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('updates username value on input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Username')
    await user.type(input, 'testuser')
    expect(input).toHaveValue('testuser')
  })

  it('updates password value on input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Password')
    await user.type(input, 'secret')
    expect(input).toHaveValue('secret')
  })

  it('toggles the Remember Me checkbox', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('prevents default form submission', async () => {
    render(<LoginForm />)
    const form = document.querySelector('form')!
    const preventDefault = vi.fn()
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    submitEvent.preventDefault = preventDefault
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
