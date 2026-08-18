import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { contactDetails, footerBio } from '../data'

describe('Footer', () => {
  it('renders the bio, contact details, Download Resume, and socials', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: footerBio })).toBeInTheDocument()

    expect(screen.getByText(contactDetails.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contactDetails.phone })).toHaveAttribute(
      'href',
      'tel:+13618833218',
    )
    expect(screen.getByRole('link', { name: contactDetails.email })).toHaveAttribute(
      'href',
      'mailto:hello@dossier.example',
    )

    expect(screen.getAllByRole('link', { name: 'Download Resume' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('shows per-field errors on an invalid submit and blocks sending', () => {
    render(<Footer />)
    const form = document.querySelector('[data-contact-form]') as HTMLFormElement
    fireEvent.submit(form)

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a subject.')).toBeInTheDocument()
    expect(screen.getByText('Please write a message.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects an invalid email address', () => {
    render(<Footer />)
    const name = screen.getByLabelText('Your name')
    const email = screen.getByLabelText('Email')
    const subject = screen.getByLabelText('Subject')
    const message = screen.getByLabelText('Message')

    fireEvent.change(name, { target: { value: 'Ada' } })
    fireEvent.change(email, { target: { value: 'not-an-email' } })
    fireEvent.change(subject, { target: { value: 'Hello' } })
    fireEvent.change(message, { target: { value: 'Hi there' } })
    fireEvent.submit(document.querySelector('[data-contact-form]') as HTMLFormElement)

    expect(email).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('clears a field error while typing', () => {
    render(<Footer />)
    fireEvent.submit(document.querySelector('[data-contact-form]') as HTMLFormElement)
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Ada' } })
    expect(screen.queryByText('Please enter your name.')).toBeNull()
  })

  it('sends the message on valid input and shows a success message', () => {
    render(<Footer />)
    const name = screen.getByLabelText('Your name')
    const email = screen.getByLabelText('Email')
    const subject = screen.getByLabelText('Subject')
    const message = screen.getByLabelText('Message')

    fireEvent.change(name, { target: { value: 'Ada' } })
    fireEvent.change(email, { target: { value: 'ada@example.com' } })
    fireEvent.change(subject, { target: { value: 'Project inquiry' } })
    fireEvent.change(message, { target: { value: 'I would like to discuss a redesign.' } })
    fireEvent.submit(document.querySelector('[data-contact-form]') as HTMLFormElement)

    expect(screen.getByRole('status')).toHaveTextContent(
      "Thanks, Ada — your message has been sent. We'll reply soon.",
    )
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('hides the success message when the user starts typing again', () => {
    render(<Footer />)
    const name = screen.getByLabelText('Your name')
    const email = screen.getByLabelText('Email')
    const subject = screen.getByLabelText('Subject')
    const message = screen.getByLabelText('Message')

    fireEvent.change(name, { target: { value: 'Ada' } })
    fireEvent.change(email, { target: { value: 'ada@example.com' } })
    fireEvent.change(subject, { target: { value: 'Project inquiry' } })
    fireEvent.change(message, { target: { value: 'Message body' } })
    fireEvent.submit(document.querySelector('[data-contact-form]') as HTMLFormElement)
    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.change(subject, { target: { value: 'Updated subject' } })
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('renders the copyright bar with the year and the Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`© ${year} Dossier · All rights reserved`)),
    ).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
