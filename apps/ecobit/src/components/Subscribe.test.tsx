import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the heading, blurb, email input, and subscribe button', () => {
    render(<Subscribe />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Experience the most simple way to manage business',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/free trial/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('updates the email field and submits the form without reloading', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'hello@example.com')
    expect(input).toHaveValue('hello@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('hello@example.com')
  })
})
