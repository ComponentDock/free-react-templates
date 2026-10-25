import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BookingCard } from '../components/BookingCard'
import { SYMPTOMS, SYMPTOM_PROMPT } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

const submit = () => screen.getByRole('button', { name: 'Book the location' }).closest('form')!

describe('BookingCard', () => {
  it('renders the three fields with the prompt first in the select', () => {
    render(<BookingCard />)

    expect(screen.getByRole('heading', { level: 2, name: 'Book a leak location' })).toBeVisible()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toHaveAttribute('type', 'tel')
    expect(screen.getByLabelText('What have you noticed?')).toHaveValue('')
    expect(screen.getAllByRole('option')).toHaveLength(SYMPTOMS.length + 1)
    expect(screen.getAllByRole('option')[0]).toHaveTextContent(SYMPTOM_PROMPT)
    expect(screen.getByText(/No obligation\. You keep the report/)).toHaveClass('text-ink-400')
  })

  it('blocks an empty submit, marks all three and focuses the first', async () => {
    const user = userEvent.setup()
    render(<BookingCard />)
    const name = screen.getByLabelText('Your name')
    const phone = screen.getByLabelText('Phone')
    const symptom = screen.getByLabelText('What have you noticed?')

    await user.click(screen.getByRole('button', { name: 'Book the location' }))

    expect(screen.getAllByText('This field is required')).toHaveLength(3)
    expect(name).toHaveAttribute('aria-invalid', 'true')
    expect(name).toHaveAttribute('aria-describedby', 'booking-name-error')
    expect(phone).toHaveAttribute('aria-invalid', 'true')
    expect(phone).toHaveAttribute('aria-describedby', 'booking-phone-error')
    expect(symptom).toHaveAttribute('aria-invalid', 'true')
    expect(symptom).toHaveAttribute('aria-describedby', 'booking-symptom-error')
    expect(name).toHaveFocus()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('moves focus to the phone once the name is filled', async () => {
    const user = userEvent.setup()
    render(<BookingCard />)

    await user.type(screen.getByLabelText('Your name'), 'Marta Reyes')
    await user.click(screen.getByRole('button', { name: 'Book the location' }))

    expect(screen.getByLabelText('Phone')).toHaveFocus()
    expect(screen.getByLabelText('Your name')).not.toHaveAttribute('aria-invalid', 'true')
    expect(screen.getAllByText('This field is required')).toHaveLength(2)
    expect(screen.getByLabelText('Phone')).toHaveAttribute('aria-describedby', 'booking-phone-error')
  })

  it('keeps focus on the phone while it is too short', async () => {
    const user = userEvent.setup()
    render(<BookingCard />)

    await user.type(screen.getByLabelText('Your name'), 'Marta Reyes')
    await user.type(screen.getByLabelText('Phone'), '555-1301')
    await user.click(screen.getByRole('button', { name: 'Book the location' }))

    expect(screen.getByLabelText('Phone')).toHaveFocus()
    expect(screen.getByLabelText('Phone')).toHaveClass('field-error')
  })

  it('moves focus to the select once name and phone are good', async () => {
    const user = userEvent.setup()
    render(<BookingCard />)

    await user.type(screen.getByLabelText('Your name'), 'Marta Reyes')
    await user.type(screen.getByLabelText('Phone'), '(555) 130-1300')
    await user.click(screen.getByRole('button', { name: 'Book the location' }))

    expect(screen.getByLabelText('What have you noticed?')).toHaveFocus()
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('books a complete form, resets the fields and shows the toast', async () => {
    const user = userEvent.setup()
    render(<BookingCard />)

    await user.type(screen.getByLabelText('Your name'), 'Marta Reyes')
    await user.type(screen.getByLabelText('Phone'), '(555) 130-1300')
    await user.selectOptions(
      screen.getByLabelText('What have you noticed?'),
      'Warm patch on the floor',
    )
    await user.click(screen.getByRole('button', { name: 'Book the location' }))

    expect(screen.getByLabelText('Your name')).toHaveValue('')
    expect(screen.getByLabelText('Phone')).toHaveValue('')
    expect(screen.getByLabelText('What have you noticed?')).toHaveValue('')
    expect(screen.getByRole('status')).toHaveTextContent(
      'Booked — we will confirm the window by text.',
    )
  })

  it('validates each field on blur and clears the message as it is corrected', async () => {
    const user = userEvent.setup()
    render(<BookingCard />)

    const name = screen.getByLabelText('Your name')
    await user.click(name)
    await user.tab()
    expect(document.getElementById('booking-name-error')).toHaveTextContent(
      'This field is required',
    )

    const phone = screen.getByLabelText('Phone')
    await user.click(phone)
    await user.tab()
    expect(document.getElementById('booking-phone-error')).toHaveTextContent(
      'This field is required',
    )

    const symptom = screen.getByLabelText('What have you noticed?')
    await user.click(symptom)
    await user.tab()
    expect(document.getElementById('booking-symptom-error')).toHaveTextContent(
      'This field is required',
    )

    await user.type(name, 'M')
    await user.type(phone, '5551301300')
    await user.selectOptions(symptom, SYMPTOMS[0]!)

    expect(document.getElementById('booking-name-error')).toBeNull()
    expect(document.getElementById('booking-phone-error')).toBeNull()
    expect(document.getElementById('booking-symptom-error')).toBeNull()
  })

  it('dismisses the toast after the house four seconds', () => {
    vi.useFakeTimers()
    render(<BookingCard />)

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Marta' } })
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '5551301300' } })
    fireEvent.change(screen.getByLabelText('What have you noticed?'), {
      target: { value: SYMPTOMS[0]! },
    })
    fireEvent.submit(submit())

    expect(screen.getByRole('status')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('keeps a single toast when the form is submitted twice', () => {
    vi.useFakeTimers()
    render(<BookingCard />)

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Marta' } })
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '5551301300' } })
    fireEvent.change(screen.getByLabelText('What have you noticed?'), {
      target: { value: SYMPTOMS[0]! },
    })
    fireEvent.submit(submit())
    fireEvent.submit(submit())

    expect(screen.getAllByRole('status')).toHaveLength(1)
  })
})
