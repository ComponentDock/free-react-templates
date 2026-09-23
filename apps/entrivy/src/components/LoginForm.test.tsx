import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Sign In heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<LoginForm />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet elit/)).toBeInTheDocument()
  })

  it('renders username input', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('text')
  })

  it('renders password input', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
  })

  it('renders remember me checkbox unchecked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).not.toBeChecked()
  })

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Log In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders the divider text', () => {
    render(<LoginForm />)
    expect(screen.getByText('— or login with —')).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with google/i })).toBeInTheDocument()
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    await user.type(input, 'testuser')
    expect(input.value).toBe('testuser')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    await user.type(input, 'secret123')
    expect(input.value).toBe('secret123')
  })

  it('checkbox toggles on click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('username') as HTMLInputElement, 'user')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /log in/i }))
  })

  it('social buttons have correct aria labels', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toHaveAttribute(
      'aria-label',
      'Login with Facebook',
    )
    expect(screen.getByRole('link', { name: /login with twitter/i })).toHaveAttribute(
      'aria-label',
      'Login with Twitter',
    )
    expect(screen.getByRole('link', { name: /login with google/i })).toHaveAttribute(
      'aria-label',
      'Login with Google',
    )
  })

  it('floating label moves up when username has value', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    await user.type(input, 'a')
    // Label should have the smaller text class when input has value
    const label = document.querySelector('label[for="username"]')
    expect(label?.className).toContain('top-2')
  })

  it('floating label is centered when username is empty', () => {
    render(<LoginForm />)
    const label = document.querySelector('label[for="username"]')
    expect(label?.className).toContain('top-1/2')
  })
})
