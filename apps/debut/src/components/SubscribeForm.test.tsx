import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from './SubscribeForm'

describe('SubscribeForm', () => {
  it('renders a name field, an email field and the subscribe button', () => {
    render(<SubscribeForm />)

    expect(screen.getByLabelText('Your Name')).toHaveAttribute('placeholder', 'Your Name')
    expect(screen.getByLabelText('Email Address')).toHaveAttribute('placeholder', 'Email Address')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toHaveAttribute('type', 'submit')
  })

  it('flags every empty field on submit', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(2)
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Email Address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('rejects a malformed email address', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada')
    await user.type(screen.getByLabelText('Email Address'), 'nope')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent(/^Email is required/)
    expect(screen.getByLabelText('Your Name')).not.toHaveAttribute('aria-invalid')
  })

  it('clears a field bubble as soon as the field is focused', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getAllByRole('alert')).toHaveLength(2)

    await user.click(screen.getByLabelText('Your Name'))

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(1)
    expect(alerts[0]).toHaveTextContent(/^Email is required/)
  })

  it('accepts a valid subscription without navigating away', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email Address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent(/we’ll let you know the moment we launch/i)
    expect(screen.getByLabelText('Your Name')).toHaveValue('Ada Lovelace')
  })

  it('hides the confirmation again when a later submit is invalid', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada')
    await user.type(screen.getByLabelText('Email Address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    await user.clear(screen.getByLabelText('Your Name'))
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByText('Name is required')).toBeInTheDocument()
  })

  it('merges a className override', () => {
    const { container } = render(<SubscribeForm className="mt-8" />)
    expect(container.querySelector('form')).toHaveClass('mt-8')
  })
})
