import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  GUEST_COUNTS,
  RSVP_CONFIRMED,
  RSVP_CTA,
  RSVP_FIELDS,
  RSVP_HEADING,
  RSVP_INVALID,
} from '../lib/site'
import { RsvpForm } from './RsvpForm'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the guest book', () => {
  it('sets the fields on a lifted card under the sprig and the title', () => {
    render(<RsvpForm />)

    expect(screen.getByRole('heading', { level: 2, name: RSVP_HEADING })).toBeInTheDocument()

    for (const label of Object.values(RSVP_FIELDS)) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }

    const name = screen.getByLabelText(RSVP_FIELDS.name)

    expect(tokens(name)).toContain('h-[60px]')
    expect(tokens(name)).toContain('rounded-[5px]')
    expect(tokens(name)).toContain('border-field-line')

    expect(screen.getByLabelText(RSVP_FIELDS.message).tagName).toBe('TEXTAREA')
    expect(tokens(screen.getByLabelText(RSVP_FIELDS.message))).toContain('h-[140px]')
  })

  it('offers a real keyboard-reachable select for the party size', () => {
    render(<RsvpForm />)

    const select = screen.getByLabelText(RSVP_FIELDS.guests)

    expect(select.tagName).toBe('SELECT')
    expect(screen.getAllByRole('option')).toHaveLength(4)

    for (const count of GUEST_COUNTS) {
      expect(screen.getByRole('option', { name: count })).toBeInTheDocument()
    }

    expect(tokens(select)).toContain('appearance-none')
    expect(tokens(select)).toContain('h-[60px]')

    fireEvent.change(select, { target: { value: GUEST_COUNTS[3] } })

    expect(select).toHaveValue(GUEST_COUNTS[3])
  })

  it('pins four sprigs inside the card and hangs two branches outside it', () => {
    const { container } = render(<RsvpForm />)

    const corners = screen.getAllByTestId('rsvp-corner')

    expect(corners).toHaveLength(4)
    for (const corner of corners) {
      expect(tokens(corner)).toContain('pointer-events-none')
      expect(tokens(corner)).toContain('h-[87px]')
      expect(corner.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
    }

    const top = screen.getByTestId('rsvp-outer-top')

    expect(tokens(top)).toContain('top-[-62px]')
    expect(tokens(top)).toContain('left-[-143px]')
    expect(tokens(top)).toContain('lg:block')
    expect(tokens(screen.getByTestId('rsvp-outer-bottom'))).toContain('right-[-133px]')

    expect(container.querySelectorAll('form')).toHaveLength(1)
    expect(tokens(screen.getByRole('region', { name: RSVP_HEADING }))).toContain('relative')
  })

  it('checks the reply here rather than leaving the page, and writes back in place', async () => {
    const user = userEvent.setup()
    render(<RsvpForm />)

    const form = screen.getByTestId('reply-form')

    expect(form).not.toHaveAttribute('action')
    expect(form.tagName).toBe('FORM')

    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_INVALID)

    await user.type(screen.getByLabelText(RSVP_FIELDS.name), 'Emerson Hale')
    await user.type(screen.getByLabelText(RSVP_FIELDS.email), 'emerson@example.com')
    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_CONFIRMED)

    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_CONFIRMED)
  })

  it('takes a note as well, and keeps the action a button in the form', async () => {
    const user = userEvent.setup()
    render(<RsvpForm />)

    await user.type(screen.getByLabelText(RSVP_FIELDS.message), 'We will be four at the long table.')

    expect(screen.getByLabelText(RSVP_FIELDS.message)).toHaveValue(
      'We will be four at the long table.',
    )

    const cta = screen.getByRole('button', { name: RSVP_CTA })

    expect(cta).toHaveAttribute('type', 'submit')
    expect(tokens(cta)).toContain('sweep-up')
    expect(tokens(cta)).toContain('bg-primary-600')
  })
})
