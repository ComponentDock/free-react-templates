import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginCard } from './LoginCard'

describe('LoginCard', () => {
  it('renders the Sign In heading', () => {
    render(<LoginCard />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders a Username input with placeholder', () => {
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Username')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders a Password input with placeholder and type=password', () => {
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders a Sign In submit button', () => {
    render(<LoginCard />)
    const button = screen.getByRole('button', { name: /sign in/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders a Remember Me checkbox unchecked by default', () => {
    render(<LoginCard />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
  })

  it('toggles the Remember Me checkbox', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders a Forgot Password link', () => {
    render(<LoginCard />)
    const link = screen.getByRole('link', { name: /forgot password/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders the Or Sign In With divider text', () => {
    render(<LoginCard />)
    expect(screen.getByText('Or Sign In With')).toBeInTheDocument()
  })

  it('updates username value on input', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Username')
    await user.type(input, 'testuser')
    expect(input).toHaveValue('testuser')
  })

  it('updates password value on input', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Password')
    await user.type(input, 'secret')
    expect(input).toHaveValue('secret')
  })

  it('prevents default form submission', async () => {
    render(<LoginCard />)
    const form = document.querySelector('form')!
    const preventDefault = vi.fn()
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    submitEvent.preventDefault = preventDefault
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
