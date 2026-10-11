import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SubscribeForm } from './SubscribeForm'

function renderForm() {
  const view = render(<SubscribeForm />)

  return { ...view, form: view.container.querySelector('form')! }
}

describe('SubscribeForm', () => {
  it('lays the 490px well and the 170px button out in one centred row', () => {
    const { form } = renderForm()

    expect(form).toHaveClass('flex', 'w-full', 'flex-wrap', 'justify-center')

    const input = screen.getByLabelText('Email Address')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    expect(form).toContainElement(input)
    expect(form).toContainElement(button)
    expect(input.closest('div')).toHaveClass('w-[490px]', 'max-w-full', 'h-[50px]', 'mb-[20px]')
    expect(button).toHaveClass('min-w-[170px]', 'h-[50px]', 'mb-[20px]')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reveals the bubble on an invalid submit and never navigates', () => {
    const { form } = renderForm()
    const before = window.location.href

    fireEvent.submit(form)

    expect(screen.getByRole('alert')).toHaveTextContent('Valid email is required: ex@abc.xyz')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(window.location.href).toBe(before)
  })

  it('rejects a malformed e-mail', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'ada@example' } })
    fireEvent.submit(form)

    expect(screen.getByRole('alert')).toHaveTextContent('Valid email is required: ex@abc.xyz')
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

  it('keeps the typed value in state', () => {
    renderForm()

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'ada@example.com' },
    })

    expect(screen.getByLabelText('Email Address')).toHaveValue('ada@example.com')
  })

  it('accepts a className override on the form', () => {
    const { container } = render(<SubscribeForm className="gap-3" />)

    expect(container.querySelector('form')).toHaveClass('gap-3')
  })
})
