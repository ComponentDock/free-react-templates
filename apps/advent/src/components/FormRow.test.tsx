import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { FormRow } from './FormRow'

function renderRow() {
  const view = render(<FormRow />)

  return { ...view, form: view.container.querySelector('form')! }
}

describe('FormRow', () => {
  it('lays the three controls on one wrapping centred row', () => {
    const { form } = renderRow()

    expect(form).toHaveClass('flex', 'w-full', 'flex-wrap', 'items-center', 'justify-center')

    const name = screen.getByLabelText('Name')
    const email = screen.getByLabelText('Email')
    const button = screen.getByRole('button', { name: 'Get Updates' })

    expect(form).toContainElement(name)
    expect(form).toContainElement(email)
    expect(form).toContainElement(button)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reveals a bubble per offending field on an invalid submit and never navigates', () => {
    const { form } = renderRow()

    fireEvent.submit(form)

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required: ex@abc.xyz')).toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(2)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('clears a field bubble once that field is focused', () => {
    const { form } = renderRow()

    fireEvent.submit(form)
    expect(screen.getAllByRole('alert')).toHaveLength(2)

    fireEvent.focus(screen.getByLabelText('Name'))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('clears the e-mail bubble once the e-mail field is focused', () => {
    const { form } = renderRow()

    fireEvent.submit(form)
    expect(screen.getAllByRole('alert')).toHaveLength(2)

    fireEvent.focus(screen.getByLabelText('Email'))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.queryByText('Email is required: ex@abc.xyz')).not.toBeInTheDocument()
    expect(screen.getByText('Name is required')).toBeInTheDocument()
  })

  it('rejects a malformed e-mail', () => {
    const { form } = renderRow()

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example' } })
    fireEvent.submit(form)

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    expect(screen.getByText('Email is required: ex@abc.xyz')).toBeInTheDocument()
  })

  it('acknowledges a valid submit in place', () => {
    const { form } = renderRow()

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example.com' } })
    fireEvent.submit(form)

    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent(/in touch the moment we launch/i)
  })

  it('keeps the typed values in state', () => {
    renderRow()

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } })

    expect(screen.getByLabelText('Name')).toHaveValue('Ada')
  })

  it('accepts a className override', () => {
    const { container } = render(<FormRow className="gap-3" />)

    expect(container.firstElementChild).toHaveClass('gap-3')
  })
})
