import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NewsletterForm } from './NewsletterForm'

describe('NewsletterForm', () => {
  it('renders the email input and the subscribe button', () => {
    render(<NewsletterForm />)
    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', 'E-mail')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows an error for an empty email', () => {
    render(<NewsletterForm />)
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows an error for an invalid email', () => {
    render(<NewsletterForm />)
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
  })

  it('confirms a valid email and resets the field', () => {
    render(<NewsletterForm />)
    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'hello@flair.studio' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you — you have been subscribed.')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(input).toHaveValue('')
  })
})
