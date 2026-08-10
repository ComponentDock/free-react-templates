import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'
import { emailPlaceholder, successMessage } from './Subscribe'

describe('Subscribe', () => {
  it('shows the heading, email input and subscribe button', () => {
    render(<Subscribe />)

    expect(screen.getByRole('heading', { name: 'Subscribe to newsletter' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(emailPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows a success message for a valid email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    const input = screen.getByPlaceholderText(emailPlaceholder)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(successMessage)
    expect(input).toHaveValue('')
  })

  it('shows a validation error and no success message for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByPlaceholderText(emailPlaceholder), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('recovers from an invalid submission after a valid one', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    const input = screen.getByPlaceholderText(emailPlaceholder)
    await user.type(input, 'bad')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'good@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(successMessage)
  })
})
