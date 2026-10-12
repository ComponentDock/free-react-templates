import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event'
import {
  GUESTS,
  MEALS,
  RESERVATION_CONFIRMED,
  RESERVATION_CTA,
  RESERVATION_FIELDS,
  RESERVATION_HEADING,
  RESERVATION_INVALID,
} from '../lib/site'
import { Reservation } from './Reservation'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

async function confirm(user: UserEvent): Promise<void> {
  await user.click(screen.getByRole('button', { name: RESERVATION_CTA }))
}

describe('the reservation card', () => {
  it('asks for the name, the address and the two choices', () => {
    const { container } = render(<Reservation />)

    expect(screen.getByRole('heading', { name: RESERVATION_HEADING })).toBeInTheDocument()

    const name = screen.getByLabelText(RESERVATION_FIELDS.name)
    const email = screen.getByLabelText(RESERVATION_FIELDS.email)
    const meal = screen.getByLabelText(RESERVATION_FIELDS.meal)
    const guests = screen.getByLabelText(RESERVATION_FIELDS.guests)

    expect(name).toHaveAttribute('type', 'text')
    expect(email).toHaveAttribute('type', 'email')
    expect(Array.from(meal.querySelectorAll('option')).map((option) => option.textContent)).toEqual([
      ...MEALS,
    ])
    expect(
      Array.from(guests.querySelectorAll('option')).map((option) => option.textContent),
    ).toEqual([...GUESTS])
    expect(tokens(name)).toContain('rounded-none')
    expect(container.querySelectorAll('form[novalidate]')).toHaveLength(1)
    expect(container.querySelectorAll('[data-ornament]')).toHaveLength(2)
  })

  it('confirms the reply once the name and the address are in', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    expect(screen.queryByRole('status')).toBeNull()

    await user.type(screen.getByLabelText(RESERVATION_FIELDS.name), 'Marta Ellery')
    await user.type(screen.getByLabelText(RESERVATION_FIELDS.email), 'marta@ellery.example')
    await user.selectOptions(screen.getByLabelText(RESERVATION_FIELDS.meal), 'Coastal menu')
    await user.selectOptions(screen.getByLabelText(RESERVATION_FIELDS.guests), 'Two guests')
    await confirm(user)

    expect(screen.getByRole('status')).toHaveTextContent(RESERVATION_CONFIRMED)
    expect(screen.getByLabelText(RESERVATION_FIELDS.meal)).toHaveValue('Coastal menu')
    expect(screen.getByLabelText(RESERVATION_FIELDS.guests)).toHaveValue('Two guests')
  })

  it('holds the reply back while the name or the address is missing', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await confirm(user)
    expect(screen.getByRole('status')).toHaveTextContent(RESERVATION_INVALID)

    await user.type(screen.getByLabelText(RESERVATION_FIELDS.name), 'Marta Ellery')
    await confirm(user)
    expect(screen.getByRole('status')).toHaveTextContent(RESERVATION_INVALID)

    await user.type(screen.getByLabelText(RESERVATION_FIELDS.email), 'not-an-address')
    await confirm(user)
    expect(screen.getByRole('status')).toHaveTextContent(RESERVATION_INVALID)
  })

  it('never leaves the page when it is sent', () => {
    render(<Reservation />)

    const button = screen.getByRole('button', { name: RESERVATION_CTA })
    const form = button.closest('form') as HTMLFormElement

    expect(form).not.toHaveAttribute('action')
    expect(fireEvent.submit(form)).toBe(false)
    expect(screen.queryByRole('status')).not.toBeNull()
  })
})
