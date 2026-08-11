import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the kicker, heading, paragraph and pill form', () => {
    render(<Subscribe />)

    expect(screen.getByText('About Our Restaurant')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We provide good food for your family' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    const form = screen.getByLabelText('Email address').closest('form') as HTMLElement
    expect(form.className).toMatch(/rounded-full/)
  })

  it('requires an email on submit', () => {
    render(<Subscribe />)

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })

  it('validates the email format', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'oops')
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
  })

  it('accepts a valid email and swaps to a success message', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'foodie@example.com')
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
