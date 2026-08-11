import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Reservation } from './Reservation'
import {
  RESERVATION_FIELDS,
  RESERVATION_PERSON_OPTIONS,
  RESERVATION_SUBMIT,
  RESERVATION_SUCCESS,
} from '../data'

describe('Reservation', () => {
  it('renders the heading, labeled fields, person select and map placeholder', () => {
    const { container } = render(<Reservation />)

    expect(screen.getByRole('heading', { level: 2, name: 'Make Reservation' })).toBeInTheDocument()
    expect(container.querySelector('.font-script')).toHaveTextContent('Book a table')

    for (const field of RESERVATION_FIELDS) {
      expect(screen.getByLabelText(field.label)).toBeInTheDocument()
    }
    const personSelect = screen.getByLabelText('Person') as HTMLSelectElement
    expect(personSelect.options.length).toBe(RESERVATION_PERSON_OPTIONS.length)

    expect(screen.getByRole('button', { name: RESERVATION_SUBMIT })).toBeInTheDocument()
    // Map placeholder with the pinned address line.
    expect(screen.getByText('Palate Restaurant — City Center')).toBeInTheDocument()
  })

  it('shows a success message when the form is submitted', () => {
    render(<Reservation />)

    fireEvent.submit(screen.getByLabelText('Name').closest('form')!)

    expect(screen.getByRole('status')).toHaveTextContent(RESERVATION_SUCCESS)
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: RESERVATION_SUBMIT })).not.toBeInTheDocument()
  })
})
