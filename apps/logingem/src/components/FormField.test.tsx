import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormField } from './FormField'
import { Mail } from 'lucide-react'

describe('FormField', () => {
  it('renders a label', () => {
    render(
      <FormField
        label="Username"
        name="username"
        placeholder="Enter username"
        icon={<Mail size={20} />}
      />,
    )

    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  it('renders placeholder text', () => {
    render(
      <FormField
        label="Email"
        name="email"
        placeholder="Type your email"
        icon={<Mail size={20} />}
      />,
    )

    expect(screen.getByPlaceholderText('Type your email')).toBeInTheDocument()
  })

  it('renders with correct name attribute', () => {
    render(
      <FormField
        label="Username"
        name="username"
        placeholder="Enter username"
        icon={<Mail size={20} />}
      />,
    )

    expect(screen.getByPlaceholderText('Enter username')).toHaveAttribute('name', 'username')
  })

  it('renders with default text type', () => {
    render(
      <FormField
        label="Username"
        name="username"
        placeholder="Enter username"
        icon={<Mail size={20} />}
      />,
    )

    expect(screen.getByPlaceholderText('Enter username')).toHaveAttribute('type', 'text')
  })

  it('renders with specified type', () => {
    render(
      <FormField
        label="Password"
        type="password"
        name="pass"
        placeholder="Enter password"
        icon={<Mail size={20} />}
      />,
    )

    expect(screen.getByPlaceholderText('Enter password')).toHaveAttribute('type', 'password')
  })

  it('renders error message when provided', () => {
    render(
      <FormField
        label="Username"
        name="username"
        placeholder="Enter username"
        icon={<Mail size={20} />}
        error="Username is required"
      />,
    )

    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  it('does not render error message when not provided', () => {
    render(
      <FormField
        label="Username"
        name="username"
        placeholder="Enter username"
        icon={<Mail size={20} />}
      />,
    )

    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
  })

  it('renders with required attribute', () => {
    render(
      <FormField
        label="Username"
        name="username"
        placeholder="Enter username"
        icon={<Mail size={20} />}
      />,
    )

    expect(screen.getByPlaceholderText('Enter username')).toBeRequired()
  })
})
