import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SubscribeBand } from './SubscribeBand'
import { SUBSCRIBE_BUTTON, SUBSCRIBE_EYEBROW, SUBSCRIBE_TITLE } from '../data'

describe('SubscribeBand', () => {
  it('renders the eyebrow, headline and subscribe form', () => {
    const { container } = render(<SubscribeBand />)

    expect(screen.getByRole('heading', { level: 2, name: SUBSCRIBE_EYEBROW })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: SUBSCRIBE_TITLE })).toBeInTheDocument()

    const input = screen.getByRole('textbox', { name: 'Email address' })
    expect(input).toHaveAttribute('placeholder', 'Enter email address')
    expect(screen.getByRole('button', { name: SUBSCRIBE_BUTTON })).toBeInTheDocument()

    // Background image + overlay.
    expect(container.querySelector('section')!.style.backgroundImage).toContain('settle-subscribe')
  })

  it('shows an error for an invalid email and a success message for a valid one', () => {
    render(<SubscribeBand />)

    const input = screen.getByRole('textbox', { name: 'Email address' })
    const submit = screen.getByRole('button', { name: SUBSCRIBE_BUTTON })

    fireEvent.change(input, { target: { value: 'not-an-email' } })
    fireEvent.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')

    fireEvent.change(input, { target: { value: 'hello@example.com' } })
    fireEvent.click(submit)
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
