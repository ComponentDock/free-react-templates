import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from './Contact'
import { CONTACT_HEADING } from '../data'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Contact', () => {
  it('renders the heading and all form fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: CONTACT_HEADING })).toBeInTheDocument()
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('prevents navigation when the form is submitted', () => {
    const preventDefault = vi.fn()
    render(<Contact />)
    const form = screen.getByRole('form', { name: 'Contact form' })
    form.addEventListener('submit', (event) => {
      // The component's own handler must run first; spy on the default action.
      event.preventDefault = preventDefault
    })
    fireEvent.submit(form)
    expect(preventDefault).toHaveBeenCalled()
  })
})
