import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { contact } from '../data'

function fillValidForm() {
  fireEvent.change(screen.getByLabelText(contact.firstName), { target: { value: 'Ben' } })
  fireEvent.change(screen.getByLabelText(contact.lastName), { target: { value: 'Carson' } })
  fireEvent.change(screen.getByLabelText(contact.email), { target: { value: 'ben@vitae.dev' } })
  fireEvent.change(screen.getByLabelText(contact.subject), { target: { value: 'Hiring' } })
  fireEvent.change(screen.getByLabelText(contact.message), {
    target: { value: 'I would like to talk about a project.' },
  })
}

describe('Contact', () => {
  it('renders the section title and all five fields in order', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: contact.heading })).toBeInTheDocument()
    const fields = [
      contact.firstName,
      contact.lastName,
      contact.email,
      contact.subject,
      contact.message,
    ]
    for (const field of fields) {
      expect(screen.getByLabelText(field)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: contact.submit })).toBeInTheDocument()
  })

  it('shows validation messages for missing fields and no success', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: contact.submit }))
    expect(screen.getAllByRole('alert')).toHaveLength(5)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows an email validation message for an invalid email', () => {
    render(<Contact />)
    fillValidForm()
    fireEvent.change(screen.getByLabelText(contact.email), { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: contact.submit }))
    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('clears a field error while typing in it', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: contact.submit }))
    expect(screen.getAllByRole('alert')).toHaveLength(5)

    fireEvent.change(screen.getByLabelText(contact.firstName), { target: { value: 'Ben' } })
    expect(screen.getAllByRole('alert')).toHaveLength(4)
  })

  it('shows a success message on a valid submit', () => {
    render(<Contact />)
    fillValidForm()
    fireEvent.click(screen.getByRole('button', { name: contact.submit }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks for your message — we will get back to you soon.',
    )
    expect(screen.queryByLabelText(contact.firstName)).not.toBeInTheDocument()
  })
})
