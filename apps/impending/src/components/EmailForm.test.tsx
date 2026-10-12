import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { EmailForm } from './EmailForm'
import { EMAIL_MESSAGE } from '../lib/validation'

function renderForm() {
  const view = render(<EmailForm />)

  return { ...view, form: view.container.querySelector('form')! }
}

describe('EmailForm', () => {
  it('lays the 500×60 translucent well out with an 80px submit lane', () => {
    const { form } = renderForm()

    expect(form).toHaveClass('w-full', 'pt-[55px]')

    const well = screen.getByTestId('email-well')

    expect(well).toHaveClass(
      'group',
      'relative',
      'h-[60px]',
      'w-[500px]',
      'max-w-full',
      'bg-white/10',
      'pr-[80px]',
      'max-[992px]:mx-auto',
    )

    const input = screen.getByLabelText('Your email address')

    expect(input).toHaveAttribute('placeholder', 'Your email address')
    expect(input).toHaveClass(
      'block',
      'h-full',
      'w-full',
      'bg-transparent',
      'pr-[15px]',
      'pl-[25px]',
      'font-sans',
      'text-[15px]',
      'text-white',
      'placeholder:text-white',
      'transition-all',
      'duration-[400ms]',
      'focus:bg-white/[0.12]',
    )
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit email' }).parentElement).toBe(well)
  })

  it('blocks an empty submit and reveals the bubble', () => {
    const { form } = renderForm()
    const before = window.location.href

    expect(fireEvent.submit(form)).toBe(false)

    const input = screen.getByLabelText('Your email address')

    expect(screen.getByRole('alert')).toHaveTextContent(EMAIL_MESSAGE)
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'impending-email-error')
    expect(window.location.href).toBe(before)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects a malformed address with the same single line', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example' },
    })

    expect(fireEvent.submit(form)).toBe(false)
    expect(screen.getByRole('alert')).toHaveTextContent(EMAIL_MESSAGE)
  })

  it('clears the error state once the field is focused', () => {
    const { form } = renderForm()

    fireEvent.submit(form)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.focus(screen.getByLabelText('Your email address'))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('lets a valid address through and acknowledges it in place', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example.com' },
    })

    // the submit is not blocked, and no bubble is raised
    expect(fireEvent.submit(form)).toBe(true)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/the moment we launch/i)
  })

  it('drops the acknowledgement again when the next submit is invalid', () => {
    const { form } = renderForm()

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.submit(form)
    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Your email address'), { target: { value: '' } })

    expect(fireEvent.submit(form)).toBe(false)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('keeps the typed value in state', () => {
    renderForm()

    fireEvent.change(screen.getByLabelText('Your email address'), {
      target: { value: 'ada@example.com' },
    })

    expect(screen.getByLabelText('Your email address')).toHaveValue('ada@example.com')
  })

  it('accepts a className override on the form', () => {
    const { container } = render(<EmailForm className="pt-0" />)

    expect(container.querySelector('form')).toHaveClass('pt-0')
  })
})
