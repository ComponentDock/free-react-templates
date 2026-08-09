import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the discount offer, quote heading, and booking form', () => {
    render(<Cta />)

    expect(screen.getByRole('heading', { name: /20% discount/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get a quote' })).toBeInTheDocument()

    const form = screen.getByRole('form', { name: 'Booking form' })
    expect(form).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Number phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Choose services')).toBeInTheDocument()
    expect(screen.getByLabelText('Your message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book services' })).toBeInTheDocument()
  })

  it('shows a confirmation after submitting the form', async () => {
    const user = userEvent.setup()
    render(<Cta />)

    await user.type(screen.getByLabelText('Name'), 'Rachel Doe')
    await user.type(screen.getByLabelText('Number phone'), '+1 555-0100')
    await user.type(screen.getByLabelText('Email'), 'rachel@example.com')
    await user.selectOptions(screen.getByLabelText('Choose services'), 'Wedding makeup')
    await user.click(screen.getByRole('button', { name: 'Book services' }))

    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
  })
})
