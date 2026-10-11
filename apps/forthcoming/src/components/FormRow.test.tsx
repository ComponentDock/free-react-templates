import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { FormRow } from './FormRow'

function renderForm() {
  const view = render(<FormRow />)

  return { ...view, form: view.container.querySelector('form')! }
}

describe('FormRow', () => {
  it('lays the 500px pill field and the 160px pill button out in one centred row', () => {
    const { form } = renderForm()

    expect(form).toHaveClass('flex', 'w-full', 'flex-wrap', 'justify-center', 'pt-[70px]')

    const input = screen.getByLabelText('Email Address')
    const button = screen.getByRole('button', { name: 'Notify Me' })

    expect(form).toContainElement(input)
    expect(form).toContainElement(button)
    expect(input.closest('div')).toHaveClass('w-[500px]', 'h-[50px]', 'rounded-[25px]', 'mx-[5px]')
    expect(button).toHaveClass('min-w-[160px]', 'h-[50px]', 'rounded-[25px]', 'mx-[5px]')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reveals the bubble on an empty submit and never navigates', () => {
    const { form } = renderForm()
    const before = window.location.href

    fireEvent.submit(form)

    expect(screen.getByRole('alert')).toHaveTextContent('Email is required: ex@abc.xyz')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(window.location.href).toBe(before)
  })

  it('rejects a malformed e-mail', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'ada@example' } })
    fireEvent.submit(form)

    expect(screen.getByRole('alert')).toHaveTextContent('Email is required: ex@abc.xyz')
  })

  it('clears the bubble once the field is focused', () => {
    const { form } = renderForm()

    fireEvent.submit(form)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.focus(screen.getByLabelText('Email Address'))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('acknowledges a valid submit in place', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.submit(form)

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/the moment we launch/i)
  })

  it('drops the acknowledgement again when the next submit is invalid', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.submit(form)
    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: '' } })
    fireEvent.submit(form)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('accepts a className override', () => {
    const { form } = renderForm()

    expect(form).toHaveClass('pt-[70px]')
  })

  it('accepts a className override from the parent', () => {
    const { container } = render(<FormRow className="pt-0" />)

    expect(container.querySelector('form')).toHaveClass('pt-0')
  })
})
