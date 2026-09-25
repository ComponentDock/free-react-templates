import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the Send button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('shows thank you message after submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('E-mail'), 'john@test.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Contact />)
    const section = document.querySelector('[style*="background-image"]')
    expect(section).toBeTruthy()
  })
})
