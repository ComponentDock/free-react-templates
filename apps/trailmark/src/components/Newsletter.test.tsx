import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the dark subscription band', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Your E-mail Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms the subscription after submit', () => {
    render(<Newsletter />)
    fireEvent.change(screen.getByLabelText('Your E-mail Address'), {
      target: { value: 'traveller@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('traveller@example.com')
  })
})
