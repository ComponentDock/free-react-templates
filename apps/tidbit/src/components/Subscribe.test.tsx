import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'
import {
  emailPlaceholder,
  invalidEmailMessage,
  subscribeButtonLabel,
  subscribeHeading,
  successMessage,
} from '../data'

describe('Subscribe', () => {
  it('renders the heading, description, email input and subscribe button', () => {
    render(<Subscribe />)

    expect(screen.getByRole('heading', { name: subscribeHeading })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('placeholder', emailPlaceholder)
    expect(screen.getByRole('button', { name: subscribeButtonLabel })).toBeInTheDocument()
  })

  it('shows a validation error and no success for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent(invalidEmailMessage)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows a success message and clears the input for a valid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(successMessage)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveValue('')
    expect(screen.getByLabelText('Email address')).not.toHaveAttribute('aria-invalid')
  })

  it('recovers from an error once a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'broken')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
