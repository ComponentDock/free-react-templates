import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationCard } from './RegistrationCard'

describe('RegistrationCard', () => {
  it('renders the heading', () => {
    render(<RegistrationCard />)
    expect(
      screen.getByRole('heading', { level: 2, name: /registration form/i }),
    ).toBeInTheDocument()
  })

  it('renders all four form fields', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password:$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders the Full Name input with placeholder', () => {
    render(<RegistrationCard />)
    const input = screen.getByLabelText(/full name/i)
    expect(input).toHaveAttribute('placeholder', 'ex: Lindsey Wilson')
  })

  it('renders the email input as email type', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText(/your email/i)).toHaveAttribute('type', 'email')
  })

  it('renders password inputs as password type', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText(/^password:$/i)).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText(/confirm password/i)).toHaveAttribute('type', 'password')
  })

  it('renders the Register button', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('renders the hero panel text', () => {
    render(<RegistrationCard />)
    const headlines = screen.getAllByText('Bring Your Music Along')
    expect(headlines.length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('try Unlimited').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('$9.99').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the terms checkbox with link', () => {
    render(<RegistrationCard />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
    const link = screen.getByRole('link', { name: /play term of service/i })
    expect(link).toBeInTheDocument()
  })

  it('shows email required error when submitting empty', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })

  it('shows password required error when submitting empty', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows confirm password required error when submitting empty', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Please confirm your password')).toBeInTheDocument()
  })

  it('shows terms required error when submitting without checkbox', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('You must agree to the terms')).toBeInTheDocument()
  })

  it('shows invalid email format error', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.type(screen.getByLabelText(/your email/i), 'invalid-email')
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
  })

  it('shows password mismatch error', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.type(screen.getByLabelText(/your email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/^password:$/i), 'Password123')
    await user.type(screen.getByLabelText(/confirm password/i), 'Password456')
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/your email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/^password:$/i), 'Password123')
    await user.type(screen.getByLabelText(/confirm password/i), 'Password123')
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    await waitFor(() => {
      expect(screen.getByText(/registration successful/i)).toBeInTheDocument()
    })
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    const nameInput = screen.getByLabelText(/full name/i)
    await user.type(nameInput, 'Test User')
    expect(nameInput).toHaveValue('Test User')
  })

  it('can check and uncheck the terms checkbox', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders hero images', () => {
    render(<RegistrationCard />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })

  it('clears field error when user types in the field', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/your email/i), 'a@b.com')
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
  })
})
