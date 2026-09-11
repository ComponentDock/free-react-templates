import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: /Get In Touch/i })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Name/i), 'John')
    await user.type(screen.getByLabelText(/Email/i), 'bad')
    await user.type(screen.getByLabelText(/Message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Name/i), 'John')
    await user.type(screen.getByLabelText(/Email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Subject/i), 'Project Inquiry')
    await user.type(screen.getByLabelText(/Message/i), 'Hello!')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/Thank you/i)).toBeInTheDocument()
  })

  it('updates field values as user types', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const nameInput = screen.getByLabelText(/Name/i)
    await user.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
    const subjectInput = screen.getByLabelText(/Subject/i)
    await user.type(subjectInput, 'Test')
    expect(subjectInput).toHaveValue('Test')
  })
})
