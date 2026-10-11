import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { QuoteForm } from './QuoteForm'

function fillValid() {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada Lovelace' } })
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example.com' } })
  fireEvent.change(screen.getByLabelText('Contact Number'), {
    target: { value: '+1 555-010-0142' },
  })
  fireEvent.change(screen.getByLabelText('Freight Type'), { target: { value: 'Express Delivery' } })
  fireEvent.change(screen.getByLabelText('City of Departure'), { target: { value: 'Newark' } })
}

describe('QuoteForm', () => {
  it('renders ten labeled fields, a freight select, four radios, and a submit button', () => {
    render(<QuoteForm />)
    expect(screen.getAllByRole('textbox')).toHaveLength(9)
    expect(screen.getByRole('combobox', { name: 'Freight Type' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(4)
    expect(screen.getByRole('button', { name: 'Request a Quote' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Freight' })).toBeChecked()
  })

  it('blocks submit with per-field errors when required fields are empty', () => {
    render(<QuoteForm />)
    fireEvent.click(screen.getByRole('button', { name: 'Request a Quote' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Please enter a contact number')).toBeInTheDocument()
    expect(screen.getByText('Please choose a freight type')).toBeInTheDocument()
    expect(screen.getByText('Please enter a city of departure')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects a malformed email even when other fields are filled', () => {
    render(<QuoteForm />)
    fillValid()
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: 'Request a Quote' }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('accepts a valid request with a local success state and can start another', () => {
    render(<QuoteForm />)
    fillValid()
    fireEvent.click(screen.getByRole('radio', { name: 'Insurance' }))
    expect(screen.getByRole('radio', { name: 'Insurance' })).toBeChecked()
    fireEvent.click(screen.getByLabelText('Incoterms'))
    fireEvent.change(screen.getByLabelText('Incoterms'), { target: { value: 'DAP' } })

    fireEvent.click(screen.getByRole('button', { name: 'Request a Quote' }))
    expect(screen.getByRole('status')).toHaveTextContent('Your request is in')

    fireEvent.click(screen.getByRole('button', { name: 'Send another request' }))
    expect(screen.getByRole('button', { name: 'Request a Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveValue('')
  })
})
