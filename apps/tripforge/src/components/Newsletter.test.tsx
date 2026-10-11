import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the gradient band copy and subscribe form', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Subscribe to our Newsletter',
    )
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      'Enter email address',
    )
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks an invalid address and then confirms a valid subscription', () => {
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')

    fireEvent.change(input, { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'guest@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks for subscribing! Please check your inbox.',
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('clears the confirmation when a later submission is invalid', () => {
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')

    fireEvent.change(input, { target: { value: 'guest@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
