import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SUBSCRIBE } from '../content'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the field and the green submit button in one gap-separated row', () => {
    render(<Subscribe />)
    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', SUBSCRIBE.placeholder)
    expect(input).toHaveAttribute('aria-invalid', 'false')
    expect(input.parentElement?.className).toContain('gap-[20px]')
    const submit = screen.getByRole('button', { name: SUBSCRIBE.submit })
    expect(submit.className).toContain('bg-action')
    expect(submit.className).toContain('h-[62px]')
  })

  it('flags an invalid address and keeps the field', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: SUBSCRIBE.submit }))

    expect(screen.getByRole('alert')).toHaveTextContent(SUBSCRIBE.error)
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveValue('not-an-email')
  })

  it('announces success and clears the field without a request', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'you@example.com')
    await user.click(screen.getByRole('button', { name: SUBSCRIBE.submit }))

    expect(screen.getByRole('status')).toHaveTextContent(SUBSCRIBE.success)
    expect(input).toHaveValue('')
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })
})
