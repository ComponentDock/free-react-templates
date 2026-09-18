import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading, contact info, and form fields', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()

    expect(screen.getByText(/123 Creative Street/)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@mortar.studio')).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /your name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /your email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /subject/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submits the form and clears all fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const nameInput = screen.getByRole('textbox', { name: /your name/i })
    const emailInput = screen.getByRole('textbox', { name: /your email/i })
    const subjectInput = screen.getByRole('textbox', { name: /subject/i })
    const messageInput = screen.getByRole('textbox', { name: /message/i })

    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(subjectInput, 'Project Inquiry')
    await user.type(messageInput, 'Hello, I have a project.')

    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
    expect(subjectInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })
})
