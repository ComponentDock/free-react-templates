import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CONTACT_CARDS } from '../data/content'
import { Contact } from './Contact'

function fillField(label: string, value: string) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } })
}

describe('Contact', () => {
  it('renders five labeled fields plus a submit button and info cards', () => {
    render(<Contact />)
    for (const label of ['First Name', 'Last Name', 'Email', 'Subject', 'Message']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    for (const card of CONTACT_CARDS) {
      expect(screen.getByRole('heading', { level: 3, name: card.label })).toBeInTheDocument()
      expect(screen.getByText(card.value)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 3, name: 'More Info' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })

  it('blocks submit and shows per-field errors when the form is empty', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(5)
    expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
    expect(screen.queryByText(/has been received/)).not.toBeInTheDocument()
  })

  it('flags a malformed email address', () => {
    render(<Contact />)
    fillField('First Name', 'Ada')
    fillField('Last Name', 'Lovelace')
    fillField('Email', 'not-an-email')
    fillField('Subject', 'Quote')
    fillField('Message', 'Hello there')
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('submits a valid message locally and can start another one', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('First Name'), 'Ada')
    await user.type(screen.getByLabelText('Last Name'), 'Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Quote request')
    await user.type(screen.getByLabelText('Message'), 'Please price lane A.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Thanks! Your message has been received.')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Send another message' }))
    expect(screen.getByLabelText('First Name')).toHaveValue('')
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })
})
