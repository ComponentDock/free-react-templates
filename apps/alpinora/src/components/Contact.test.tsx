import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Contact } from './Contact'

function fillForm() {
  fireEvent.change(screen.getByRole('textbox', { name: 'Your name' }), {
    target: { value: 'Ada' },
  })
  fireEvent.change(screen.getByRole('textbox', { name: 'Email address' }), {
    target: { value: 'ada@example.com' },
  })
  fireEvent.change(screen.getByRole('textbox', { name: 'Subject' }), {
    target: { value: 'Trip planning' },
  })
  fireEvent.change(screen.getByRole('textbox', { name: 'Message' }), {
    target: { value: 'Hello there' },
  })
}

describe('Contact', () => {
  it('renders the title and the four form fields with placeholders', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'If you need, Just drop us a line',
    )
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toHaveClass('primary-btn')
  })

  it('blocks submit with per-field errors when fields are empty or invalid', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter your name')).toHaveAttribute('role', 'alert')
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Please enter your subject')).toBeInTheDocument()
    expect(screen.getByText('Please enter your message')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByRole('textbox', { name: 'Your name' }), {
      target: { value: 'Ada' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: 'Email address' }), {
      target: { value: 'nope' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: 'Subject' }), {
      target: { value: 'Hi' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: 'Message' }), {
      target: { value: 'Hello' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter a valid email address')).toHaveAttribute('role', 'alert')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a local success state when every field is valid and can reset', () => {
    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks! Your message is on its way.')
    fireEvent.click(screen.getByRole('button', { name: 'Send another message' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Your name' })).toHaveValue('')
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })
})
