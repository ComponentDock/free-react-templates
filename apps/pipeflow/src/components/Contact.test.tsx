import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the form heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })

  it('renders the name input', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders the message textarea', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('clears form fields on submission', () => {
    render(<Contact />)
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement
    const messageInput = screen.getByLabelText('Message') as HTMLTextAreaElement

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello there' } })

    expect(nameInput.value).toBe('John Doe')
    expect(emailInput.value).toBe('john@example.com')
    expect(messageInput.value).toBe('Hello there')

    fireEvent.click(screen.getByText('Send Message'))

    expect(nameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    expect(messageInput.value).toBe('')
  })
})
