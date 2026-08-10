import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the heading, email input, and subscribe button', () => {
    render(<Subscribe />)
    expect(screen.getByRole('heading', { name: /Subscribe to our Newsletter/ })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('swaps to a success message on submit', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText('Email address'), 'you@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
