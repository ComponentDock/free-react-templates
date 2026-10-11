import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NewsletterForm } from './NewsletterForm'

function renderForm() {
  const view = render(<NewsletterForm />)

  return { ...view, form: view.container.querySelector('form')! }
}

describe('NewsletterForm', () => {
  it('stacks the two wells and the subscribe pill inside one full-width form', () => {
    const { form } = renderForm()

    expect(form).toHaveClass('w-full')

    const name = screen.getByLabelText('Name')
    const email = screen.getByLabelText('Email')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    expect(form).toContainElement(name)
    expect(form).toContainElement(email)
    expect(form).toContainElement(button)
    expect(name.closest('div')).toHaveClass('mb-[10px]')
    expect(email.closest('div')).toHaveClass('mb-[20px]')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reveals a bubble per offending field on an invalid submit and never navigates', () => {
    const { form } = renderForm()
    const before = window.location.href

    fireEvent.submit(form)

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Valid email is required: ex@abc.xyz')).toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(2)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(window.location.href).toBe(before)
  })

  it('clears a field bubble once that field is focused', () => {
    const { form } = renderForm()

    fireEvent.submit(form)
    expect(screen.getAllByRole('alert')).toHaveLength(2)

    fireEvent.focus(screen.getByLabelText('Name'))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('clears the e-mail bubble once the e-mail field is focused', () => {
    const { form } = renderForm()

    fireEvent.submit(form)
    fireEvent.focus(screen.getByLabelText('Email'))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.queryByText('Valid email is required: ex@abc.xyz')).not.toBeInTheDocument()
    expect(screen.getByText('Name is required')).toBeInTheDocument()
  })

  it('rejects a malformed e-mail', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example' } })
    fireEvent.submit(form)

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    expect(screen.getByText('Valid email is required: ex@abc.xyz')).toBeInTheDocument()
  })

  it('acknowledges a valid submit in place', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example.com' } })
    fireEvent.submit(form)

    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent(/the moment we launch/i)
  })

  it('drops the acknowledgement again when the next submit is invalid', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example.com' } })
    fireEvent.submit(form)
    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: '' } })
    fireEvent.submit(form)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('Valid email is required: ex@abc.xyz')
  })

  it('keeps the typed values in state', () => {
    renderForm()

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example.com' } })

    expect(screen.getByLabelText('Email')).toHaveValue('ada@example.com')
  })

  it('accepts a className override on the form', () => {
    const { form } = renderForm()

    expect(form).toBeInTheDocument()

    const { container } = render(<NewsletterForm className="gap-3" />)

    expect(container.querySelector('form')).toHaveClass('gap-3')
  })
})
