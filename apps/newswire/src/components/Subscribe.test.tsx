import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe, successMessage } from './Subscribe'
import { emailPlaceholder } from '../data'

describe('Subscribe', () => {
  it('renders the heading, email input and circular send button', () => {
    render(<Subscribe />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Newsletter Subscribe' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')
    expect(screen.getByPlaceholderText(emailPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toHaveClass('rounded-full')
  })

  it('shows a success message and clears the input for a valid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('status')).toHaveTextContent(successMessage)
    expect(screen.getByLabelText('Email address')).toHaveValue('')
  })

  it('shows a validation error and no success message for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('alert')).toHaveTextContent('valid email')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
  })
})
