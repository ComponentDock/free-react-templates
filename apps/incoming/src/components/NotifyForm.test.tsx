import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NotifyForm } from './NotifyForm'

describe('NotifyForm', () => {
  it('renders the grey field beside the purple Get Notified button', () => {
    render(<NotifyForm />)

    const input = screen.getByLabelText('Email Address')
    expect(input).toHaveAttribute('placeholder', 'Your Email')
    expect(input).toHaveClass('text-brand', 'text-[15px]')
    expect(input.parentElement).toHaveClass(
      'bg-well',
      'h-[40px]',
      'w-[220px]',
      'rounded-field',
      'mt-[20px]',
    )
    expect(screen.getByRole('button', { name: 'Get Notified' })).toHaveClass(
      'bg-brand',
      'min-w-[120px]',
      'h-[40px]',
      'rounded-field',
      'hover:bg-ink',
    )
  })

  it('rejects an empty address and an invalid one with the warning bubble', async () => {
    const user = userEvent.setup()
    render(<NotifyForm />)

    await user.click(screen.getByRole('button', { name: 'Get Notified' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required')

    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'hello@')
    await user.click(screen.getByRole('button', { name: 'Get Notified' }))

    const bubble = screen.getByRole('alert')
    expect(bubble).toHaveTextContent('Valid email is required: ex@abc.xyz')
    expect(bubble).toHaveClass('border-error', 'text-error', 'rounded-bubble', 'right-[12px]')
    expect(bubble).toHaveClass('invisible', 'opacity-0', 'group-hover:visible')
    expect(bubble).toHaveClass('max-[992px]:visible', 'max-[992px]:opacity-100')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'incoming-email-error')
  })

  it('clears the warning when the field is focused', async () => {
    const user = userEvent.setup()
    render(<NotifyForm />)

    await user.click(screen.getByRole('button', { name: 'Get Notified' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Email Address'))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('reveals the focus ring while the field has focus and hides it on blur', async () => {
    const user = userEvent.setup()
    const { container } = render(<NotifyForm />)

    const ring = () => container.querySelector('span[aria-hidden="true"]')
    expect(ring()).toHaveClass('invisible', 'opacity-0', 'scale-x-110')

    await user.click(screen.getByLabelText('Email Address'))
    expect(ring()).toHaveClass('visible', 'opacity-100', 'scale-100', 'border-brand')

    await user.tab()
    expect(ring()).toHaveClass('invisible', 'opacity-0')
  })

  it('accepts a valid address as React state without navigating', async () => {
    const user = userEvent.setup()
    render(<NotifyForm />)

    await user.type(screen.getByLabelText('Email Address'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Get Notified' }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/thanks/i)
  })

  it('drops a stale confirmation once a later submit is invalid', async () => {
    const user = userEvent.setup()
    render(<NotifyForm />)

    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Get Notified' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    await user.clear(input)
    await user.click(screen.getByRole('button', { name: 'Get Notified' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('accepts a className override', () => {
    const { container } = render(<NotifyForm className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
