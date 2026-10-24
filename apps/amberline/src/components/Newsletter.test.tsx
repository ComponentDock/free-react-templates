import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the amber band with a labelled email field and a subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Subscribe to Our Newsletter',
    )
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      'Enter your email address',
    )
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('rejects an empty and a malformed address inline', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('confirms a valid address inline', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('You are on the list')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
