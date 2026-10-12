import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Rsvp, validateReply } from './Rsvp'
import {
  RSVP_EMAIL_ERROR,
  RSVP_EMAIL_INVALID_ERROR,
  RSVP_EMAIL_LABEL,
  RSVP_EVENT_OPTIONS,
  RSVP_EYEBROW,
  RSVP_GUEST_LABEL,
  RSVP_GUEST_OPTIONS,
  RSVP_HEADING,
  RSVP_NAME_ERROR,
  RSVP_NAME_LABEL,
  RSVP_NOTE,
  RSVP_SIDE_BODY,
  RSVP_SIDE_HEADING,
  RSVP_SUBMIT,
  RSVP_SUCCESS,
  replyReceived,
} from '../lib/site'
import { rsvpCardClass, rsvpFieldClass, rsvpSelectClass } from '../lib/styles'

const GOOD_REPLY = { name: 'Ada', email: 'ada@example.com', guests: '', event: '' }

describe('validateReply — the two fields that have to be filled in', () => {
  it('asks for a name and an address when neither is given', () => {
    expect(validateReply({ name: '', email: '', guests: '', event: '' })).toEqual({
      name: RSVP_NAME_ERROR,
      email: RSVP_EMAIL_ERROR,
    })
  })

  it('asks for a name even when the address is there', () => {
    expect(validateReply({ ...GOOD_REPLY, name: '   ' })).toEqual({ name: RSVP_NAME_ERROR })
  })

  it('pushes back on an address that is not an address', () => {
    expect(validateReply({ ...GOOD_REPLY, email: 'ada@example' })).toEqual({
      email: RSVP_EMAIL_INVALID_ERROR,
    })
  })

  it('passes a reply that can actually be answered', () => {
    expect(validateReply(GOOD_REPLY)).toEqual({})
  })
})

describe('Rsvp — the card that floats out of its band', () => {
  it('sets the form up on the gold-accented card, with the copy beside it turned white', () => {
    render(<Rsvp />)

    const block = screen.getByTestId('seat')

    expect(block).toHaveAttribute('aria-labelledby', 'seat-heading')

    const card = within(block).getByTestId('rsvp-card')

    expect(card.className).toBe(rsvpCardClass)
    expect(within(card as HTMLElement).getByText(RSVP_EYEBROW)).toBeInTheDocument()
    expect(within(card as HTMLElement).getByRole('heading', { level: 2 }).textContent).toBe(
      RSVP_HEADING,
    )
    expect(within(card as HTMLElement).getByText(RSVP_NOTE)).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: RSVP_SIDE_HEADING })).toBeInTheDocument()
    expect(screen.getByText(RSVP_SIDE_BODY)).toBeInTheDocument()
  })

  it('carries the design’s four fields, each on its own hairline, over one gold button', () => {
    render(<Rsvp />)

    const name = screen.getByPlaceholderText(RSVP_NAME_LABEL)
    const email = screen.getByPlaceholderText(RSVP_EMAIL_LABEL)

    expect(name.className).toBe(rsvpFieldClass)
    expect(email.className).toBe(rsvpFieldClass)

    const guests = screen.getByLabelText(RSVP_GUEST_LABEL)
    const parts = screen.getByLabelText('Which Parts')

    expect(guests.tagName).toBe('SELECT')
    expect(guests.className).toBe(rsvpSelectClass)
    expect(parts.className).toBe(rsvpSelectClass)
    expect(within(guests).getAllByRole('option').map((option) => option.textContent)).toEqual([
      RSVP_GUEST_LABEL,
      ...RSVP_GUEST_OPTIONS,
    ])
    expect(within(parts).getAllByRole('option').map((option) => option.textContent)).toEqual([
      'Which Parts',
      ...RSVP_EVENT_OPTIONS,
    ])

    expect(screen.getByRole('button', { name: RSVP_SUBMIT })).toHaveAttribute('type', 'submit')
  })

  it('keeps a half-filled reply back, and says exactly what is missing', async () => {
    const user = userEvent.setup()

    render(<Rsvp />)

    await user.click(screen.getByRole('button', { name: RSVP_SUBMIT }))

    expect(screen.getByText(RSVP_NAME_ERROR)).toBeInTheDocument()
    expect(screen.getByText(RSVP_EMAIL_ERROR)).toBeInTheDocument()
    expect(screen.queryByTestId('reply-sent')).toBeNull()

    await user.type(screen.getByPlaceholderText(RSVP_NAME_LABEL), 'Ada')
    await user.type(screen.getByPlaceholderText(RSVP_EMAIL_LABEL), 'ada@example')

    expect(screen.queryByText(RSVP_NAME_ERROR)).toBeNull()
    expect(screen.queryByText(RSVP_EMAIL_ERROR)).toBeNull()

    await user.click(screen.getByRole('button', { name: RSVP_SUBMIT }))

    expect(screen.getByText(RSVP_EMAIL_INVALID_ERROR)).toBeInTheDocument()
    expect(screen.queryByTestId('reply-sent')).toBeNull()
  })

  it('takes the whole reply once it can be answered, and names the address back', async () => {
    const user = userEvent.setup()

    render(<Rsvp />)

    await user.type(screen.getByPlaceholderText(RSVP_NAME_LABEL), 'Ada Ferrow')
    await user.type(screen.getByPlaceholderText(RSVP_EMAIL_LABEL), 'ada@example.com')
    await user.selectOptions(screen.getByLabelText(RSVP_GUEST_LABEL), RSVP_GUEST_OPTIONS[1])
    await user.selectOptions(screen.getByLabelText('Which Parts'), RSVP_EVENT_OPTIONS[2])

    expect(screen.getByLabelText(RSVP_GUEST_LABEL)).toHaveValue(RSVP_GUEST_OPTIONS[1])
    expect(screen.getByLabelText('Which Parts')).toHaveValue(RSVP_EVENT_OPTIONS[2])

    await user.click(screen.getByRole('button', { name: RSVP_SUBMIT }))

    const sent = screen.getByTestId('reply-sent')

    expect(within(sent).getByText(RSVP_SUCCESS)).toBeInTheDocument()
    expect(within(sent).getByText(replyReceived('ada@example.com'))).toBeInTheDocument()
    expect(screen.queryByPlaceholderText(RSVP_NAME_LABEL)).toBeNull()
  })
})
