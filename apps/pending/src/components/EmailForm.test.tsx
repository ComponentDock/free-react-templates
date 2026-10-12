import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { EmailForm } from './EmailForm'
import { EMAIL_MESSAGE } from '../lib/validation'

function renderForm() {
  const view = render(<EmailForm />)

  return { ...view, form: view.container.querySelector('form')! }
}

describe('EmailForm', () => {
  it('lays the 280×50 transparent well out with its label and submit lane', () => {
    const { form } = renderForm()

    expect(form).toHaveClass('my-[10px]', 'max-w-full')
    expect(form).toHaveAttribute('novalidate')

    const well = screen.getByTestId('email-well')

    expect(well).toHaveClass('group/well', 'relative', 'h-[50px]', 'w-[280px]', 'max-w-full')

    const field = screen.getByLabelText('Your email address')

    expect(field).toHaveValue('')
    expect(screen.getByRole('button', { name: 'Submit email' }).parentElement).toBe(well)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('blocks an empty submit, reveals the bubble and points the field at it', () => {
    const { form } = renderForm()
    const before = window.location.href

    expect(fireEvent.submit(form)).toBe(false)

    const field = screen.getByLabelText('Your email address')

    expect(screen.getByRole('alert')).toHaveTextContent(EMAIL_MESSAGE)
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAttribute('aria-describedby', 'pending-email-error')
    expect(window.location.href).toBe(before)
  })

  it('rejects a malformed address with the same single line', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example' },
    })

    expect(fireEvent.submit(form)).toBe(false)
    expect(screen.getByRole('alert')).toHaveTextContent(EMAIL_MESSAGE)
  })

  it('accepts a good address without navigating and keeps no success state', () => {
    const { form } = renderForm()
    const before = window.location.href

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example.com' },
    })

    expect(fireEvent.submit(form)).toBe(false)
    expect(window.location.href).toBe(before)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('drops the bubble again when the next submit is valid', () => {
    const { form } = renderForm()

    fireEvent.submit(form)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.submit(form)

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('clears the error state once the field is focused', () => {
    const { form } = renderForm()

    fireEvent.submit(form)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.focus(screen.getByLabelText('Your email address'))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('keeps the typed value in state', () => {
    renderForm()

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example.com' },
    })

    expect(screen.getByLabelText('Your email address')).toHaveValue('ada@example.com')
  })

  it('accepts a className override on the form', () => {
    const { container } = render(<EmailForm className="my-0" />)

    expect(container.querySelector('form')).toHaveClass('my-0')
  })
})
