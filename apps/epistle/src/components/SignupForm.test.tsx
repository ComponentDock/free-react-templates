import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'
import { EMAIL_ID, ERROR_ID, FORM, HINT_ID, MESSAGES, SUCCESS } from '../data/site'

const input = () => screen.getByLabelText(FORM.label)

describe('SignupForm', () => {
  it('renders a labelled pill field described by the hint and the error slot', () => {
    render(<SignupForm />)

    expect(input()).toHaveAttribute('id', EMAIL_ID)
    expect(input()).toHaveAttribute('type', 'email')
    expect(input()).toHaveAttribute('name', 'email')
    expect(input()).toHaveAttribute('placeholder', FORM.placeholder)
    expect(input()).toHaveAttribute('aria-describedby', `${HINT_ID} ${ERROR_ID}`)
    expect(input()).not.toHaveAttribute('aria-invalid')

    expect(screen.getByText(FORM.hint)).toHaveAttribute('id', HINT_ID)
    expect(screen.getByRole('alert')).toHaveAttribute('id', ERROR_ID)
    expect(screen.getByRole('alert').textContent).toBe('')
    expect(screen.getByRole('button', { name: FORM.submit })).toHaveAttribute('type', 'submit')
  })

  it('reports an empty submit and focuses the field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: FORM.submit }))

    expect(screen.getByRole('alert').textContent).toBe(MESSAGES.empty)
    expect(input()).toHaveAttribute('aria-invalid', 'true')
    expect(input()).toHaveFocus()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reports an address without a TLD as incomplete', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(input(), 'alchie@studio')
    await user.click(screen.getByRole('button', { name: FORM.submit }))

    expect(screen.getByRole('alert').textContent).toBe(MESSAGES.incomplete)
    expect(input()).toHaveAttribute('aria-invalid', 'true')
    expect(input()).toHaveFocus()
  })

  it('tracks the value while typing instead of leaving a stale message', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: FORM.submit }))
    expect(screen.getByRole('alert').textContent).toBe(MESSAGES.empty)

    await user.type(input(), 'alchie@studio')
    expect(screen.getByRole('alert').textContent).toBe(MESSAGES.incomplete)
    expect(input()).toHaveAttribute('aria-invalid', 'true')

    await user.type(input(), '.com')
    expect(screen.getByRole('alert').textContent).toBe('')
    expect(input()).not.toHaveAttribute('aria-invalid')
  })

  it('clears the error when a valid address follows a typed one', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(input(), 'nope')
    await user.click(screen.getByRole('button', { name: FORM.submit }))
    expect(screen.getByRole('alert').textContent).toBe(MESSAGES.incomplete)

    await user.clear(input())
    await user.type(input(), 'alchie@studio.com')

    expect(screen.getByRole('alert').textContent).toBe('')
  })

  it('swaps the form for the confirmation on a valid submit, announced once', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(input(), '  alchie@studio.com  ')
    await user.click(screen.getByRole('button', { name: FORM.submit }))

    const status = screen.getByRole('status')

    expect(screen.queryByRole('button', { name: FORM.submit })).not.toBeInTheDocument()
    expect(screen.queryByLabelText(FORM.label)).not.toBeInTheDocument()
    expect(status.textContent).toBe(`${SUCCESS.strong}${SUCCESS.rest('alchie@studio.com')}`)
    expect(status.querySelector('strong')?.textContent).toBe(SUCCESS.strong)
    expect(status.querySelectorAll('svg')).toHaveLength(1)
    // announced by the live region, never by moving focus into it
    expect(status.contains(document.activeElement)).toBe(false)
  })
})
