import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, CTA band, and contact details', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByText('Join over 1,700 companies that trust us.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Try it for free' })).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St\. Mountain View/)).toBeInTheDocument()
    expect(screen.getByText('+1 232 3235 324')).toBeInTheDocument()
  })

  it('renders the contact form with all fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('resets the form after a valid submission without reloading', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('First Name'), 'Ada')
    await user.type(screen.getByLabelText('Last Name'), 'Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Hi there')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByLabelText('First Name')).toHaveValue('')
    expect(screen.getByLabelText('Last Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.getByLabelText('Subject')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })
})
