import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { installMedia } from './helpers'

describe('Contact', () => {
  it('closes the page on the one saturated band, with both actions', () => {
    installMedia({ reduce: false })
    render(<Contact />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Three works are currently available' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Enquire about a work/ })).toHaveAttribute(
      'href',
      '#contact-form',
    )
    expect(screen.getByRole('link', { name: 'See the exhibition history' })).toHaveAttribute(
      'href',
      '#exhibitions',
    )
  })

  it('asks for a name, an address and a message before sending', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send enquiry' }))

    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.getByText('Please give a name I can reply to.')).toBeInTheDocument()
    expect(screen.getByText('An e-mail address is required.')).toBeInTheDocument()
    expect(screen.getByText('Please say which work this is about.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects an address it cannot use', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'A Collector')
    await user.type(screen.getByLabelText('E-mail'), 'collector@example')
    await user.type(screen.getByLabelText('Message'), 'Is the kitchen painting still free?')
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }))

    expect(
      screen.getByText('That address looks incomplete. Check it and send again.'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toHaveAttribute('aria-invalid', 'true')
  })

  it('confirms a complete enquiry in the studio voice, without a network call', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'A Collector')
    await user.type(screen.getByLabelText('E-mail'), 'collector@example.com')
    await user.type(screen.getByLabelText('Which work'), 'Kitchen, four in the afternoon')
    await user.type(screen.getByLabelText('Message'), 'May I see the surface in raking light?')
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }))

    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent(
      'Received. I answer enquiries on Thursdays and Fridays',
    )
    expect(screen.getByLabelText('E-mail')).not.toHaveAttribute('aria-invalid')
  })
})
