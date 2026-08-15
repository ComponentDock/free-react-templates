import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Rsvp } from './Rsvp'
import {
  guestOptions,
  rsvpEmailError,
  rsvpEmailLabel,
  rsvpGuestsLabel,
  rsvpMessageLabel,
  rsvpNameError,
  rsvpNameLabel,
  rsvpSubtext,
  rsvpSuccessText,
  rsvpSuccessTitle,
  rsvpSubmitLabel,
  rsvpTitle,
} from '../data'

describe('Rsvp', () => {
  it('renders the title, subtext and all form fields', () => {
    render(<Rsvp />)
    expect(screen.getByRole('heading', { level: 2, name: rsvpTitle })).toBeInTheDocument()
    expect(screen.getByText(rsvpSubtext)).toBeInTheDocument()
    expect(screen.getByLabelText(rsvpNameLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(rsvpEmailLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(rsvpGuestsLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(rsvpMessageLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: rsvpSubmitLabel })).toBeInTheDocument()
  })

  it('blocks submission with validation errors and clears them on valid input', async () => {
    const user = userEvent.setup()
    render(<Rsvp />)
    await user.click(screen.getByRole('button', { name: rsvpSubmitLabel }))
    expect(screen.getByText(rsvpNameError)).toBeInTheDocument()
    expect(screen.getByText(rsvpEmailError)).toBeInTheDocument()

    await user.type(screen.getByLabelText(rsvpNameLabel), 'Anjelina Kona')
    await user.type(screen.getByLabelText(rsvpEmailLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: rsvpSubmitLabel }))
    expect(screen.queryByText(rsvpNameError)).not.toBeInTheDocument()
    expect(screen.getByText(rsvpEmailError)).toBeInTheDocument()
  })

  it('shows the success state for a valid RSVP', async () => {
    const user = userEvent.setup()
    render(<Rsvp />)
    await user.type(screen.getByLabelText(rsvpNameLabel), 'Anjelina Kona')
    await user.type(screen.getByLabelText(rsvpEmailLabel), 'anjelina@example.com')
    await user.selectOptions(screen.getByLabelText(rsvpGuestsLabel), guestOptions[2]!)
    await user.type(screen.getByLabelText(rsvpMessageLabel), 'See you there!')
    await user.click(screen.getByRole('button', { name: rsvpSubmitLabel }))

    expect(screen.getByRole('heading', { name: rsvpSuccessTitle })).toBeInTheDocument()
    expect(screen.getByText(rsvpSuccessText)).toBeInTheDocument()
    expect(screen.queryByLabelText(rsvpNameLabel)).not.toBeInTheDocument()
  })
})
