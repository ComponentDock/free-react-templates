import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  newsletterEmailLabel,
  newsletterInvalidEmailMessage,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccessMessage,
} from '../data'
import { NewsletterForm } from './NewsletterForm'

describe('NewsletterForm', () => {
  it('renders an email input and a Subscribe button for both variants', () => {
    const { rerender } = render(<NewsletterForm variant="sidebar" />)

    expect(screen.getByLabelText(newsletterEmailLabel)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(newsletterPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletterSubmitLabel })).toBeInTheDocument()

    rerender(<NewsletterForm variant="modal" />)
    expect(screen.getByLabelText(newsletterEmailLabel)).toBeInTheDocument()
  })

  it('shows a validation error for an invalid email and keeps the input', () => {
    render(<NewsletterForm variant="sidebar" />)

    fireEvent.change(screen.getByLabelText(newsletterEmailLabel), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent(newsletterInvalidEmailMessage)
    expect(screen.getByLabelText(newsletterEmailLabel)).toBeInTheDocument()
  })

  it('shows a success state and unmounts the input for a valid email', () => {
    render(<NewsletterForm variant="sidebar" />)

    fireEvent.change(screen.getByLabelText(newsletterEmailLabel), {
      target: { value: 'reader@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccessMessage)
    expect(screen.queryByLabelText(newsletterEmailLabel)).not.toBeInTheDocument()
  })

  it('clears the error and succeeds after a corrected email', () => {
    render(<NewsletterForm variant="modal" />)

    fireEvent.change(screen.getByLabelText(newsletterEmailLabel), {
      target: { value: 'broken' },
    })
    fireEvent.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText(newsletterEmailLabel), {
      target: { value: 'reader@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccessMessage)
  })
})
