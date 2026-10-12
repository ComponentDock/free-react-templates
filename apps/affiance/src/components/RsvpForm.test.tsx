import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RsvpForm } from './RsvpForm'
import { GUEST_OPTIONS, RSVP_CONFIRMED, RSVP_INVALID } from '../lib/site'

/** The form, once it is on the page. */
function theForm(): HTMLElement {
  return screen.getByTestId('rsvp-form')
}

/** A complete reply, typed field by field. */
function complete(): void {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: '  Delphine Marchetti  ' } })
  fireEvent.change(screen.getByLabelText('Your email'), { target: { value: 'delphine@example.com' } })
  fireEvent.change(screen.getByLabelText('Guest'), { target: { value: '3' } })
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'See you there.' } })
}

describe('RsvpForm', () => {
  it('asks the design question over the washed photograph', () => {
    render(<RsvpForm />)

    expect(screen.getByRole('heading', { level: 2, name: 'Will You Attend?' })).toHaveClass(
      'font-script',
      'text-brand',
    )
    expect(screen.getByText('Invitation')).toHaveClass('border-dashed')
    expect(screen.getByTestId('rsvp-photo').style.backgroundImage).toContain('affiance-38/1920/1200')
    expect(screen.getByTestId('rsvp-photo').parentElement?.querySelector('.bg-wash')).toBeInTheDocument()
  })

  it('gives every field a label, a placeholder and the guest list', () => {
    render(<RsvpForm />)

    expect(screen.getByLabelText('Name')).toHaveAttribute('placeholder', 'Name')
    expect(screen.getByLabelText('Your email')).toHaveAttribute('placeholder', 'Your email')
    expect(screen.getByLabelText('Message')).toHaveClass('h-auto')

    const guests = screen.getByLabelText('Guest')

    expect(Array.from(guests.querySelectorAll('option')).map((option) => option.textContent)).toEqual([
      ...GUEST_OPTIONS,
    ])
    expect(guests).toHaveValue(GUEST_OPTIONS[0])
    expect(guests).toHaveClass('appearance-none')
    expect(guests.parentElement?.querySelector('svg')).toHaveClass('text-brand')
  })

  it('confirms a complete reply without posting anywhere', () => {
    render(<RsvpForm />)

    complete()

    expect(screen.getByLabelText('Name')).toHaveValue('  Delphine Marchetti  ')

    expect(fireEvent.submit(theForm())).toBe(false)

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_CONFIRMED)
    expect(theForm()).not.toHaveAttribute('action')
    expect(screen.getByRole('button', { name: 'I am attending' })).toHaveClass(
      'rounded-[4px]',
      'uppercase',
      'bg-primary-600',
    )
  })

  it('asks for the missing details when the reply is incomplete', () => {
    render(<RsvpForm />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: '   ' } })
    fireEvent.change(screen.getByLabelText('Your email'), { target: { value: 'not-an-address' } })

    fireEvent.submit(theForm())

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_INVALID)
  })

  it('returns to the confirmed reply once the details are corrected', () => {
    render(<RsvpForm />)

    fireEvent.submit(theForm())

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_INVALID)

    complete()
    fireEvent.submit(theForm())

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_CONFIRMED)
  })
})
