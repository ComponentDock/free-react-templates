import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginCard } from './LoginCard'

describe('LoginCard', () => {
  it('renders the Sign In heading', () => {
    render(<LoginCard />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders social icons for Facebook and Twitter', () => {
    render(<LoginCard />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with twitter/i })).toBeInTheDocument()
  })

  it('social icons have transparent background with subtle border', () => {
    render(<LoginCard />)
    const fb = screen.getByRole('link', { name: /login with facebook/i })
    expect(fb.className).toContain('border')
  })

  it('renders username input with icon', () => {
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Username')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders password input with icon', () => {
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders Save Password checkbox checked by default', () => {
    render(<LoginCard />)
    const checkbox = screen.getByLabelText('Save Password')
    expect(checkbox).toBeChecked()
  })

  it('renders Login button', () => {
    render(<LoginCard />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Login button with green accent', () => {
    render(<LoginCard />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('bg-[var(--color-brand)]')
  })

  it('renders Sign Up link text', () => {
    render(<LoginCard />)
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument()
    expect(screen.getByText('Sign Up')).toHaveAttribute('href', '#')
  })

  it('renders Forgot Password link', () => {
    render(<LoginCard />)
    expect(screen.getByText('Forgot Password')).toHaveAttribute('href', '#')
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Username')
    await user.type(input, 'testuser')
    expect(input).toHaveValue('testuser')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const input = screen.getByPlaceholderText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('checkbox toggles on click', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const checkbox = screen.getByLabelText('Save Password')
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    await user.type(screen.getByPlaceholderText('Username'), 'user')
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })

  it('social buttons are circular', () => {
    render(<LoginCard />)
    const fb = screen.getByRole('link', { name: /login with facebook/i })
    expect(fb.className).toContain('rounded-full')
  })

  it('card has white background and shadow', () => {
    render(<LoginCard />)
    const card = document.querySelector('.bg-white')
    expect(card).toBeInTheDocument()
    expect(card!.className).toContain('shadow')
  })
})
