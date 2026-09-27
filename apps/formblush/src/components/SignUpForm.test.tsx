import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignUpForm } from './SignUpForm'

describe('SignUpForm', () => {
  it('renders the Sign Up heading', () => {
    render(<SignUpForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sign Up')
  })

  it('renders the wavy underline decoration SVG', () => {
    render(<SignUpForm />)
    const heading = screen.getByRole('heading', { level: 1 })
    const svg = heading.parentElement?.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders username input with label', () => {
    render(<SignUpForm />)
    expect(screen.getByLabelText('Username:')).toBeInTheDocument()
  })

  it('renders email input with label', () => {
    render(<SignUpForm />)
    expect(screen.getByLabelText('E-mail:')).toBeInTheDocument()
  })

  it('renders password input with label', () => {
    render(<SignUpForm />)
    expect(screen.getByLabelText('Password:')).toBeInTheDocument()
  })

  it('renders the create account button', () => {
    render(<SignUpForm />)
    const button = screen.getByRole('button', { name: /create my account/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders social platforms text', () => {
    render(<SignUpForm />)
    expect(screen.getByText('Sign up with social platforms')).toBeInTheDocument()
  })

  it('renders four social media links', () => {
    render(<SignUpForm />)
    expect(screen.getByLabelText('Sign up with Facebook')).toHaveAttribute(
      'href',
      'https://www.facebook.com/',
    )
    expect(screen.getByLabelText('Sign up with Instagram')).toHaveAttribute(
      'href',
      'https://www.instagram.com/',
    )
    expect(screen.getByLabelText('Sign up with Twitter')).toHaveAttribute(
      'href',
      'https://twitter.com/',
    )
    expect(screen.getByLabelText('Sign up with Tumblr')).toHaveAttribute(
      'href',
      'https://www.tumblr.com/',
    )
  })

  it('social links open in new tabs', () => {
    render(<SignUpForm />)
    const facebook = screen.getByLabelText('Sign up with Facebook')
    expect(facebook).toHaveAttribute('target', '_blank')
    expect(facebook).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('allows typing in the username input', async () => {
    const user = userEvent.setup()
    render(<SignUpForm />)
    const input = screen.getByLabelText('Username:')
    await user.type(input, 'johndoe')
    expect(input).toHaveValue('johndoe')
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<SignUpForm />)
    const input = screen.getByLabelText('E-mail:')
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in the password input', async () => {
    const user = userEvent.setup()
    render(<SignUpForm />)
    const input = screen.getByLabelText('Password:')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('submits the form without crashing', async () => {
    const user = userEvent.setup()
    render(<SignUpForm />)
    await user.click(screen.getByRole('button', { name: /create my account/i }))
  })
})
