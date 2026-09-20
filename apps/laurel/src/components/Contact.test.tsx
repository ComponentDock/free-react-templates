import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Get In Touch/i)
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the send button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    const nameInput = screen.getByLabelText(/name/i)
    await user.type(nameInput, 'John')
    expect(nameInput).toHaveValue('John')
  })

  it('form submission does not navigate away', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders the map placeholder', () => {
    render(<Contact />)
    expect(screen.getByText('Map Placeholder')).toBeInTheDocument()
  })
})
