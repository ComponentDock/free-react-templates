import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RsvpForm } from './RsvpForm'
import {
  GUEST_OPTIONS,
  RSVP_CONFIRMED,
  RSVP_EMAIL_ERROR,
  RSVP_FIELDS,
  RSVP_NAME_ERROR,
  RSVP_SUBMIT,
  RSVP_TITLE,
} from '../lib/site'

const form = () => screen.getByTestId('rsvp-form')
const name = () => screen.getByLabelText(RSVP_FIELDS.name)
const email = () => screen.getByLabelText(RSVP_FIELDS.email)

describe('RsvpForm', () => {
  it('sets the reply card with its four labelled fields', () => {
    const { container } = render(<RsvpForm />)

    const card = container.querySelector('section > div > div') as HTMLElement

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(RSVP_TITLE)
    expect(card).toHaveClass('shadow-form', 'xl:pt-[125px]', 'xl:pb-[115px]')
    expect(card.querySelector('span[aria-hidden="true"]')).toHaveClass('border-dashed', 'border-field')

    expect(name()).toHaveClass('rounded-field', 'border-field', 'h-[60px]')
    expect(email()).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText(RSVP_FIELDS.guest)).toHaveValue(GUEST_OPTIONS[0])
    expect(screen.getByLabelText(RSVP_FIELDS.message).tagName).toBe('TEXTAREA')
    expect(form()).toHaveAttribute('novalidate')
    expect(form()).not.toHaveAttribute('action')
  })

  it('offers the four guest counts the design lists', () => {
    render(<RsvpForm />)

    const guest = screen.getByLabelText(RSVP_FIELDS.guest)

    expect(Array.from(guest.querySelectorAll('option')).map((option) => option.textContent)).toEqual(
      [...GUEST_OPTIONS],
    )
  })

  it('keeps every field it is given, whatever kind of field it is', () => {
    render(<RsvpForm />)

    fireEvent.change(name(), { target: { value: 'Amias Ward' } })
    fireEvent.change(email(), { target: { value: 'amias@example.com' } })
    fireEvent.change(screen.getByLabelText(RSVP_FIELDS.guest), { target: { value: '3 Guests' } })
    fireEvent.change(screen.getByLabelText(RSVP_FIELDS.message), { target: { value: 'See you there.' } })

    expect(name()).toHaveValue('Amias Ward')
    expect(email()).toHaveValue('amias@example.com')
    expect(screen.getByLabelText(RSVP_FIELDS.guest)).toHaveValue('3 Guests')
    expect(screen.getByLabelText(RSVP_FIELDS.message)).toHaveValue('See you there.')
  })

  it('confirms a complete reply locally', () => {
    render(<RsvpForm />)

    fireEvent.change(name(), { target: { value: 'Amias Ward' } })
    fireEvent.change(email(), { target: { value: 'amias@example.com' } })
    fireEvent.change(screen.getByLabelText(RSVP_FIELDS.guest), { target: { value: '2 Guests' } })
    fireEvent.submit(form())

    expect(screen.getByRole('status')).toHaveTextContent(RSVP_CONFIRMED)
    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.getByRole('button', { name: RSVP_SUBMIT })).toBeInTheDocument()
  })

  it('names each field that is missing or malformed and keeps what was typed', () => {
    render(<RsvpForm />)

    fireEvent.change(email(), { target: { value: 'amias@example' } })
    fireEvent.click(screen.getByRole('button', { name: RSVP_SUBMIT }))

    const alerts = screen.getAllByRole('alert')

    expect(alerts).toHaveLength(2)
    expect(alerts[0]).toHaveTextContent(RSVP_NAME_ERROR)
    expect(alerts[1]).toHaveTextContent(RSVP_EMAIL_ERROR)
    expect(email()).toHaveValue('amias@example')
    expect(screen.queryByRole('status')).toBeNull()
    expect(name()).toHaveClass('border-field')
  })
})
