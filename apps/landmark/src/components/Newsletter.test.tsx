import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, paragraph, email input and Subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: 'Subscribe Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    const section = screen
      .getByRole('heading', { name: 'Subscribe Newsletter' })
      .closest('section')!
    expect(section.className).toContain('bg-navy')
  })

  it('shows a success message after a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'buyer@example.com')
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('shows an inline error when submitting an empty email and recovers on retry', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email address.')

    await user.type(screen.getByLabelText('Email address'), 'renter@example.com')
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
  })
})
