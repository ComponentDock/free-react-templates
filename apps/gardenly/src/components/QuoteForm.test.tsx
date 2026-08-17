import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteForm } from './QuoteForm'
import { FORM } from '../data'

describe('QuoteForm', () => {
  it('renders the label, heading, intro, and all form fields', () => {
    render(<QuoteForm />)
    expect(screen.getByText(FORM.label)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText(FORM.fields.name)).toBeInTheDocument()
    expect(screen.getByLabelText(FORM.fields.email)).toBeInTheDocument()
    expect(screen.getByLabelText('Service')).toBeInTheDocument()
    expect(screen.getByLabelText(FORM.fields.message)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: FORM.submit })).toBeInTheDocument()
  })

  it('renders the service options in the select', () => {
    render(<QuoteForm />)
    const select = screen.getByLabelText('Service')
    for (const option of FORM.serviceOptions) {
      expect(select).toHaveTextContent(option)
    }
  })

  it('shows validation errors when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.click(screen.getByRole('button', { name: FORM.submit }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email address.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a service.')).toBeInTheDocument()
    expect(screen.getByText('Please tell us about your project.')).toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText(FORM.fields.name), 'Ada Lovelace')
    await user.type(screen.getByLabelText(FORM.fields.email), 'not-an-email')
    await user.selectOptions(screen.getByLabelText('Service'), FORM.serviceOptions[0]!)
    await user.type(screen.getByLabelText(FORM.fields.message), 'I need a hedge trim.')
    await user.click(screen.getByRole('button', { name: FORM.submit }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('shows a success message and resets the form after a valid submission', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.type(screen.getByLabelText(FORM.fields.name), 'Ada Lovelace')
    await user.type(screen.getByLabelText(FORM.fields.email), 'ada@example.com')
    await user.selectOptions(screen.getByLabelText('Service'), FORM.serviceOptions[1]!)
    await user.type(screen.getByLabelText(FORM.fields.message), 'I need a hedge trim.')
    await user.click(screen.getByRole('button', { name: FORM.submit }))

    expect(screen.getByText('Thanks! Your request has been sent.').textContent).toBeTruthy()
    expect(screen.getByLabelText(FORM.fields.name)).toHaveValue('')
    expect(screen.getByLabelText(FORM.fields.email)).toHaveValue('')
    expect(screen.getByLabelText(FORM.fields.message)).toHaveValue('')
  })
})
