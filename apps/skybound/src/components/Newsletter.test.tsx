import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the subscribe band with heading, copy, arrowless button and note', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Subscribeto Get Updated forOur Newsletter',
    )
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    const submit = screen.getByRole('button', { name: 'Subscribe' })
    expect(submit).toHaveClass('main-btn', 'main-btn-arrowless')
    expect(screen.getByText(/never share your email address/)).toBeInTheDocument()
    expect(screen.queryAllByRole('img')).toHaveLength(0)
  })

  it('validates the email locally and confirms a valid subscription', () => {
    render(<Newsletter />)
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks for subscribing! Please check your inbox.',
    )
  })
})
