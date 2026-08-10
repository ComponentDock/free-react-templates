import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'
import { newsletterHeading, subscribeLabel, subscribePlaceholder } from '../data'

describe('Newsletter', () => {
  it('renders the heading, email input and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      subscribePlaceholder,
    )
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })

  it('shows a validation error for an empty submit', () => {
    render(<Newsletter />)

    fireEvent.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a validation error for an invalid email', () => {
    render(<Newsletter />)

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('shows a success message and resets the field for a valid email', () => {
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'traveler@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(input).toHaveValue('')
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
