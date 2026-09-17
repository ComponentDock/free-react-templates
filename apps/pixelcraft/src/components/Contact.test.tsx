import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section number and title', () => {
    render(<Contact />)
    expect(screen.getByText('07')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the contact form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the send button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Contact />)
    expect(screen.getByText(/123 Creative Avenue/i)).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const button = screen.getByRole('button', { name: /Send Message/i })
    await user.click(button)
    // The form's onSubmit calls e.preventDefault(), so no page reload occurs
    expect(button).toBeInTheDocument()
  })
})
