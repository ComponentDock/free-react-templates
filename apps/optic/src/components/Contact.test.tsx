import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Say Hello' })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject of the message')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type your message here...')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Contact />)
    const form = screen.getByRole('button', { name: /send message/i }).closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
