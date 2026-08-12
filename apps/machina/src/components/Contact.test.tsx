import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'
import { ENQUIRY_TEXT, ENQUIRY_TITLE, FORM_TITLE } from '../data'

describe('Contact', () => {
  it('renders the enquiry card and all form fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: ENQUIRY_TITLE })).toBeInTheDocument()
    expect(screen.getByText(ENQUIRY_TEXT)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: FORM_TITLE })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone no.')).toBeInTheDocument()
    expect(screen.getByLabelText('Topic')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('blocks an invalid submission with per-field errors', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
    expect(screen.getByText('Please select a topic')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message of at least 10 characters')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid submission and resets the form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Phone no.'), '+8801234567')
    await user.selectOptions(screen.getByLabelText('Topic'), 'Topic one')
    await user.type(screen.getByLabelText('Message'), 'We need a new production line installed.')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent("Thanks Ada! We'll get back to you")
    expect(screen.getByLabelText('Your Name')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })
})
