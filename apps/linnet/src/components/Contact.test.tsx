import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders form fields and contact info', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByText('Send Now')).toBeInTheDocument()
  })

  it('handles form submission', () => {
    render(<Contact />)
    const form = screen.getByPlaceholderText('Full Name').closest('form')!
    // Submit the form — the onSubmit handler calls e.preventDefault()
    fireEvent.submit(form)
    // Form still in document (no navigation)
    expect(form).toBeInTheDocument()
  })
})
