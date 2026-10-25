import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { contact } from '../data'

describe('Contact', () => {
  it('lays out first name, last name, e-mail and a ten-row message', () => {
    const { container } = render(<Contact />)

    expect(screen.getByLabelText('First name')).toHaveClass('h-[55px]', 'border-field')
    expect(screen.getByLabelText('Last name')).toHaveClass('h-[55px]')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText('Message')).toHaveAttribute('rows', '10')

    expect(screen.getByRole('button', { name: 'Send Message' })).toHaveClass(
      'w-full',
      'bg-brand',
    )
    expect(container.querySelector('form')).toHaveClass('max-w-[760px]')
    expect(screen.getByRole('heading', { level: 2, name: contact.heading })).toHaveClass(
      'text-brand',
    )
  })

  it('reports every empty field and focuses the first one', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Tell us your first name.')).toBeInTheDocument()
    expect(screen.getByText('Tell us your last name.')).toBeInTheDocument()
    expect(screen.getByText('Tell us where we should reply.')).toBeInTheDocument()
    expect(screen.getByText('Add a short description of the shipment.')).toBeInTheDocument()

    expect(screen.getByLabelText('First name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Message')).toHaveAttribute('aria-invalid', 'true')
    expect(document.activeElement).toBe(screen.getByLabelText('First name'))
    expect(screen.getByRole('status')).toHaveTextContent('')
  })

  it('rejects a malformed e-mail address', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('First name'), 'Ada')
    await user.type(screen.getByLabelText('Last name'), 'Farrell')
    await user.type(screen.getByLabelText('Email address'), 'ada.farrell')
    await user.type(screen.getByLabelText('Message'), 'Two pallets, Rotterdam.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Use an e-mail address we can reply to.')).toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByLabelText('Email address'))
  })

  it('focuses the message box when it is the only invalid field', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('First name'), 'Ada')
    await user.type(screen.getByLabelText('Last name'), 'Farrell')
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Add a short description of the shipment.')).toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByLabelText('Message'))
  })

  it('confirms a valid submission and resets the form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('First name'), 'Ada')
    await user.type(screen.getByLabelText('Last name'), 'Farrell')
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.type(screen.getByLabelText('Message'), 'Two pallets, Rotterdam.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — the desk has your message and replies the same day.',
    )
    expect(screen.getByLabelText('First name')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
    expect(screen.queryByText('Tell us your first name.')).not.toBeInTheDocument()
  })
})
