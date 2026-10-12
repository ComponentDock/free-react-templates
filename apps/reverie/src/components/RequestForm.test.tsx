import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RequestForm } from './RequestForm'
import {
  EMAIL_ERROR,
  GUEST_OPTIONS,
  GUESTS_ERROR,
  NAME_ERROR,
  REQUEST_FORM_LABEL,
  REQUEST_LEAD,
  REQUEST_SUBMIT_LABEL,
  REQUEST_SUCCESS,
  REQUEST_TITLE,
  SERVICE_ERROR,
  SERVICE_OPTIONS,
} from '../lib/site'

function fill(label: string, value: string) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } })
}

function complete() {
  fill('Name', 'Amara Whitlock')
  fill('Email', 'amara@example.org')
  fill('Services', 'Restaurant')
  fill('Guest', '50 to 100')
}

describe('RequestForm', () => {
  it('renders the olive header block over the white four-field panel', () => {
    render(<RequestForm />)

    expect(screen.getByRole('heading', { level: 2, name: REQUEST_TITLE })).toBeInTheDocument()
    expect(screen.getByText(REQUEST_LEAD)).toBeInTheDocument()
    expect(screen.getByRole('form', { name: REQUEST_FORM_LABEL })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: REQUEST_SUBMIT_LABEL })).toBeInTheDocument()
  })

  it('carries the design own option lists, with the label as the value', () => {
    render(<RequestForm />)

    const service = screen.getByLabelText('Services')
    const guest = screen.getByLabelText('Guest')

    expect(service.tagName).toBe('SELECT')
    expect(guest.tagName).toBe('SELECT')
    expect(within(service).getAllByRole('option')).toHaveLength(SERVICE_OPTIONS.length + 1)
    expect(within(guest).getAllByRole('option')).toHaveLength(GUEST_OPTIONS.length + 1)
    expect(within(service).getByRole('option', { name: 'Live Music & DJ' })).toHaveValue(
      'Live Music & DJ',
    )
    expect(within(guest).getByRole('option', { name: 'More than 200' })).toHaveValue(
      'More than 200',
    )
    expect(within(guest).getByRole('option', { name: 'Guest' })).toHaveValue('')
  })

  it('answers every empty field at once and puts the visitor on the first of them', () => {
    render(<RequestForm />)

    const form = screen.getByRole('form', { name: REQUEST_FORM_LABEL })

    expect(fireEvent.submit(form)).toBe(false)
    expect(screen.getByText(NAME_ERROR)).toBeInTheDocument()
    expect(screen.getByText(EMAIL_ERROR)).toBeInTheDocument()
    expect(screen.getByText(SERVICE_ERROR)).toBeInTheDocument()
    expect(screen.getByText(GUESTS_ERROR)).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-describedby', 'reverie-name-error')
    expect(document.activeElement).toBe(screen.getByLabelText('Name'))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks a malformed mailbox, then confirms the enquiry in place', () => {
    render(<RequestForm />)

    complete()
    fill('Email', 'amara@example')

    fireEvent.submit(screen.getByRole('form', { name: REQUEST_FORM_LABEL }))

    expect(screen.getByText(EMAIL_ERROR)).toBeInTheDocument()
    expect(screen.queryByText(NAME_ERROR)).not.toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByLabelText('Email'))

    fill('Email', 'amara@example.org')
    fireEvent.submit(screen.getByRole('form', { name: REQUEST_FORM_LABEL }))

    expect(screen.getByRole('status')).toHaveTextContent(REQUEST_SUCCESS)
    expect(screen.queryByRole('form', { name: REQUEST_FORM_LABEL })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: REQUEST_SUBMIT_LABEL })).not.toBeInTheDocument()
  })

  it('keeps every control addressed by a label', () => {
    render(<RequestForm />)

    for (const label of ['Name', 'Email', 'Services', 'Guest']) {
      expect(screen.getByLabelText(label)).toBeInstanceOf(HTMLElement)
    }
  })
})
