import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Rosia Road 55, Gibraltar, UK')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+43 5266 22 345')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('mariawilliams@company.com')).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const nameInput = screen.getByLabelText(/your name/i)
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/your name/i), 'Test')
    await user.type(screen.getByLabelText(/your email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hello')
    await user.type(screen.getByLabelText(/message/i), 'World')
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })
})
