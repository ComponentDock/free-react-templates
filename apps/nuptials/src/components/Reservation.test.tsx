import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Reservation } from './Reservation'
import {
  GUESTS_LABEL,
  MEAL_LABEL,
  RESERVATION_EMAIL_ERROR,
  RESERVATION_FIELDS,
  RESERVATION_LEAD,
  RESERVATION_MESSAGE_ERROR,
  RESERVATION_NAME_ERROR,
  RESERVATION_SUBMIT,
  RESERVATION_TITLE,
  reservationConfirmed,
} from '../lib/site'

const form = () => screen.getByTestId('reservation-form')
const submit = () => screen.getByRole('button', { name: RESERVATION_SUBMIT })
const field = (label: string) => screen.getByLabelText(label)

/** Drives one of the two picker rows: open it, then take a row out of the list. */
function pick(current: string, choice: string): void {
  fireEvent.click(screen.getByRole('button', { name: current }))
  fireEvent.click(screen.getByRole('option', { name: choice }))
}

describe('Reservation', () => {
  it('carries the design form: two pickers, the three fields and the pill', () => {
    render(<Reservation />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(RESERVATION_TITLE)
    expect(screen.getByText(RESERVATION_LEAD)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: `${MEAL_LABEL} Meal 1` })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: `${GUESTS_LABEL} 1 Guest` })).toBeInTheDocument()
    expect(field(RESERVATION_FIELDS.name)).toHaveValue('')
    expect(field(RESERVATION_FIELDS.email)).toHaveValue('')
    expect(field(RESERVATION_FIELDS.message)).toHaveValue('')
    expect(submit()).toBeInTheDocument()

    // The design's own form points at an empty action with no method: this one posts nowhere either.
    expect(form()).toHaveAttribute('novalidate')
    expect(form()).not.toHaveAttribute('action')
    expect(screen.queryByRole('status')).toBeNull()
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
  })

  it('blocks an empty reply, opens every error and puts the visitor in front of the first field', () => {
    render(<Reservation />)

    fireEvent.click(submit())

    const alerts = screen.getAllByRole('alert')

    expect(alerts).toHaveLength(3)
    expect(alerts[0]).toHaveTextContent(RESERVATION_NAME_ERROR)
    expect(alerts[1]).toHaveTextContent(RESERVATION_EMAIL_ERROR)
    expect(alerts[2]).toHaveTextContent(RESERVATION_MESSAGE_ERROR)
    expect(document.activeElement).toBe(field(RESERVATION_FIELDS.name))
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects an address the design own pattern rejects and points at that field', () => {
    render(<Reservation />)

    fireEvent.change(field(RESERVATION_FIELDS.name), { target: { value: 'Wren' } })
    fireEvent.change(field(RESERVATION_FIELDS.email), { target: { value: 'wren@example' } })
    fireEvent.change(field(RESERVATION_FIELDS.message), { target: { value: 'Two of us.' } })
    fireEvent.click(submit())

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent(RESERVATION_EMAIL_ERROR)
    expect(document.activeElement).toBe(field(RESERVATION_FIELDS.email))
    expect(field(RESERVATION_FIELDS.name)).toHaveValue('Wren')
  })

  it('points at the note when only the note is missing', () => {
    render(<Reservation />)

    fireEvent.change(field(RESERVATION_FIELDS.name), { target: { value: 'Wren' } })
    fireEvent.change(field(RESERVATION_FIELDS.email), { target: { value: 'wren@example.com' } })
    fireEvent.click(submit())

    expect(screen.getByRole('alert')).toHaveTextContent(RESERVATION_MESSAGE_ERROR)
    expect(document.activeElement).toBe(field(RESERVATION_FIELDS.message))
  })

  it('takes a complete reply with both choices, keeps every value and posts nowhere', () => {
    render(<Reservation />)

    fireEvent.change(field(RESERVATION_FIELDS.name), { target: { value: 'Wren' } })
    fireEvent.change(field(RESERVATION_FIELDS.email), { target: { value: 'wren@example.com' } })
    fireEvent.change(field(RESERVATION_FIELDS.message), { target: { value: 'Two of us, no shellfish.' } })
    pick(`${MEAL_LABEL} Meal 1`, 'Meal 2')
    pick(`${GUESTS_LABEL} 1 Guest`, '3 Guests')
    fireEvent.click(submit())

    expect(screen.getByRole('status')).toHaveTextContent(reservationConfirmed('Meal 2', '3 Guests'))
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(field(RESERVATION_FIELDS.name)).toHaveValue('Wren')
    expect(field(RESERVATION_FIELDS.email)).toHaveValue('wren@example.com')
    expect(field(RESERVATION_FIELDS.message)).toHaveValue('Two of us, no shellfish.')
    expect(screen.getByRole('button', { name: `${MEAL_LABEL} Meal 2` })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: `${GUESTS_LABEL} 3 Guests` })).toBeInTheDocument()

    // Nothing is navigated or posted: the submit handler closes the event out.
    expect(fireEvent.submit(form())).toBe(false)
  })

  it('answers with the picks in the message slot the design leaves under the button', () => {
    render(<Reservation />)

    fireEvent.change(field(RESERVATION_FIELDS.name), { target: { value: 'Elias' } })
    fireEvent.change(field(RESERVATION_FIELDS.email), { target: { value: 'elias@example.com' } })
    fireEvent.change(field(RESERVATION_FIELDS.message), { target: { value: 'Bringing the dog.' } })
    pick(`${MEAL_LABEL} Meal 1`, 'Meal 3')
    pick(`${GUESTS_LABEL} 1 Guest`, '2 Guests')
    fireEvent.click(submit())

    expect(screen.getByRole('status')).toHaveTextContent('Meal 3')
    expect(screen.getByRole('status')).toHaveTextContent('2 Guests')
  })
})
